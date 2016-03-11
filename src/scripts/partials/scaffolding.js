var vh = $(window).height();
var vw = $(window).width();
var currentSlugs = window.location.pathname.split('/');

// Apply FixedSticky function if the viewport is in acceptable range
// Also a check to see if there's even any fixedsticky classes.
if(vw > 767) {
    if ($('.fixedsticky').length) {
        FixedSticky.tests.sticky = false;
        $('.fixedsticky').fixedsticky();
    }
};

// Add all existing URL slugs to the body
// This is for various reasons: tracking and styling mostly though.
for ( var i = 0, l = currentSlugs.length; i < l; i++ ) {
    if (currentSlugs[i].length) {
        // Force lowercase and alphanumeric only
        $('html').addClass(currentSlugs[i].toLowerCase().replace(/[^a-zA-Z 0-9]+/g, ''));
    }
};
