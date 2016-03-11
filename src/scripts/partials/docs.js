$('body.examples section h2 div').each(function(e) {
    var $this = $(this);
    var nav = $('.doc-menu');

    nav.append('<li>' + $this.html() + '</li>');
});
