jQuery(document).ready(function($){function e(){var e=!$(".cd-dropdown").hasClass("dropdown-is-active");$(".cd-dropdown").toggleClass("dropdown-is-active",e),$(".cd-dropdown-trigger").toggleClass("dropdown-is-active",e),e||$(".cd-dropdown").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$(".has-children ul").addClass("is-hidden"),$(".move-out").removeClass("move-out"),$(".is-active").removeClass("is-active")})}$(".cd-dropdown-trigger").on("click",function(n){n.preventDefault(),e()}),$(".cd-dropdown .cd-close").on("click",function(n){n.preventDefault(),e()}),$(".has-children").children("a").on("click",function(e){e.preventDefault(),$(this).next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")});var n=($(".cd-dropdown-wrapper").hasClass("open-to-left"),"below");$(".cd-dropdown-content").menuAim({activate:function(e){$(e).children().addClass("is-active").removeClass("fade-out"),0==$(".cd-dropdown-content .fade-in").length&&$(e).children("ul").addClass("fade-in")},deactivate:function(e){$(e).children().removeClass("is-active"),(0==$("li.has-children:hover").length||$("li.has-children:hover").is($(e)))&&($(".cd-dropdown-content").find(".fade-in").removeClass("fade-in"),$(e).children("ul").addClass("fade-out"))},exitMenu:function(){return $(".cd-dropdown-content").find(".is-active").removeClass("is-active"),!0},submenuDirection:n});var o=$(".hamburger");o.on("click",function(e){o.toggleClass("is-active")}),$(".go-back").on("click",function(){var e=$(this),n=$(this).parent("ul").parent(".has-children").parent("ul");e.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")}),$(window).width()<1024&&($("nav").removeClass("dropdown-is-active"),$(".cd-dropdown").hide(),setTimeout(function(){$(".cd-dropdown").show()},250)),$(window).resize(function(){$(window).width()<1024?($("nav").removeClass("dropdown-is-active"),$(".cd-dropdown").hide(),setTimeout(function(){$(".cd-dropdown").show()},250)):$("nav").addClass("dropdown-is-active")}),Modernizr.input.placeholder||($("[placeholder]").focus(function(){var e=$(this);e.val()==e.attr("placeholder")&&e.val("")}).blur(function(){var e=$(this);""!=e.val()&&e.val()!=e.attr("placeholder")||e.val(e.attr("placeholder"))}).blur(),$("[placeholder]").parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var e=$(this);e.val()==e.attr("placeholder")&&e.val("")})}))});