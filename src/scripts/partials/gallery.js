gallery = {
    init: function() {
        $('.gallery-image').click(function(e) {
            var $this = $(this);

            gallery.open($this);
            return false;
        });

        // Close Gallery Item if you click somewhere not on content.
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.gallery-popup-content').length) {
                gallery.close();

            // And then close it if you click the close element or any child thereof
            } else if ($(event.target).closest('.gallery-close').length) {
                gallery.close();
            }
        });
    },

    open: function(image) {
        var body = $('body');
        body.addClass('freeze blur').append('<div class="gallery-popup" />');

        $('.gallery-popup').append('<div class="gallery-popup-content" />');
        $('.gallery-popup-content').append('<img src="' + image.attr('src') + '" />').append('<i class="gallery-close" aria-label="Close Image"><i/></i>');
    },

    close: function() {
        var body = $('body');

        $('.gallery-popup').remove();
        body.removeClass('freeze blur');
    }
}

gallery.init();
