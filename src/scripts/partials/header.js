$(window).scroll(function (event) {
    // Scroll Issues on Safari Devices
    // So it's gets complete disabled
    var header = $('html:not(.safari) .site-header');
    
    if (header.hasClass('site-header-parallax')) {
        var head = $('head');
        if (!$('#navigation-after-effects').length)
            head.append('<style id="navigation-after-effects" type="text/css"/>');

        var stylesheet = $('#navigation-after-effects');

        var body = $('body');
        var scroll = $(window).scrollTop();

        var navigation = $('.navigation');

        var headerMarginBase = 80;
        var headerHeight = $('.site-header').height() - (navigation.height());
        var headerScroll = (scroll / headerHeight) * 100;

        if (headerScroll >= 100) {
            headerScroll = 100;
            header.addClass('shadow');
            navigation.addClass('shadow');
            navigation.css('background-color', 'rgba(32, 125, 229, ' + (headerScroll / 100) + ')');
        } else {
            header.removeClass('shadow');
            navigation.removeClass('shadow');
            navigation.css('background-color', 'transparent');
        }

        header.css('margin-bottom', ((headerMarginBase * (headerScroll / 100))));
        stylesheet.html('.site-header:after { content: ""; background-color: rgba(32, 125, 229, ' + (headerScroll / 100) + ')}');
    }
});
