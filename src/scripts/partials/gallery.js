var body = $('body');

popup = {

    init: function() {
        $('.gallery figure').click(function() {
            popup.open($(this));
        });

        $(document).on('click', '.gallery-popup > img', function() {
            return false;
        }).on('click', '.gallery-popup', function() {
            popup.close();
        })
    },

    open: function($figure) {
        $('.gallery').addClass('pop');
        $popup =            $('<div class="gallery-popup" />').appendTo($('body'));
        $fig =              $figure.clone().appendTo($('.gallery-popup'));
        $bg =               $('<div class="bg" />').appendTo($('.gallery-popup'));
        $close =            $('<div class="close tooltipped tooltipped-w" aria-label="Close Modal"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg></div>').appendTo($fig);
        $shadow =           $('<div class="shadow" />').appendTo($fig);
        src =               $('img', $fig).attr('src');

        $shadow.css({backgroundImage: 'url(' + src + ')'});
        $bg.css({backgroundImage: 'url(' + src + ')'});
        body.addClass('freeze');

        setTimeout(function() {
            $('.gallery-popup').addClass('pop');
        }, 10);
    },

    close: function() {
        $('.gallery, .gallery-popup').removeClass('pop');
        body.removeClass('freeze');
        setTimeout(function(){
            $('.gallery-popup').remove()
        }, 100);
    }
}

popup.init();
