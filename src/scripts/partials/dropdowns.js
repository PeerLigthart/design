$('.dropdown-toggle').click(function (e) {
    e.preventDefault();
    var $this = $(this).parent();

    if ($this.hasClass('open')) {
        $this.removeClass('open');
    } else {
        $('.dropdown.open').removeClass('open');
        $this.addClass('open');
    }
});

// Close Dropdown Menu if you click elsewhere.
$(document).on('click', function(event) {
    if (!$(event.target).closest('.dropdown').length) {
        $('.dropdown.open').removeClass('open');
    }
});
