$(function(e) {
    try {
        var onClass = "on";
        var showClass = "show";

        $("input").bind("checkval propertychange paste", function(){
            var label = $(this).prev("label");

            if(this.value !== ""){
                label.addClass(showClass);
            } else {
                label.removeClass(showClass);
            }
        }).on("keyup", function() {
            $(this).trigger("checkval");
        }).on("focus", function() {
            $(this).prev("label").addClass(onClass);
        }).on("blur", function() {
            $(this).prev("label").removeClass(onClass);
        }).trigger("checkval");
    } catch (err) {
        console.log(err.message);
    }
});
