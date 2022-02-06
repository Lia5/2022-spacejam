$(function() {
    // $('.js-preloader').preloadinator({
    //     minTime: 2000,
    //     afterRemovePreloader: function() {
    //         $(this).remove();
    //         $('body').removeClass('body-modal-open');
    //     }
    // });
    //menu
    if(jQuery('.menu-toggle').length) {
        var menu = $('.menu-toggle');
        menu.on('click', function(){
            $('.main-menu').toggleClass('active');
            $('.menu-toggle').toggleClass('active');
            $('body').toggleClass('body-modal-open');
        });
        $('.main-menu').mouseup(function (e){ // событие клика по веб-документу
            var div = $(".main-menu ul"); // тут указываем ID элемента
            var close = $('.menu-toggle');
            if (close.is(e.target)) {
        
            } else if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main-menu').toggleClass('active');
                $('.menu-toggle').toggleClass('active');
                $('body').toggleClass('body-modal-open');
              
            }
        });
    }
    //submenu
    if(jQuery('.parent-menu').length) {
        $(".submenu").hide();
        $(".parent-menu").click(function () {
        
          /*$(this).addClass("active");*/    
          // можно и иначе выбрать все другие блоки
          // вот так $(".pointer").not(this)
          if($(this).hasClass('active')){
            $(this).next().slideUp(800, 'linear').removeClass("active");
            $(this).removeClass('active');
          } else {
              $(this).next().slideDown(800, 'linear').addClass("active");
              $(".parent-menu").removeClass('active');
            $(this).addClass('active');
          }
        //   $(this).closest('ul')
        //     .find(".parent-menu").not(this).next()
        //     .slideUp(800, 'linear')
        //     .removeClass("active");

        });
    }

    if ( $('.copy-year').length) {
        var year = new Date().getFullYear()
        $('.copy-year').html(year);
    }

    if(jQuery('.scroll-to').length) {
        var $page = $('html, body');
        $('.scroll-to[href*="#"]').click(function() {
            console.log($(this).attr('href'));
            if ($(this).attr('href') == "#first") {
                $page.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top-100
                }, 400);
            } else {
                $page.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top-50
                }, 400);
            }
            if ( window.innerWidth < 768 || window.screen.width < 768) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
                $('body').removeClass('body-modal-open');
                $('.modal').removeClass('flex').addClass('disabled');
            }
            return false;
        });
    }

    if(jQuery('.lang').length) {
        $('.lang').on('click', function(){
            $(this).toggleClass('active');
            $('.lang__list').toggleClass('active');
        })
        $('body').mouseup(function (e){ // событие клика по веб-документу
            var div = $(".lang"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('active');
                $('.lang__list').removeClass('active');
                $(".submenu").slideUp(800, 'linear').removeClass("active");
            }
        });
    }
    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+380(99) 999-9999").focus();
        });

        $('.phone-mask').mask('+380(99) 999-9999').on('click', function () {
            console.log($(this).val());
            if ($(this).val() === '+380(__) ___-____') {
                $(this).get(0).setSelectionRange(0, 0);
            }
        });
    }
    // if(jQuery('.sticky').length) {
    //     $('.sticky .close').on('click', function(){
    //         $('.sticky').removeClass('active on').css('display', 'none');
    //     });
    // }
    

    // var upgrade = $('.upgrade'),
    // startX = -100,
    // startY = -100,
    // w = document.documentElement.offsetWidth,
    // h = document.documentElement.offsetHeight;

    // var startX1 = $('.upgrade__line1').css('transform').split(',')[4],
    // startY1 = $('.upgrade__line1').css('transform').split(',')[5].slice(0, -1),
    // startX2 = $('.upgrade__line2').css('transform').split(',')[4],
    // startY2 = $('.upgrade__line2').css('transform').split(',')[5].slice(0, -1),
    // startX3 = $('.upgrade__line3').css('transform').split(',')[4],
    // startY3 = $('.upgrade__line3').css('transform').split(',')[5].slice(0, -1),
    // startX4 = $('.upgrade__line4').css('transform').split(',')[4],
    // startY4 = $('.upgrade__line4').css('transform').split(',')[5].slice(0, -1),
    // startX5 = $('.upgrade__line5').css('transform').split(',')[4],
    // startY5 = $('.upgrade__line5').css('transform').split(',')[5].slice(0, -1),
    // startX6 = $('.upgrade__line6').css('transform').split(',')[4],
    // startY6 = $('.upgrade__line6').css('transform').split(',')[5].slice(0, -1);
    // upgrade.mousemove( function(evt){
    //     var posX1 = Math.round(evt.clientX / w * startX1),
    //         posY1 = Math.round(evt.clientY / h * startY1),
    //         posX2 = Math.round(evt.clientX / w * startX2),
    //         posY2 = Math.round(evt.clientY / h * startY2),
    //         posX3 = Math.round(evt.clientX / w * startX3),
    //         posY3 = Math.round(evt.clientY / h * startY3),
    //         posX4 = Math.round(evt.clientX / w * startX4),
    //         posY4 = Math.round(evt.clientY / h * startY4),
    //         posX5 = Math.round(evt.clientX / w * startX5),
    //         posY5 = Math.round(evt.clientY / h * startY5),
    //         posX6 = Math.round(evt.clientX / w * startX6),
    //         posY6 = Math.round(evt.clientY / h * startY6);
    //     $('.upgrade__line1').css('transform', "matrix(1, 0, 0, 1, "+ posX1 + ", "+ posY1 +")");
    //     $('.upgrade__line2').css('transform', "matrix(1, 0, 0, 1, "+ posX2 + ", "+ posY2 +")");
    //     $('.upgrade__line3').css('transform', "matrix(1, 0, 0, 1, "+ posX3 + ", "+ posY3 +")");
    //     $('.upgrade__line4').css('transform', "matrix(1, 0, 0, 1, "+ posX4 + ", "+ posY4 +")");
    //     $('.upgrade__line5').css('transform', "matrix(1, 0, 0, 1, "+ posX5 + ", "+ posY5 +")");
    //     $('.upgrade__line6').css('transform', "matrix(1, 0, 0, 1, "+ posX6 + ", "+ posY6 +")");
        
    // });

    //animation-text
    if(jQuery('.letters').length) {
        $.fn.animate_Text = function() {
            this.addClass('active');
            var string = this.text();
            return this.each(function(){
                var $this = $(this);
                $this.html(string.replace(/./g, '<span class="animated">$&</span>'));
                // $this.find('span.new').each(function(i, el){
                // setTimeout(function(){ $(el).addClass('fadeIn'); }, 40 * i);
                // });
            });
        };
        var letters = $('.letters');
        for (var j=0; j<=letters.length; j++) {
            $(letters[j]).animate_Text();
        }
    }

    //animation
    setTimeout(function(){  
            
        var introLetter = $(".animated-parent").find('.animated');
        introLetter.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeIn'); },i*20);
        });

        var IntroLinks = $(".promo-home__links").find('.animated');
        IntroLinks.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeInUp'); },i*200);
        });

        
    },500);


    //popup
    if(jQuery('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        //popup
        $(".modal-open").click(function (e){
          e.preventDefault();
          var btn = $(this);
          var numModal = btn.attr('href');
          var modal =  $(numModal);
          modalWrap.removeClass('fadeOutUp');
          modalWrap.addClass('fadeInDown');
        //   modalWrap.removeClass('animated zoomOut');
        //   modalWrap.addClass('animated zoomIn');
          modal.removeClass('disabled');
          modal.addClass('flex');
          $('body').addClass('body-modal-open');
          // body.addClass('body-modal');

        });
        $('.modal-close').click(function (){
            if ( window.innerWidth < 750 || window.screen.width < 750) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
            }
            modalWrap.removeClass('fadeInDown');
            modalWrap.addClass('fadeOutUp');
            // modalWrap.removeClass('animated zoomIn');
            // modalWrap.addClass('animated zoomOut');
            setTimeout(function() {
                $('.modal').addClass('disabled');
                }, 700);
            setTimeout(function() {
                $('.modal').removeClass('flex');
                $('body').removeClass('body-modal-open');
                }, 800);  
        });
        $('.modal').mouseup(function (e){ // событие клика по веб-документу
          var div = $(".modal__body"); // тут указываем ID элемента
          var close = $('.modal-close');
          if (close.is(e.target)) {
          } else if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
                var modalWrap = $('.modal__wrap');
                modalWrap.removeClass('fadeInDown');
                modalWrap.addClass('fadeOutUp');
                // modalWrap.removeClass('animated zoomIn');
                // modalWrap.addClass('animated zoomOut');
                setTimeout(function() {
                    $('.modal').addClass('disabled');
                }, 700);
                setTimeout(function() {
                    $('.modal').removeClass('flex');
                    $('body').removeClass('body-modal-open');
                }, 800);
          }
        });
    }
   // UTM
   function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    $('form').find('input.utm_source').each(function() {
        var a = getQueryVariable('utm_source');
        if(a){
            $(this).val(a);
        }
    }); 
    $('form').find('input.utm_medium').each(function() {
        var a = getQueryVariable('utm_medium');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_campaign').each(function() {
        var a = getQueryVariable('utm_campaign');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_term').each(function() {
        var a = getQueryVariable('utm_term');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_content').each(function() {
        var a = getQueryVariable('utm_content');
        if(a){
            $(this).val(a);
        }
    });

    // form
    $('form').submit(function() { 
        var form = $(this);
        form.find('.rfield').addClass('empty_field');

        // Функция проверки полей формы

        form.find('.rfield').each(function(){
            if($(this).val() != ''){
                // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
                if (!form.find('.empty_field').length) {
                    $.ajax({
                        type: "POST",
                        url: "mail.php", //Change
                        data: form.serialize()
                    }).done(function() {
                        var numModal = form.find('.btn-finish').attr('data-modal');
                        var modal =  $(numModal);
                        var modalWrap = $('.modal__wrap');
                        modalWrap.removeClass('fadeOutUp');
                        modalWrap.addClass('fadeInDown');
                        // modalWrap.removeClass('animated zoomOut');
                        // modalWrap.addClass('animated zoomIn');
                        $('.modal').addClass('disabled');
                        modal.removeClass('disabled');
                        modal.addClass('flex');
                        $('body').addClass('body-modal-open');
                        setTimeout(function() {
                            // Done Functions
                            // form.trigger("reset");
                        }, 1000);
                    });

                    // $.ajax({
                    //     method: "POST",
                    //     url: "../telegram.php", //Change
                    //     data: form.serialize()
                    // }).done(function(){});
                }
            } else {}
        });
		return false;
    });
    AnchorActive();
    if ( window.innerWidth < 767 || window.screen.width < 767) {
        $('.contact__body').addClass('fadeInUp');
    }

});


