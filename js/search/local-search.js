// build time:Tue Jun 30 2020 18:04:56 GMT+0800 (GMT+08:00)
$(function(){var e=false;$("a.social-icon.search").on("click",function(){$("body").css({width:"100%",overflow:"hidden"});$(".search-dialog").css("display","block");$("#local-search-input input").focus();$(".search-mask").fadeIn();if(!e){t(GLOBAL_CONFIG.localSearch.path);e=true}document.addEventListener("keydown",function s(e){if(e.code==="Escape"){a();document.removeEventListener("keydown",s)}})});var a=function(){$("body").css("width","");$("body").css("overflow","");$(".search-dialog").css({animation:"search_close .5s"});$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)});$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",a);function t(e){$.ajax({url:GLOBAL_CONFIG.root+e,dataType:"xml",success:function(e){var a=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var t=$("#local-search-input input")[0];var s=$("#local-hits")[0];t.addEventListener("input",function(){var e='<div class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s]+/);s.innerHTML="";if(this.value.trim().length<=0){$(".local-search-stats__hr").hide();return}var i=0;a.forEach(function(a){var s=true;if(!a.title||a.title.trim()===""){a.title="Untitled"}var r=a.title.trim().toLowerCase();var c=a.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var n=a.url;var l=-1;var o=-1;var h=-1;if(r!==""||c!==""){t.forEach(function(e,a){l=r.indexOf(e);o=c.indexOf(e);if(l<0&&o<0){s=false}else{if(o<0){o=0}if(a===0){h=o}}})}else{s=false}if(s){var u=a.content.trim().replace(/<[^>]+>/g,"");if(h>=0){var f=h-30;var d=h+100;if(f<0){f=0}if(f===0){d=100}if(d>u.length){d=u.length}var v=u.substring(f,d);t.forEach(function(e){var a=new RegExp(e,"gi");v=v.replace(a,'<span class="search-keyword">'+e+"</span>");r=r.replace(a,'<span class="search-keyword">'+e+"</span>")});e+='<div class="local-search__hit-item"><a href="'+n+'" class="search-result-title">'+r+"</a>";i+=1;$(".local-search-stats__hr").show();if(c!==""){e+='<p class="search-result">'+v+"...</p>"}}e+="</div>"}});if(i===0){e+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"}e+="</div>";s.innerHTML=e})}})}});
//rebuild by neat 