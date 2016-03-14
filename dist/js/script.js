function scrollTo(e){var a=$(e),o=$(".navigation"),i=a.offset().top-o.height();console.log(i),$("html, body").animate({scrollTop:i},400)}$(".graphed").length&&$(".graphed").each(function(e){var a=this,o=$(a).data("graph-items"),i=o.split(","),l=i.length,s=Math.max.apply(Math,i),t=Math.min.apply(Math,i),n=100/l;$(a).addClass("graph-"+e).append('<div class="graph"></div>'),$.each(i,function(e,o){var i=o/s*100;$(a).children(".graph").append('<i class="bar bar-'+e+'" data-amt="'+o+'" aria-label="'+o+' views" style="height:'+i+"%;width:"+n+'%;"></i>')}),$bar_highest=$('[data-amt="'+s+'"]').addClass("highest"),$bar_lowest=$('[data-amt="'+t+'"]').addClass("lowest"),$bar_highest_title=$($bar_highest).attr("aria-label"),$bar_lowest_title=$($bar_lowest).attr("aria-label"),$($bar_highest).attr("aria-label",$bar_highest_title+" (highest)"),$($bar_lowest).attr("aria-label",$bar_lowest_title+" (lowest)")}),$("body.examples section h2 div").each(function(e){var a=$(this),o=$(".doc-menu");o.append("<li>"+a.html()+"</li>")}),$(function(e){try{var a="on",o="show";$("input").bind("checkval propertychange paste",function(){var e=$(this).prev("label");""!==this.value?e.addClass(o):e.removeClass(o)}).on("keyup",function(){$(this).trigger("checkval")}).on("focus",function(){$(this).prev("label").addClass(a)}).on("blur",function(){$(this).prev("label").removeClass(a)}).trigger("checkval")}catch(i){console.log(i.message)}});var body=$("body");popup={init:function(){$(".gallery figure").click(function(){popup.open($(this))}),$(document).on("click",".gallery-popup > img",function(){return!1}).on("click",".gallery-popup",function(){popup.close()})},open:function(e){$(".gallery").addClass("pop"),$popup=$('<div class="gallery-popup" />').appendTo($("body")),$fig=e.clone().appendTo($(".gallery-popup")),$bg=$('<div class="bg" />').appendTo($(".gallery-popup")),$close=$('<div class="close tooltipped tooltipped-w" aria-label="Close Modal"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use></svg></div>').appendTo($fig),$shadow=$('<div class="shadow" />').appendTo($fig),src=$("img",$fig).attr("src"),$shadow.css({backgroundImage:"url("+src+")"}),$bg.css({backgroundImage:"url("+src+")"}),body.addClass("freeze"),setTimeout(function(){$(".gallery-popup").addClass("pop")},10)},close:function(){$(".gallery, .gallery-popup").removeClass("pop"),body.removeClass("freeze"),setTimeout(function(){$(".gallery-popup").remove()},100)}},popup.init(),$(window).scroll(function(e){var a=$("body"),o=$(window).scrollTop(),i=$(".navigation"),l=i.height()+20,s=$(".navigation-logo-project-link-services"),t=$(".return-to-top");o>=l?(i.addClass("navigation-fixed"),t.length||(a.append('<div class="return-to-top" aria-label="Return to top"><i/></div>'),$(".return-to-top").click(function(){$("html, body").animate({scrollTop:0},475)}))):(s.remove(),t.remove(),i.removeClass("navigation-fixed"),$(".navigation-logo-project-link").removeClass("open"))}),$(".navigation-logo-project-link").on("click",function(e){var a=$(this);if(!$(".navigation-logo-project-link-services").length){e.preventDefault(),a.addClass("open").append('<div class="navigation-logo-project-link-services" />');var o=$(".navigation-logo-project-link-services");o.append('<div class="loader"><div class="loader-cube loader-cube-1"></div><div class="loader-cube loader-cube-2"></div><div class="loader-cube loader-cube-3"></div><div class="loader-cube loader-cube-4"></div><div class="loader-cube loader-cube-5"></div><div class="loader-cube loader-cube-6"></div><div class="loader-cube loader-cube-7"></div><div class="loader-cube loader-cube-8"></div><div class="loader-cube loader-cube-9"></div></div>'),$.getJSON("https://rawgit.com/Forcir/forcir.com/master/services.json",function(e){for(var a in e.services){var i=e.services[a];o.append('<a class="'+i["class"]+'" href="'+i.url+'"><i class="icon icon-'+i.icon+'"></i><span>'+i.name+"</span></a>")}}).done(function(e){o.addClass("loaded"),$(".loader").remove()})}}),$(document).on("click",function(e){$(e.target).closest(".navigation-logo-project-link").length||($(".navigation-logo-project-link").removeClass("open"),$(".navigation-logo-project-link-services").addClass("hidden-animation-class"),setTimeout(function(){$(".navigation-logo-project-link-services").remove()},175))});var vh=$(window).height(),vw=$(window).width(),currentSlugs=window.location.pathname.split("/");vw>767&&$(".fixedsticky").length&&(FixedSticky.tests.sticky=!1,$(".fixedsticky").fixedsticky());for(var i=0,l=currentSlugs.length;l>i;i++)currentSlugs[i].length&&$("html").addClass(currentSlugs[i].toLowerCase().replace(/[^a-zA-Z 0-9]+/g,""));