function AnchorActive() {
    $('*[data-anchor]').each(function(e) {
        var dataName = $(this).attr('data-anchor');
        var posit = $(this).offset().top - 400;
        if (dataName=="#contact") {
            var posit = $(this).offset().top - 200;
        }

        var windowPostition = $(window).scrollTop();

        if (windowPostition >= posit) {
            // console.log($('[data-menuAnchor="'+ dataName + '"]'));
            $('.main-menu a').removeClass('active');
            $('[data-menuanchor="'+ dataName + '"]').addClass('active');
            if (dataName=="#contact") {
                $('.contact__body').addClass('fadeInUp');
            } else {
                // $('.contact__body').removeClass('fadeInUp');
            }
        }

    });
};



$(window).resize(function() {
    AnchorActive();
});

var scrollPos = 0;
$(window).scroll(function(){
    
   var st = $(this).scrollTop();
   if (st > scrollPos){
     $('.header').addClass('hide');
     $(".submenu").slideUp(100, 'linear').removeClass("active");
   } else {
     $('.header').removeClass('hide');
   }
   scrollPos = st;
    AnchorActive();
    
        $('.callback').toggleClass('active', st > $('#about').offset().top-300);
    if ( window.innerWidth > 767 || window.screen.width > 767) {

        $('.sticky.on').toggleClass('active', st > $('#about').offset().top-300);

    }
        $('.logo img').toggleClass('active', st > 0);
        $('.home__logo').toggleClass('active', st > 0);
        $('.home__title').toggleClass('active', st > 0);
        var svgImg = $("svg .animated");
        svgImg.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ 
                if(st > 0) {
                    $this.addClass('fadeInDown'); 
                    $this.removeClass('fadeOutUp'); 
                } else {
                    $this.removeClass('fadeInDown'); 
                    $this.addClass('fadeOutUp'); 
                }

            },i*200);
        });

});
