// build time:Thu Jul 02 2020 12:50:50 GMT+0800 (GMT+08:00)
$(function(){$("a.social-icon.search").on("click",function(){$("body").css({width:"100%",overflow:"hidden"});$(".search-dialog").css("display","block");$(".ais-search-box--input").focus();$(".search-mask").fadeIn();document.addEventListener("keydown",function e(i){if(i.code==="Escape"){a();document.removeEventListener("keydown",e)}})});var a=function(){$("body").css("width","");$("body").css("overflow","");$(".search-dialog").css({animation:"search_close .5s"});$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)});$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",a);var e=GLOBAL_CONFIG.algolia;var i=e.appId&&e.apiKey&&e.indexName;if(!i){return console.error("Algolia setting is invalid!")}var s=instantsearch({appId:e.appId,apiKey:e.apiKey,indexName:e.indexName,searchParameters:{hitsPerPage:e.hits.per_page||10},searchFunction:function(a){var e=$("#algolia-search-input").find("input");if(e.val()){a.search()}}});s.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:false,magnifier:false,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder}));s.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(a){var e=a.permalink?a.permalink:GLOBAL_CONFIG.root+a.path;return'<a href="'+e+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(a){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,a.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}));s.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(a){var e=GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,a.nbHits).replace(/\$\{time}/,a.processingTimeMS);return"<hr>"+e+'<span class="algolia-logo pull-right">'+'  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" />'+"</span>"}}}));s.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:false,showFirstLast:false,labels:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}}));s.start()});
//rebuild by neat 