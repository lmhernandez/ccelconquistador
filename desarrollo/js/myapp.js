
(function ($) {
    

    /*
    *******************************************************
                EFECTO DE APARECER LOGIN
    *******************************************************
    */
    $(".olvideClave").click(function () {
        $(".login-wrap .login-html .sign-in-htm").removeClass("transform0").addClass("transform180");
        $(".login-wrap .login-html  .sign-up-htm").removeClass("transform180").addClass("transform0");
    });
    $(".volverLogin").click(function () {
        $(".login-wrap .login-html .sign-up-htm").removeClass("transform0").addClass("transform180");
        $(".login-wrap .login-html  .sign-in-htm").removeClass("transform180").addClass("transform0");
    });

    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(1000).fadeOut(1000);
        }
    }
    /*
    *******************************************************

    *******************************************************
    */
    $(document).ready(function () {
        $('.navTrigger').click(function () {
            $(".nav-content").toggleClass("show_list").fadeIn(1500);
        });
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('nav-fix');
            } else {
                $('nav').removeClass('nav-fix');
            }
        });
        if ($('.tabs-home__box').length) {
            $('.tabs-home__box .tab-btn').on('click', function (e) {
                e.preventDefault();
                var target = $($(this).attr('href'));
                $('.tabs-home__box .tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                $('.tabs-home__box .tab').fadeOut(0);
                $('.tabs-home__box .tab').removeClass('tab-active');
                $(target).fadeIn(300);
                $(target).addClass('tab-active');
                var windowWidth = $(window).width();
                if (windowWidth <= 700) {
                    $('html, body').animate({
                        scrollTop: $('.tabs-home__box .tabs-home-content').offset().top
                    }, 1000);
                }
            });
        }
        if ($('.banner').length) {
            $('.owl-carousel.owl-banner').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                autoplay: 5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    },
                    1100: {
                        items: 1
                    }
                }
            });
        }
        /*
        *******************************************************
                        SLIDER NUESTRA FLOTA
        *******************************************************


        */
        // if ($('.nuestra-flota').length) {
        //     $('.owl-carousel.owl-flota').owlCarousel({
        //         loop: true,
        //         margin: 20,
        //         nav: true,
        //         autoplay: 5000,
        //         responsive: {
        //             0: {
        //                 items: 1
        //             },
        //             600: {
        //                 items: 2
        //             },
        //             800: {
        //                 items: 3
        //             },
        //             1024: {
        //                 items: 1
        //             },
        //             1100: {
        //                 items: 1
        //             }
        //         }
        //     });
        // }
        /*
        *******************************************************
                        SLIDER TESTIMONIOS
        *******************************************************
        */
        // if ($('.testimonios').length) {
        //     $('.owl-carousel.owl-testimonios').owlCarousel({
        //         loop: true,
        //         margin: 20,
        //         nav: true,
        //         autoplay: 5000,
        //         responsive: {
        //             0: {
        //                 items: 1
        //             },
        //             600: {
        //                 items: 2
        //             },
        //             800: {
        //                 items: 3
        //             },
        //             1024: {
        //                 items: 4
        //             },
        //             1100: {
        //                 items: 3
        //             }
        //         }
        //     });
        // }
    })

    /*
    *******************************************************
                    VALIDACIONES
    *******************************************************
    */
   datepicker();
    function datepicker() {
        $('.datepicker').datepicker({
        dateFormat: 'dd/mm/yy',
        showButtonPanel: false,
        changeMonth: false,
        changeYear: false,
        inline: true
        }).show();
        $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);
    }

  /*VALIDACIONES*/
        


})(window.jQuery);;