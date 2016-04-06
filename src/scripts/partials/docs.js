$('.docs-page-toggle button').click(function(e) {
    var button = $(this);
    $('.docs-page-toggle button').removeClass('active');
    button.addClass('active');

    if (button.hasClass('docs-page-toggle-design')) {
        $('.docs-page-content *').show();
        $('.docs-page-content h2').show();
        $('figure.highlight, figure.highlight *').hide();
    }

    if (button.hasClass('docs-page-toggle-code')) {
        $('.docs-page-content *').hide();
        $('.docs-page-content h2').show();
        $('figure.highlight, figure.highlight *').show();
    }

    if (button.hasClass('docs-page-toggle-both')) {
        $('.docs-page-content *').show();
        $('.docs-page-content h2').show();
        $('figure.highlight, figure.highlight *').show();
    }
});

$('.custom-cc-number').click(function(e) {
    $('[for*="cc-"]').addClass('is-shown');
    $('.cc-number').closest('.field-wrapper').removeClass('show-card').removeClass(function (index, css) {
        return (css.match (/(^|\s)show-card-\S+/g) || []).join(' ');
    });
    $('.cc-number').val($(this).data('number')).trigger('input');
    $('.cc-cvc').val($(this).data('cvc')).trigger('input');
    $('.cc-expiry').val($(this).data('expiry')).trigger('input');
});
