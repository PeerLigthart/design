function forcirServices($target) {
    var result = '';

    $.getJSON('https://api.forcir.com/services', function(data) {
        for (var key in data) {
            var service = data[key];
            result += '<a class="service-' + service.class + '" href="' + service.url + '"><i class="icon ' + service.icon + '"></i><span>' + service.name + '</span></a>';
        }
        $target.html(result);
    });
}
