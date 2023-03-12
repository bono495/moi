!function(r,t){"object"==typeof exports&&typeof module<"u"?module.exports=t():"function"==typeof define&&define.amd?define(t):(r=r||self).ConfettiGenerator=t()}(this,function(){"use strict";return function(r){var t={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(r&&(r.target&&(t.target=r.target),r.max&&(t.max=r.max),r.size&&(t.size=r.size),null!=r.animate&&(t.animate=r.animate),null!=r.respawn&&(t.respawn=r.respawn),r.props&&(t.props=r.props),r.colors&&(t.colors=r.colors),r.clock&&(t.clock=r.clock),null!=r.start_from_edge&&(t.start_from_edge=r.start_from_edge),r.width&&(t.width=r.width),r.height&&(t.height=r.height),null!=r.rotate&&(t.rotate=r.rotate)),"object"!=typeof t.target&&"string"!=typeof t.target)throw new TypeError("The target parameter should be a node or string");if("object"==typeof t.target&&(null===t.target||!t.target instanceof HTMLCanvasElement)||"string"==typeof t.target&&(null===document.getElementById(t.target)||!document.getElementById(t.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var h="object"==typeof t.target?t.target:document.getElementById(t.target),a=h.getContext("2d"),l=[];function n(e,s){e=e||1;var o=Math.random()*e;return s?Math.floor(o):o}var g=t.props.reduce(function(e,s){return e+(s.weight||1)},0);function f(){var e=t.props[function(){for(var s=Math.random()*g,o=0;o<t.props.length;++o){var c=t.props[o].weight||1;if(s<c)return o;s-=c}}()];return{prop:e.type?e.type:e,x:n(t.width),y:t.start_from_edge?t.clock<0?parseFloat(t.height)+10:-10:n(t.height),src:e.src,radius:n(4)+1,size:e.size,rotate:t.rotate,line:Math.floor(n(65)-30),angles:[n(10,!0)+2,n(10,!0)+2,n(10,!0)+2,n(10,!0)+2],color:t.colors[n(t.colors.length,!0)],rotation:n(360,!0)*Math.PI/180,speed:n(t.clock/7)+t.clock/30}}function u(e){if(e)switch(a.fillStyle=a.strokeStyle="rgba("+e.color+", "+(3<e.radius?.8:.4)+")",a.beginPath(),e.prop){case"circle":a.moveTo(e.x,e.y),a.arc(e.x,e.y,e.radius*t.size,0,2*Math.PI,!0),a.fill();break;case"triangle":a.moveTo(e.x,e.y),a.lineTo(e.x+e.angles[0]*t.size,e.y+e.angles[1]*t.size),a.lineTo(e.x+e.angles[2]*t.size,e.y+e.angles[3]*t.size),a.closePath(),a.fill();break;case"line":a.moveTo(e.x,e.y),a.lineTo(e.x+e.line*t.size,e.y+5*e.radius),a.lineWidth=2*t.size,a.stroke();break;case"square":a.save(),a.translate(e.x+15,e.y+5),a.rotate(e.rotation),a.fillRect(-15*t.size,-5*t.size,15*t.size,5*t.size),a.restore();break;case"svg":a.save();var s=new window.Image;s.src=e.src;var o=e.size||15;a.translate(e.x+o/2,e.y+o/2),e.rotate&&a.rotate(e.rotation),a.drawImage(s,-o/2*t.size,-o/2*t.size,o*t.size,o*t.size),a.restore()}}function d(){t.animate=!1,clearInterval(t.interval),requestAnimationFrame(function(){a.clearRect(0,0,h.width,h.height);var e=h.width;h.width=1,h.width=e})}return{render:function(){h.width=t.width,h.height=t.height,l=[];for(var e=0;e<t.max;e++)l.push(f());return requestAnimationFrame(function s(){for(var o in a.clearRect(0,0,t.width,t.height),l)u(l[o]);(function(){for(var c=0;c<t.max;c++){var i=l[c];i&&(t.animate&&(i.y+=i.speed),i.rotate&&(i.rotation+=i.speed/35),(0<=i.speed&&t.height<i.y||i.speed<0&&i.y<0)&&(t.respawn?(l[c]=i,l[c].x=n(t.width,!0),l[c].y=i.speed<0?parseFloat(t.height):-10):l[c]=void 0))}l.every(function(p){return void 0===p})&&d()})(),t.animate&&requestAnimationFrame(s)})},clear:d}}});