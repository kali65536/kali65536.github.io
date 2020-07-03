// build time:Fri Jul 03 2020 17:51:40 GMT+0800 (GMT+08:00)
(function(t,i){if(typeof window==="object"){window[t]=i()}})("Ribbons",function(){var t=window,i=document.body,n=document.documentElement;var o=function(){if(arguments.length===1){if(Array.isArray(arguments[0])){var t=Math.round(o(0,arguments[0].length-1));return arguments[0][t]}return o(0,arguments[0])}else if(arguments.length===2){return Math.random()*(arguments[1]-arguments[0])+arguments[0]}return 0};var s=function(o){var s=Math.max(0,t.innerWidth||n.clientWidth||i.clientWidth||0),e=Math.max(0,t.innerHeight||n.clientHeight||i.clientHeight||0),h=Math.max(0,t.pageXOffset||n.scrollLeft||i.scrollLeft||0)-(n.clientLeft||0),a=Math.max(0,t.pageYOffset||n.scrollTop||i.scrollTop||0)-(n.clientTop||0);return{width:s,height:e,ratio:s/e,centerx:s/2,centery:e/2,scrollx:h,scrolly:a}};var e=function(t){var i=s(t),n=t?Math.max(0,t.pageX||t.clientX||0):0,o=t?Math.max(0,t.pageY||t.clientY||0):0;return{mousex:n,mousey:o,centerx:n-i.width/2,centery:o-i.height/2}};var h=function(t,i){this.x=0;this.y=0;this.set(t,i)};h.prototype={constructor:h,set:function(t,i){this.x=t||0;this.y=i||0},copy:function(t){this.x=t.x||0;this.y=t.y||0;return this},multiply:function(t,i){this.x*=t||1;this.y*=i||1;return this},divide:function(t,i){this.x/=t||1;this.y/=i||1;return this},add:function(t,i){this.x+=t||0;this.y+=i||0;return this},subtract:function(t,i){this.x-=t||0;this.y-=i||0;return this},clampX:function(t,i){this.x=Math.max(t,Math.min(this.x,i));return this},clampY:function(t,i){this.y=Math.max(t,Math.min(this.y,i));return this},flipX:function(){this.x*=-1;return this},flipY:function(){this.y*=-1;return this}};var a=function(t){this._canvas=null;this._context=null;this._sto=null;this._width=0;this._height=0;this._scroll=0;this._ribbons=[];this._options={colorSaturation:"80%",colorBrightness:"60%",colorAlpha:.65,colorCycleSpeed:6,verticalPosition:"center",horizontalSpeed:150,ribbonCount:5,strokeSize:5,parallaxAmount:-.5,animateSections:true};this._onDraw=this._onDraw.bind(this);this._onResize=this._onResize.bind(this);this._onScroll=this._onScroll.bind(this);this.setOptions(t);this.init()};a.prototype={constructor:a,setOptions:function(t){if(typeof t==="object"){for(var i in t){if(t.hasOwnProperty(i)){this._options[i]=t[i]}}}},init:function(){try{this._canvas=document.createElement("canvas");this._canvas.style["display"]="block";this._canvas.style["position"]="fixed";this._canvas.style["margin"]="0";this._canvas.style["padding"]="0";this._canvas.style["border"]="0";this._canvas.style["outline"]="0";this._canvas.style["left"]="0";this._canvas.style["top"]="0";this._canvas.style["width"]="100%";this._canvas.style["height"]="100%";this._canvas.style["z-index"]="-1";this._onResize();this._context=this._canvas.getContext("2d");this._context.clearRect(0,0,this._width,this._height);this._context.globalAlpha=this._options.colorAlpha;window.addEventListener("resize",this._onResize);window.addEventListener("scroll",this._onScroll);document.body.appendChild(this._canvas)}catch(t){console.warn("Canvas Context Error: "+t.toString());return}this._onDraw()},addRibbon:function(){var t=Math.round(o(1,9))>5?"right":"left",i=1e3,n=200,s=0-n,e=this._width+n,a=0,r=0,l=t==="right"?s:e,c=Math.round(o(0,this._height));if(/^(top|min)$/i.test(this._options.verticalPosition)){c=0+n}else if(/^(middle|center)$/i.test(this._options.verticalPosition)){c=this._height/2}else if(/^(bottom|max)$/i.test(this._options.verticalPosition)){c=this._height-n}var p=[],_=new h(l,c),d=new h(l,c),u=null,f=Math.round(o(0,360)),b=0;while(true){if(i<=0)break;i--;a=Math.round((Math.random()*1-.2)*this._options.horizontalSpeed);r=Math.round((Math.random()*1-.5)*(this._height*.25));u=new h;u.copy(d);if(t==="right"){u.add(a,r);if(d.x>=e)break}else if(t==="left"){u.subtract(a,r);if(d.x<=s)break}p.push({point1:new h(_.x,_.y),point2:new h(d.x,d.y),point3:u,color:f,delay:b,dir:t,alpha:0,phase:0});_.copy(d);d.copy(u);b+=4;f+=this._options.colorCycleSpeed}this._ribbons.push(p)},_drawRibbonSection:function(t){if(t){if(t.phase>=1&&t.alpha<=0){return true}if(t.delay<=0){t.phase+=.02;t.alpha=Math.sin(t.phase)*1;t.alpha=t.alpha<=0?0:t.alpha;t.alpha=t.alpha>=1?1:t.alpha;if(this._options.animateSections){var i=Math.sin(1+t.phase*Math.PI/2)*.1;if(t.dir==="right"){t.point1.add(i,0);t.point2.add(i,0);t.point3.add(i,0)}else{t.point1.subtract(i,0);t.point2.subtract(i,0);t.point3.subtract(i,0)}t.point1.add(0,i);t.point2.add(0,i);t.point3.add(0,i)}}else{t.delay-=.5}var n=this._options.colorSaturation,o=this._options.colorBrightness,s="hsla("+t.color+", "+n+", "+o+", "+t.alpha+" )";this._context.save();if(this._options.parallaxAmount!==0){this._context.translate(0,this._scroll*this._options.parallaxAmount)}this._context.beginPath();this._context.moveTo(t.point1.x,t.point1.y);this._context.lineTo(t.point2.x,t.point2.y);this._context.lineTo(t.point3.x,t.point3.y);this._context.fillStyle=s;this._context.fill();if(this._options.strokeSize>0){this._context.lineWidth=this._options.strokeSize;this._context.strokeStyle=s;this._context.lineCap="round";this._context.stroke()}this._context.restore()}return false},_onDraw:function(){for(var t=0,i=this._ribbons.length;t<i;++t){if(!this._ribbons[t]){this._ribbons.splice(t,1)}}this._context.clearRect(0,0,this._width,this._height);for(var n=0;n<this._ribbons.length;++n){var o=this._ribbons[n],s=o.length,e=0;for(var h=0;h<s;++h){if(this._drawRibbonSection(o[h])){e++}}if(e>=s){this._ribbons[n]=null}}if(this._ribbons.length<this._options.ribbonCount){this.addRibbon()}requestAnimationFrame(this._onDraw)},_onResize:function(t){var i=s(t);this._width=i.width;this._height=i.height;if(this._canvas){this._canvas.width=this._width;this._canvas.height=this._height;if(this._context){this._context.globalAlpha=this._options.colorAlpha}}},_onScroll:function(t){var i=s(t);this._scroll=i.scrolly}};return a});var cn=document.getElementById("ribbon_piao");var mb=cn.getAttribute("mobile");if(mb=="false"&&/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){}else{new Ribbons({colorSaturation:"60%",colorBrightness:"50%",colorAlpha:.5,colorCycleSpeed:5,verticalPosition:"random",horizontalSpeed:200,ribbonCount:3,strokeSize:0,parallaxAmount:-.2,animateSections:true})}
//rebuild by neat 