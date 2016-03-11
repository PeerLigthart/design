function scrollTo($element) {
    var target = $($element);
    var navigation =  $('.navigation');
    var offset = target.offset().top - navigation.height();

    console.log(offset);

    $('html, body').animate({
        scrollTop: offset
    }, 400);
};
