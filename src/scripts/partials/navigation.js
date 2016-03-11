$(window).scroll(function (event) {
    var body = $('body');
    var scroll = $(window).scrollTop();
    var navigation = $('.navigation');
    var offset = navigation.height() + 20;
    var services = $('.navigation-logo-project-link-services');
    var returnToTop = $('.return-to-top');

    if (scroll >= offset) {
        navigation.addClass('navigation-fixed');
        if (!returnToTop.length) {
            body.append('<div class="return-to-top" aria-label="Return to top"><i/></div>');
            $('.return-to-top').click(function () {
                $("html, body").animate({scrollTop: 0}, 475);
            });
        }
    } else {
        services.remove();
        returnToTop.remove();
        navigation.removeClass('navigation-fixed');
        $('.navigation-logo-project-link').removeClass('open');

    }
});

$('.navigation-logo-project-link').on('click', function (e) {
    var $this = $(this);
    if (!$('.navigation-logo-project-link-services').length) {
        e.preventDefault();

        $this.addClass('open').append('<div class="navigation-logo-project-link-services" />');
        var $services = $('.navigation-logo-project-link-services');

        $services.append('<div class="loader"><div class="loader-cube loader-cube-1"></div><div class="loader-cube loader-cube-2"></div><div class="loader-cube loader-cube-3"></div><div class="loader-cube loader-cube-4"></div><div class="loader-cube loader-cube-5"></div><div class="loader-cube loader-cube-6"></div><div class="loader-cube loader-cube-7"></div><div class="loader-cube loader-cube-8"></div><div class="loader-cube loader-cube-9"></div></div>');

        $.getJSON('https://rawgit.com/AustinPaquette/test/master/services.json', function(data) {
            for (var key in data.services) {
                var service = data.services[key];

                $services.append('<a class="' + service.class + '" href="' + service.url + '"><i class="icon icon-' + service.icon + '"></i><span>' + service.name + '</span></a>');
            }
        }).done(function(e) {
            $services.addClass('loaded');
            $('.loader').remove();
        });
    }
});

// Close Services Menu if you click elsewhere.
$(document).on('click', function(event) {
    if (!$(event.target).closest('.navigation-logo-project-link').length) {
        $('.navigation-logo-project-link').removeClass('open');
        $('.navigation-logo-project-link-services').addClass('hidden-animation-class');
        setTimeout(function () {
            $('.navigation-logo-project-link-services').remove();
        }, 175);
    }
});
