if ($('.graphed').length) {
    $('.graphed').each(function( index ) {
        var $this = this;
        var $values = $($this).data('graph-items');
        var $values_array = $values.split(',');
        var $values_count = $values_array.length;
        var $values_highest = Math.max.apply(Math, $values_array);
        var $values_lowest = Math.min.apply(Math, $values_array);

        var $bar_width = 100 / $values_count;

        $($this).addClass('graph-' + index).append('<div class="graph"></div>');
        $.each($values_array, function(index, item) {
            var $bar_height = (item / $values_highest) * 100;
            $($this).children('.graph').append('<i class="bar bar-' + index + '" data-amt="' + item + '" aria-label="' + item + ' views" style="height:' + $bar_height + '%;width:' + $bar_width + '%;"></i>');
        });

        $bar_highest = $('[data-amt="' + $values_highest + '"]').addClass('highest');
        $bar_lowest = $('[data-amt="' + $values_lowest + '"]').addClass('lowest');

        $bar_highest_title = $($bar_highest).attr('aria-label');
        $bar_lowest_title = $($bar_lowest).attr('aria-label');

        $($bar_highest).attr('aria-label', $bar_highest_title + " (highest)");
        $($bar_lowest).attr('aria-label', $bar_lowest_title + " (lowest)");
    });
}
