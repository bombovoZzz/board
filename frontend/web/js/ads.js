$(document).ready(function () {
	
	// mini-slide
	$(function () {
	    
	    var ads = $('#ads-js'),
	        adsWrap = ads.find('.ads__block-img'),
	        adsWrapWidth = adsWrap.width(),
	        adsWrapHeight = adsWrap.height(),
	        adsImage = adsWrap.find('img');

	        // цикл для создание эффекта background-size: cover для images
	        for (var i = 0; i < adsImage.length; i++) {// проходим по всем полностью img во всех блоках
	            if (adsWrapWidth / adsWrapHeight >= 1 && adsImage.eq(i).width() / adsImage.eq(i).height() > 1) {// если ширина блока деленая на высоту блока равна или больше 1 и ширина img деленная на высоту img больше 1 тогда:
	                adsImage.eq(i).css({// задаем параметры
	                    height: '100%',
	                    width: 'auto'
	                });
	            } else{
	                adsImage.eq(i).css({
	                    height: 'auto',
	                    width: '100%'
	                });
	            }
	        }

	        // функция мини слайдера с двумя обезательными параметрами
	        var addImages = function (element, number) {

	            for (var i = 0; i < number; i++) {// цикл заполняющий в конце блока дивами с классами (append-line_(2 или 3))
	                
	                element.append('<div class="append-line_' + number + '"></div>');// передающему переменную с номером класса

	            }

	            element.children('.append-line_' + number + '').eq(0).addClass('ads__img-active');// добавляем активный клас для отображения первой линии слайдера

	            // функция изменяющая активные классы для линии и images
	            var toggleClassActive = function (data) {
	                element.children('.append-line_' + number + '').removeClass('ads__img-active');// удаляем у всех дивов с классом append-line(2 или 3) активный класс
	                element.children('.append-line_' + number + '').eq(data).addClass('ads__img-active');// добавляем определенному классу append-line(2 или 3) активный класс
	                element.children('img').removeClass('ads__img-active');// удаляем у всех img активный класс
	                element.children('img').eq(data).addClass('ads__img-active');// добавляем определенному img активный класс
	            };

	            var boolian;// переменная для проверки количества img в блоке

	            number == 2 ? boolian = false : boolian = true;// проверка если number = 2, тогда boolian = false, иначе boolian = true

	            // событие которое меняет классы на активные
	            element.mousemove(function (argument) {

	                var x = argument.pageX - $(this).offset().left;// переменная координат блока

	                if(x < adsWrapWidth / number) {// когда курсор находиться в первой части блока по оси Х
	                    toggleClassActive(0);// вызываем функцию удаляющие активные классы и передаем параметр нулевого масива для добавления активных классов
	                } 
	                if (x < (adsWrapWidth / number) * 2 && x > adsWrapWidth / number) {// когда курсор находиться во второй части блока по оси Х
	                    toggleClassActive(1);// вызываем функцию удаляющие активные классы и передаем параметр первого масива для добавления активных классов
	                } 
	                if (x > (adsWrapWidth / number) * 2 && boolian) {// когда курсор находиться в третей части блока по оси Х
	                    toggleClassActive(2);// вызываем функцию удаляющие активные классы и передаем параметр второго масива для добавления активных классов
	                }
	            });

	        };
	        
	    // цикл проверяющий наличие и количество img в блоках (.ads__img)
	    for (var i = 0; i < adsWrap.length; i++) {
	        adsWrap.eq(i).children(':first').addClass('ads__img-active');// во всех блоках даем img активный класс
	        if (adsWrap.eq(i).find('img').length >= 3) {// если количество img в блоке равно или больше 3
	            addImages(adsWrap.eq(i), 3);// тогда запускаем функцию addImages и передаем первым параметром обьект, в котором найдено количество img равное или больше 3 и вторым параметром длину масива максимальную 3 
	        } else if (adsWrap.eq(i).find('img').length == 2) {// если количество img в блоке равно 2
	            addImages(adsWrap.eq(i), 2);// тогда запускаем функцию addImages и передаем первым параметром обьект, в котором найдено количество img равное 2 и вторым параметром длину масива 2 
	        } else if(adsWrap.eq(i).find('img').length == 0){// если в блоке нет img
	            adsWrap.eq(i).css('background', '#000');// тогда даем ему фон черный
	        }
	    }

	});

	// end mini slide

	    // pagination
	    $(function () {
	    	
				var	paginationContent = $('#pagination__item-js'),
	    			pagination = $('#pagination-js'),// блок куда помещаем навигацию
	    			paginationPrev = $('.pagination-prev'),//кнлпка назад
	    			paginationNext = $('.pagination-next'),// кнопка вперед
	    			listAdsSum = 7,// показывающее количество элементов с рекламой
	    			remainder = 1;

	    	// общая функция определяющая показ количества рекламных блоков и навигации
	    	function paginations() {
	    		
	    		var listAds = $('#ads-js').children('.ads__block'),// все блоки с рекламой
	    			listAdsLength = listAds.length;// общая длина блоков с рекламой

	    		if (listAdsLength % listAdsSum == 0) {
	    			remainder = 0;
	    		}

	    		var listAdsFloor = Math.floor(listAdsLength / listAdsSum) + remainder;// округление в меньшую сторону показа общего количества навиганионных блоков 

	    		// проверка если общее количество рекламных блоков больше заданного количества показываемых блоков
	    		if (listAdsLength > listAdsSum) {
	    			for (var i = 0; i < listAdsFloor; i++) {// запускаем цикл до округленного числа в меньшую сторону общего количества навигационных блоков
	    				paginationContent.append('<span class="pagination__content-item">' + (i + 1) + '</span>');// добавляем в блок предназначенный для навигации тег span с текстом нумирации
	    			}
	    			paginationNext.css('display', 'inline-block');// и добавляем блок с кнопкой вперед
	    		} else{// а если количество рекламных блоков меньше или равно заданного количества показываемых блоков
	    			pagination.css('display', 'none');// тогда полностью удаляем блок в котором должна быть навигация
	    		}
	    		
	    		// после добавления при помощи append тегов span(количества блоков навигации)
				var paginationItem = $('.pagination__content-item'),//задаем переменую в которую складываем масив с тегами span
					index = 0;//и переменная для управление всей функции(индекс рекламных элементов)

				//функция для управления навигационными блоками и рекламными блоками с одним необезательным аргументом
				function paginationActives(boolian) {

					// при отрабатывании функции сразу подымаем весь документ на вверх
					$('html, body').animate({
						scrollTop: 0
					}, 500);

					// если передан в эту функцию параметр тогда делаем проверки для перехода с предыдущего на следующий навигационный блок и наоборот
					if (boolian == 'next' && index <= paginationItem.length - 2) {// если передан аргумент "next" и когда индекс дошел до последнего
						console.log('obj'); 
						index = index + 1;
					}
					if (boolian == 'prev' && index > 0) {
						index = index - 1;
					}

					paginationItem.removeClass('pagination-active');
					paginationItem.eq(index).addClass('pagination-active');

					if (index > 0) {
						paginationPrev.css('display', 'inline-block');
					} else{
						paginationPrev.css('display', '');
					}
					if (index == paginationItem.length - 1) {
						paginationNext.css('display', '');
					} else{
						paginationNext.css('display', 'inline-block');					
					}

					var sliceNumNext = 4,
						sliceNumPrev = 4;

					if (index < 4) {
						sliceNumNext = 8 - index;
					}
					if (paginationItem.length - index < 5) {
						sliceNumPrev = 9 - (paginationItem.length - index);
					}

					paginationItem.filter(':nth-child('+ (index + 1) +')').prevAll().css('display', 'inline-block');
					paginationItem.filter(':nth-child('+ (index + 1) +')').prevAll().slice(sliceNumPrev).css('display', 'none');
					paginationItem.filter(':nth-child('+ (index + 1) +') ~ *').css('display', 'inline-block');
					paginationItem.filter(':nth-child('+ (index + 1) +') ~ *').slice(sliceNumNext).css('display', 'none');
					
					listAds.show();
					listAds.eq(index * listAdsSum).prevAll().hide();
					listAds.eq(index * listAdsSum).nextAll().slice(listAdsSum - 1).hide();
				};

				paginationActives();

	    		paginationItem.on('click', function () {
	    			index = $(this).index();
	    			paginationActives();
	    		});	

	    		paginationNext.click(function () {
	    			paginationActives('next');
	    		});

	    		paginationPrev.click(function () {
	    			paginationActives('prev');
	    		});

	    	};

	    	paginations();

	    });

});