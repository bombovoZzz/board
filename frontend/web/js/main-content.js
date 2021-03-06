$(document).ready(function () {

	var touch;

	if ("ontouchstart" in document.documentElement) {
		touch = true;
	} else{
		touch = false;
	}

	// позицианирование елементов 
	$(function () {

		// функция position fixed с тремя обезательными аргументами
		// 1 параметр: элемент к которому применяетсся функция
		// 2 параметр: position(fixed или пустая строка(''), которая возвращает значение заданная изначально в css)
		// 3 параметр: высота на которой будет закреплен элемент
		function positionFixed(element, fixed, topElement) {

			$.each(element, function (index, arg) { // циклом проходим если element передается несколько обьектов
				
				var topSize = arg[1] || 0,// если елемент передаеться массивом с дополнительным параметром высоты - задаем этот параметр,
										  //  если без дополнительного параметра, тогда устанавливаем значение по умолчанию 0
					top = topElement + topSize;// высота элемента при position: fixed

				// функция стилизации
				function stylesElement(el) {

					var elementWidth = el.parent().width();
					el.css({
						position: fixed,
						top: top
					});						
					if (el.css('position') == 'fixed') {
						el.css({
							flex: '',
							width: elementWidth
						});	
					} else {
						el.css({
							width: '',
							flex: elementWidth
						});
					} 
				};

				if (element.length == 1) {// если в функцию передаеться только один обьект,
					stylesElement($(this));//  тогда стилизуем этот обьект
					return;// и выходим с функции
				}
				// если в функцию передаеться больше одного обьекта тогда запускаем проверку на количество переданных обьектов  
				if (arg.length == 1) {// если без доп.параметров устанавливаем стандартные стили
					stylesElement($(this));
				} else{// если с доп.параметром, тогда стандартную высоту складываем с этим параметром 
					stylesElement(arg[0].eq(0));
				}
				
			});
		};

		var crumbsHeight = $('#crumbs-js').outerHeight(true),
			headerHeight = $('#header-js').outerHeight(true),
			menu = $('#menu-js').children(),//  позиционирование блока menu
			filters = $('#filters-js'),// позиционирование блока filters
			filtersHeight = filters.outerHeight(true), 
			filtersContent = $('.filters-content'),// позиционирование блока filtersContent 
			description = $('.description-wrap'),
			menuTop = menu.offset().top,
			gapTop = 10,
			flag = true;

		// при изминении ширины окна пересчитуем высоту элемента от которой будем определять top элемента
		$(window).resize(function () {
			headerHeight = $('#header-js').outerHeight(true);
			if (menu.css('position') == 'fixed') {
				positionFixed({menu, filters, description}, 'fixed', headerHeight + gapTop);// и вызываем функцию с пересчитанными данными
			} else{
				positionFixed({menu, filters, description}, '', '');// и вызываем функцию с пересчитанными данными
			}
		});

		// при перезагрузки страницы определяем скролл документа и после делаем проверку 
		if ($(document).scrollTop() >= crumbsHeight - gapTop && flag) {// если больше положенного
			positionFixed({menu, filters, description}, 'fixed', headerHeight + gapTop);// запускаем функцию
		}

		// скролл элементов 
		$(document).scroll(function () {
			
			var scrollTop = $(this).scrollTop();

			if (scrollTop >= crumbsHeight - gapTop && flag) {
				positionFixed({menu, filters, description}, 'fixed', headerHeight + gapTop);
				flag = false;
			} 
			if (scrollTop < crumbsHeight - gapTop && !flag) {
				positionFixed({menu, filters, description}, '', '');
				flag = true;
			}

		});

	});
	//end позиционирование элементов

	// menu hover
	$(function () {
		
		var menu = $('#menu-js').children(),
			list = menu.find('.list'),
			listSpan = menu.find('span'),
			listNestedA = menu.find('.list__nested a'),
			index,
			set,
			lastX,
			x,
			time = 150;

		// удаляем класс menu-hover если включен скрипт
		menu.removeClass('menu-hover');

		// событие при клике на любую ссылку
		menu.find('a').click(function (event) {
			// event.preventDefault();// отменяем стандартный переход по ссылке
			var textA = $(this).text(),
				spase = / /g,
				comma = /,/g,
				way = textA.trim().replace(comma, '').replace(spase, '_');
				console.log(way);
		});

		// функция деактивации классов
		function deletesClass() {
			list.removeClass('list-active');
			menu.removeClass('list__href-active');
		};

		// функция активация классов
		function activesClass(element) {
			deletesClass();// сначало удалим активные классы
			menu.addClass('list__href-active');
			list.eq(index).addClass('list-active');
		};

		// событие, которое высчитывает координаты оси х во всем меню 
		menu.mousemove(function (event) {
			x = event.pageX - $(this).offset().left;// и записываем их в переменную
		});

		// функция с setTimeout, которая сравнивает переменную lastX с Х
		function autoInterval() {
			setTimeout(function() {// приравнивает с оттяжкой lastX с Х
				lastX = x;
			}, 500);// через пол секунды
			if (lastX == x) {// когда курсор мышки остановился и переменные выравнялись(проверка ожидает когда мышка остановиться при движении она не проверяеться)
				activesClass();// вызываем функцию hover эфекта 
				clearInterval(set);
			} 
			if (x < lastX) {// когда мышка в движении влево 
				activesClass();// вызываем функцию hover эфекта 
			}
		};

		// при наведении на любой из всех list 
		list.hover(function () {
			index = $(this).index();// задаем переменной index массива наведенного на элемент list
			set = setInterval(autoInterval, time);// и запускаем setinterval с функцией autoInterval
		}, function () {// когда курсор уходит с блока list
			clearInterval(set);// останавливаем setinterval, чтобы не сработала функция autoInterval
		});

		// при наведении на все меню
		menu.hover(function () {
			activesClass();// вызываем разовую функцию
		}, function () {// когда курсор уходит со всего меню
			deletesClass();// удаляем активные классы
		});

		// если заход был не через touch устройство 
		if (!touch) {
			menu.click(function () {// тогда при клике на любом элементе menu
				deletesClass();// удаляем все активные классы
			});
		} else{
			time = 4;
			listSpan.hover(function () {
				deletesClass();
			});
			listNestedA.hover(function () {
				deletesClass();
			});
		}

	});
	// end menu hover

	// filters
	$(function () {
		
        var filters = $('#filters-js'),
            category = filters.children(),
            categoryI = category.children('i'),
            filtersOpen = $('.filters-open'),
            filtersWrap = filtersOpen.children();

        // функция меняющая активные классы в filters и filters-open
        function filtersActive(element) {
            
            var index = element.index();// узнаем индекс element

            // когда при клике блок filters находиться в position: fixed
	        if (filters.css('position') == 'fixed') {
	        	$('html, body').animate({// прокручиваем скролл всей страницы на вверх
	        		scrollTop: 0
	        	}, 500);
	        	if (element.hasClass('filters__category-active')) {// если клик приходиться на активном filters 
	        		return;// выходим из функции, чтобы не закрыть этот активный блок
	        	}
	        }
	        
            // запускаем цикл на удаление всех активных классов кроме того на котором кликнули
            for (var i = 0; i < category.length; i++) {
                if (i == index) {// проверка если i совпадает с индексом 
                    continue;// тогда пропускаем удаление активных классов у этого элемента
                }
                category.eq(i).removeClass('filters__category-active');// удаление активных классов у элементов filters__category
                filtersOpen.eq(i).removeClass('filters-open-active');// удаление активных классов у элементов filters-open
            }

            element.toggleClass('filters__category-active');// изменяем классы с активного на неактивный и наоборот
            filtersOpen.eq(index).toggleClass('filters-open-active');// изменяем классы с активного на неактивный и наоборот

        };

        // по клику на элемент запускаем функцию filtersActive с передачей аргумента (обьекта на который кликнули(this)) 
        category.click(function () {
            filtersActive($(this));
        });	


	});
	// end filters

    // работа с формами
    $(function () {
        
        var dealSpan = $('#deal-span'),
            sortingSpan = $('#sorting-span'),
            citySpan = $('#city-span'),
            cityBtn = $('#city-btn');

        // filters data
        // --------------------------------------------------------
        var dataFilter = {
            city: 'all',
            deal: 'selling',
            sorting: 'date'
        };

        cityBtn.click(function () {
            var city = $('#city').val();
            dataFilter.city = city;
            citySpan.text(city);
        });

        $('#deal input').on('change', function() {
           if ($('#sale').is(':checked')) {
            dataFilter.deal = 'selling';
            dealSpan.text('Продажа');
           } else{
            dataFilter.deal = 'buy';
            dealSpan.text('Покупка');
           }
        });

        $('#sorting input').on('change', function() {
           if ($('#sorting-date').is(':checked')) {
            dataFilter.sorting = 'date';
            sortingSpan.text('дате');
           } else if ($('#sorting-price-up').is(':checked')) {
            dataFilter.sorting = 'priceUp';
            sortingSpan.html('цене &uarr;');
           } else {
            dataFilter.sorting = 'priceDown';
            sortingSpan.html('цене &darr;');
           }
        });

    });
    // end работа с формами


});