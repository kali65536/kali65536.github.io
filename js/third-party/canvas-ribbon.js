// build time:Thu Jul 02 2020 19:28:46 GMT+0800 (GMT+08:00)
!function(){var e=document.getElementById("ribbon");var t=e.getAttribute("mobile");if(t=="false"&&/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){return}var n={z:i(e,"zIndex",-1),a:i(e,"alpha",.6),s:i(e,"size",90),c:i(e,"data-click",true)};function i(e,t,n){if(n===true){return e.getAttribute(t)||n}return Number(e.getAttribute(t))||n}var o=document.createElement("canvas"),a=o.getContext("2d"),r=window.devicePixelRatio||1,c=window.innerWidth,l=window.innerHeight,d=n.s,u,s,h=Math,g=0,f=h.PI*2,b=h.cos,m=h.random;o.id="ribbon-canvas";o.width=c*r;o.height=l*r;a.scale(r,r);a.globalAlpha=n.a;o.style.cssText="opacity: "+n.a+";position:fixed;top:0;left:0;z-index: "+n.z+";width:100%;height:100%;pointer-events:none;";document.getElementsByTagName("body")[0].appendChild(o);function x(){a.clearRect(0,0,c,l);u=[{x:0,y:l*.7+d},{x:0,y:l*.7-d}];while(u[1].x<c+d)y(u[0],u[1])}function y(e,t){a.beginPath();a.moveTo(e.x,e.y);a.lineTo(t.x,t.y);var n=t.x+(m()*2-.25)*d,i=v(t.y);a.lineTo(n,i);a.closePath();g-=f/-50;a.fillStyle="#"+(b(g)*127+128<<16|b(g+f/3)*127+128<<8|b(g+f/3*2)*127+128).toString(16);a.fill();u[0]=u[1];u[1]={x:n,y:i}}function v(e){s=e+(m()*2-1.1)*d;return s>l||s<0?v(e):s}if(n.c!=="false"){document.onclick=x;document.ontouchstart=x}x()}();
//rebuild by neat 