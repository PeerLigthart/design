function scrollTo(e){var a=$(e),t=$(".navigation"),s=a.offset().top-t.height();console.log(s),$("html, body").animate({scrollTop:s},400)}function forcirServices(e){var a="";$.getJSON("https://api.forcir.com/services",function(t){for(var s in t){var i=t[s];a+='<a class="service-'+i["class"]+'" href="'+i.url+'"><i class="icon '+i.icon+'"></i><span>'+i.name+"</span></a>"}e.html(a)})}if(function(e){"use strict";function a(a,t){if("autofill"!=a&&"cleanURL"!=a){var s=!1,i=e('[name="'+a+'"]'),o=e('[name="'+a+'"]').prop("tagName").toLowerCase();a=decodeURIComponent(a),t=decodeURIComponent(t),"input"==o&&(i.val(t),s=!0),"textarea"==o&&(i.html(t),s=!0),"select"==o&&e(document).ready(function(e){i.val(t).trigger("change")}),s&&i.attr("autopopulated","true")}}var t=[],s=!1,i=!1;if(location.search)for(var o=location.search.substring(1).split("&"),r=0;r<o.length;r++){var l=o[r].split("=");l[0]&&("autofill"===l[0]&&"true"==l[1]&&(s=!0),"cleanURL"===l[0]&&"true"==l[1]&&(i=!0),t.push({key:l[0],value:l[1]||!0}))}if(s){for(var r=0;r<t.length;r++){var n=t[r];a(n.key,n.value)}e(document).ready(function(a){e('[class*="cc-"]').trigger("input")}),i&&history.pushState("data","",window.location.pathname)}}(jQuery),$(".graphed").length&&$(".graphed").each(function(e){var a=this,t=$(a).data("graph-items"),s=t.split(","),i=s.length,o=Math.max.apply(Math,s),r=Math.min.apply(Math,s),l=100/i;$(a).addClass("graph-"+e).append('<div class="graph"></div>'),$.each(s,function(e,t){var s=t/o*100;$(a).children(".graph").append('<i class="bar bar-'+e+'" data-amt="'+t+'" aria-label="'+t+' views" style="height:'+s+"%;width:"+l+'%;"></i>')}),$bar_highest=$('[data-amt="'+o+'"]').addClass("highest"),$bar_lowest=$('[data-amt="'+r+'"]').addClass("lowest"),$bar_highest_title=$($bar_highest).attr("aria-label"),$bar_lowest_title=$($bar_lowest).attr("aria-label"),$($bar_highest).attr("aria-label",$bar_highest_title+" (highest)"),$($bar_lowest).attr("aria-label",$bar_lowest_title+" (lowest)")}),$(".docs-page-toggle button").click(function(e){var a=$(this);$(".docs-page-toggle button").removeClass("active"),a.addClass("active"),a.hasClass("docs-page-toggle-design")&&($(".docs-page-content *").show(),$(".docs-page-content h2").show(),$("figure.highlight, figure.highlight *").hide()),a.hasClass("docs-page-toggle-code")&&($(".docs-page-content *").hide(),$(".docs-page-content h2").show(),$("figure.highlight, figure.highlight *").show()),a.hasClass("docs-page-toggle-both")&&($(".docs-page-content *").show(),$(".docs-page-content h2").show(),$("figure.highlight, figure.highlight *").show())}),$(".custom-cc-number").click(function(e){$('[for*="cc-"]').addClass("is-shown"),$(".cc-number").closest(".field-wrapper").removeClass("show-card").removeClass(function(e,a){return(a.match(/(^|\s)show-card-\S+/g)||[]).join(" ")}),$(".cc-number").val($(this).data("number")).trigger("input"),$(".cc-cvc").val($(this).data("cvc")).trigger("input"),$(".cc-expiry").val($(this).data("expiry")).trigger("input")}),$(".dropdown-toggle").click(function(e){e.preventDefault();var a=$(this).parent();a.hasClass("open")?a.removeClass("open"):($(".dropdown.open").removeClass("open"),a.addClass("open"))}),$(document).on("click",function(e){$(e.target).closest(".dropdown").length||$(".dropdown.open").removeClass("open")}),$(".field-wrapper").length&&($(function(e){try{var a="is-on",t="is-shown";$("*:not(select).form-control").bind("checkval propertychange paste",function(){var e=$(this).prev("label");""!==this.value?e.addClass(t):e.removeClass(t)}).on("keyup",function(){$(this).trigger("checkval")}).on("focus",function(){$(this).prev("label").addClass(a)}).on("blur",function(){$(this).prev("label").removeClass(a)}).trigger("checkval")}catch(s){console.log(s.message)}}),$("select.form-control")))var select=$("select.form-control").select2();if($(".cc-number").length){var field=$(".cc-number");field.payment("formatCardNumber"),field.on("input propertychange paste keydown keyup",function(){var e=$(this),a=e.val(),t=$.payment.cardType(a),s=$.payment.validateCardNumber(a);t?e.closest(".field-wrapper").addClass("show-card show-card-"+t.toLowerCase()):e.closest(".field-wrapper").removeClass("show-card").removeClass(function(e,a){return(a.match(/(^|\s)show-card-\S+/g)||[]).join(" ")}),s?e.closest(".field-wrapper").removeClass("is-invalid").addClass("is-valid"):e.closest(".field-wrapper").addClass("is-invalid").removeClass("is-valid")})}if($(".cc-cvc").length){var field=$(".cc-cvc");field.payment("formatCardCVC"),field.on("input propertychange paste keydown keyup",function(){var e=$(this),a=e.val(),t=$.payment.validateCardCVC(a);t?e.closest(".field-wrapper").removeClass("is-invalid").addClass("is-valid"):e.closest(".field-wrapper").addClass("is-invalid").removeClass("is-valid")})}if($(".cc-expiry").length){var field=$(".cc-expiry");field.payment("formatCardExpiry"),field.on("input propertychange paste keydown keyup",function(){var e=$(this),a=e.payment("cardExpiryVal"),t=$.payment.validateCardExpiry(a);t?e.closest(".field-wrapper").removeClass("is-invalid").addClass("is-valid"):e.closest(".field-wrapper").addClass("is-invalid").removeClass("is-valid")})}$(window).scroll(function(e){var a=$("html:not(.safari) .site-header");if(a.hasClass("site-header-parallax")){var t=$("head");$("#navigation-after-effects").length||t.append('<style id="navigation-after-effects" type="text/css"/>');var s=$("#navigation-after-effects"),i=($("body"),$(window).scrollTop()),o=$(".navigation"),r=80,l=$(".site-header").height()-o.height(),n=i/l*100;n>=100?(n=100,a.addClass("shadow"),o.addClass("shadow"),o.css("background-color","rgba(32, 125, 229, "+n/100+")")):(a.removeClass("shadow"),o.removeClass("shadow"),o.css("background-color","transparent")),a.css("margin-bottom",r*(n/100)),s.html('.site-header:after { content: ""; background-color: rgba(32, 125, 229, '+n/100+")}")}}),$(window).scroll(function(e){var a=$("body"),t=$(window).scrollTop(),s=$(".navigation"),i=s.height()+20,o=$(".return-to-top");t>=i?o.length||(a.append('<div class="return-to-top" aria-label="Return to top"><i/></div>'),$(".return-to-top").click(function(){$("html, body").animate({scrollTop:0},475)})):o.remove()}),$(".navigation-logo-project-link").click(function(e){$(this);forcirServices($(".navigation-logo-project-link ~ .dropdown-menu"))});var vh=$(window).height(),vw=$(window).width(),currentSlugs=window.location.pathname.split("/");vw>767&&$(".fixedsticky").length&&(FixedSticky.tests.sticky=!1,$(".fixedsticky").fixedsticky());for(var i=0,l=currentSlugs.length;l>i;i++)currentSlugs[i].length&&$("html").addClass(currentSlugs[i].toLowerCase().replace(/[^a-zA-Z 0-9]+/g,""));