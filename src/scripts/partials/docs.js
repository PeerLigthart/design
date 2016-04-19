$('.docs-page-toggle button').click(function(e) {
    var button = $(this);

    if (button.hasClass('docs-page-toggle-design')) {
        button.toggleClass('active');
        $('.docs-page-content').fadeToggle(function(e) {
            if ($(this).hasClass('invisible')) {
                $(this).removeClass('invisible');

                $('.docs-page-content-block').each(function() {
                    // Pair and match their heights :)
                    $('[aria-label="' + $(this).prev().attr('id') + '"]').equalizeHeights();
                });
            } else {
                $(this).addClass('invisible');
                $('.docs-page-content-block').css('height', 'auto');
            }
        });
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

$('.docs-page-content h2, .docs-page-code h2').each(function() {
    $(this).nextUntil("h2").wrapAll('<div class="docs-page-content-block" />');
});

$(window).on("load", function equalHeights() {
    $.fn.equalizeHeights = function() {
      return this.height(Math.max.apply(this, $(this).map(function(i,e) { return $(e).height() }).get()));
    }

    $('.docs-page-content-block').each(function() {
        // Assign a label for unique identification between content & code
        $(this).attr('aria-label', $(this).prev().attr('id'));
        // Pair and match their heights :)
        $('[aria-label="' + $(this).prev().attr('id') + '"]').equalizeHeights();
    });

    $('.docs-page-header, .docs-page-content, .docs-page-code').css('visibility', 'visible');
    $('.docs-page-loader').fadeOut('slow', function() {
        $(this).remove();
    });
});
