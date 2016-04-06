// Initate these if field-wrapper is found
if ($('.field-wrapper').length) {
    $(function(e) {
        try {
            var onClass = 'is-on';
            var showClass = 'is-shown';

            $('*:not(select).form-control').bind('checkval propertychange paste', function() {
                var label = $(this).prev('label');

                if(this.value !== ''){
                    label.addClass(showClass);
                } else {
                    label.removeClass(showClass);
                }

            }).on('keyup', function() {
                $(this).trigger('checkval');
            }).on('focus', function() {
                $(this).prev('label').addClass(onClass);
            }).on('blur', function() {
                $(this).prev('label').removeClass(onClass);
            }).trigger('checkval');
        } catch (err) {
            console.log(err.message);
        }
    });

    if ($('select.form-control')) {
        var select = $('select.form-control').select2();
    }
}

// Initiate when a cc-number flag is found
if ($('.cc-number').length) {
    var field = $('.cc-number');

    field.payment('formatCardNumber');

    field.on('input propertychange paste keydown keyup', function() {
        var $this = $(this);
        var cardNumber = $this.val();
        var cardType = $.payment.cardType(cardNumber);
        var validCardNumber = $.payment.validateCardNumber(cardNumber);

        if (cardType) {
            $this.closest('.field-wrapper').addClass('show-card show-card-' + cardType.toLowerCase());
        } else {
            $this.closest('.field-wrapper').removeClass('show-card').removeClass(function (index, css) {
                return (css.match (/(^|\s)show-card-\S+/g) || []).join(' ');
            });
        }

        if (validCardNumber) {
            $this.closest('.field-wrapper').removeClass('is-invalid').addClass('is-valid');
        } else {
            $this.closest('.field-wrapper').addClass('is-invalid').removeClass('is-valid');
        }
    });
}

// Initiate when a cc-cvc flag is found
if ($('.cc-cvc').length) {
    var field = $('.cc-cvc');

    field.payment('formatCardCVC');

    field.on('input propertychange paste keydown keyup', function() {
        var $this = $(this);
        var cardCVC = $this.val();
        var validCVC = $.payment.validateCardCVC(cardCVC);

        if (validCVC) {
            $this.closest('.field-wrapper').removeClass('is-invalid').addClass('is-valid');
        } else {
            $this.closest('.field-wrapper').addClass('is-invalid').removeClass('is-valid');
        }
    });
}

// Initiate when a cc-expiry flag is found
if ($('.cc-expiry').length) {
    var field = $('.cc-expiry');

    field.payment('formatCardExpiry');

    field.on('input propertychange paste keydown keyup', function() {
        var $this = $(this);
        var cardExpiry = $this.payment('cardExpiryVal');
        var validExpiry = $.payment.validateCardExpiry(cardExpiry);

        if (validExpiry) {
            $this.closest('.field-wrapper').removeClass('is-invalid').addClass('is-valid');
        } else {
            $this.closest('.field-wrapper').addClass('is-invalid').removeClass('is-valid');
        }
    });
}
