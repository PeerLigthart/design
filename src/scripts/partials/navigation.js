$(window).scroll(function (event) {
    var body = $('body');
    var scroll = $(window).scrollTop();
    var navigation = $('.navigation');
    var offset = navigation.height() + 20;
    var returnToTop = $('.return-to-top');

    if (scroll >= offset) {
        if (!returnToTop.length) {
            body.append('<div class="return-to-top" aria-label="Return to top"><i/></div>');
            $('.return-to-top').click(function () {
                $("html, body").animate({scrollTop: 0}, 475);
            });
        }
    } else {
        returnToTop.remove();
    }
});

$('.navigation-logo-project-link').click(function (e) {
    var $this = $(this);
    forcirServices($('.navigation-logo-project-link ~ .dropdown-menu'));
});
