NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this),t=e.attr("title"),i=e.parent("a");if(i.size()<1){var o=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");i=e.wrap('<a href="'+o+'"></a>').parent("a")}i.addClass("fancybox fancybox.image"),i.attr("rel","group"),t&&(i.append('<p class="image-caption">'+t+"</p>"),i.attr("title",t))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){27===e.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var s=$(".back-to-top");$(window).on("scroll",function(){s.toggleClass("back-to-top-on",50<window.pageYOffset);var e=$(window).scrollTop(),t=$("#content").height(),i=$(window).height(),o=e/(i<t?t-i:$(document).height()-i),n=Math.round(100*o),r=100<n?100:n;$("#scrollpercent>span").html(r)}),s.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe"),s=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));function a(e){return{width:e.width(),height:e.height()}}function c(e,t){return t/e*100}e.each(function(){var e,t=this,i=$(this),o=a(i);if(0<this.src.search(s)){var n=c(o.width,o.height);i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var r=document.createElement("div");if(r.className="fluid-vids",r.style.position="relative",r.style.marginBottom="20px",r.style.width="100%",r.style.paddingTop=n+"%",t.parentNode.insertBefore(r,t),r.appendChild(t),0<this.src.search("music.163.com"))((e=a(i)).width>o.width||e.height<o.height)&&(r.style.paddingTop=c(e.width,o.height)+"%")}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&767<window.screen.width&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&!this.isPisces()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),t=e[0],i=t.offsetWidth-t.clientWidth;return e.remove(),i},needAffix:function(){return this.isPisces()}};