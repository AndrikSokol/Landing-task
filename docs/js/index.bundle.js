/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{"use strict";const e=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t=function(t,n){if(void 0===n&&(n=document),t instanceof Array)return t.filter(e);if(e(t))return[t];if(i=t,r=Object.prototype.toString.call(i),"object"==typeof window.NodeList?i instanceof window.NodeList:null!==i&&"object"==typeof i&&"number"==typeof i.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(r)&&(0===i.length||e(i[0])))return Array.prototype.slice.call(t);var i,r;if("string"==typeof t)try{var o=n.querySelectorAll(t);return Array.prototype.slice.call(o)}catch(e){return[]}return[]};function n(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=i();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function i(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function r(e,t){for(var i=n(e),r=n(t),o=[],s=0;s<4;s++)for(var a=[i[s],i[s+4],i[s+8],i[s+12]],c=0;c<4;c++){var l=4*c,d=[r[l],r[l+1],r[l+2],r[l+3]],u=a[0]*d[0]+a[1]*d[1]+a[2]*d[2]+a[3]*d[3];o[s+l]=u}return o}function o(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return n(t[2].split(", ").map(parseFloat))}return i()}function s(e,t){var n=i();return n[0]=e,n[5]="number"==typeof t?t:e,n}var a,c=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){return c(e)}),0)});const l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||c;var d={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},u=function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},f=function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}};function h(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function p(e,t){if(h(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function m(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function v(){var e=this,n={active:[],stale:[]},i={active:[],stale:[]},r={active:[],stale:[]};try{p(t("[data-sr-id]"),(function(e){var t=parseInt(e.getAttribute("data-sr-id"));n.active.push(t)}))}catch(e){throw e}p(this.store.elements,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),p(n.stale,(function(t){return delete e.store.elements[t]})),p(this.store.elements,(function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===i.active.indexOf(e.sequence.id)&&i.active.push(e.sequence.id)})),p(this.store.containers,(function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)})),p(r.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),p(this.store.sequences,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),p(i.stale,(function(t){return delete e.store.sequences[t]}))}var y=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function g(e){var t=window.getComputedStyle(e.node),n=t.position,a=e.config,c={},l=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];c.computed=l?l.map((function(e){return e.trim()})).join("; ")+";":"",c.generated=l.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?c.computed:l.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var d,u,f,h=parseFloat(t.opacity),p=isNaN(parseFloat(a.opacity))?parseFloat(t.opacity):parseFloat(a.opacity),m={computed:h!==p?"opacity: "+h+";":"",generated:h!==p?"opacity: "+p+";":""},v=[];if(parseFloat(a.distance)){var g="top"===a.origin||"bottom"===a.origin?"Y":"X",b=a.distance;"top"!==a.origin&&"left"!==a.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=w[0];switch(w[1]){case"em":b=parseInt(t.fontSize)*E;break;case"px":b=E;break;case"%":b="Y"===g?e.node.getBoundingClientRect().height*E/100:e.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===g?v.push(function(e){var t=i();return t[13]=e,t}(b)):v.push(function(e){var t=i();return t[12]=e,t}(b))}a.rotate.x&&v.push((d=a.rotate.x,u=Math.PI/180*d,(f=i())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),a.rotate.y&&v.push(function(e){var t=Math.PI/180*e,n=i();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(a.rotate.y)),a.rotate.z&&v.push(function(e){var t=Math.PI/180*e,n=i();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(a.rotate.z)),1!==a.scale&&(0===a.scale?v.push(s(2e-4)):v.push(s(a.scale)));var x={};if(v.length){x.property=y("transform"),x.computed={raw:t[x.property],matrix:o(t[x.property])},v.unshift(x.computed.matrix);var j=v.reduce(r);x.generated={initial:x.property+": matrix3d("+j.join(", ")+");",final:x.property+": matrix3d("+x.computed.matrix.join(", ")+");"}}else x.generated={initial:"",final:""};var T={};if(m.generated||x.generated.initial){T.property=y("transition"),T.computed=t[T.property],T.fragments=[];var k=a.delay,O=a.duration,L=a.easing;m.generated&&T.fragments.push({delayed:"opacity "+O/1e3+"s "+L+" "+k/1e3+"s",instant:"opacity "+O/1e3+"s "+L+" 0s"}),x.generated.initial&&T.fragments.push({delayed:x.property+" "+O/1e3+"s "+L+" "+k/1e3+"s",instant:x.property+" "+O/1e3+"s "+L+" 0s"}),T.computed&&!T.computed.match(/all 0s|none 0s/)&&T.fragments.unshift({delayed:T.computed,instant:T.computed});var _=T.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});T.generated={delayed:T.property+": "+_.delayed+";",instant:T.property+": "+_.instant+";"}}else T.generated={delayed:"",instant:""};return{inline:c,opacity:m,position:n,transform:x,transition:T}}function b(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function w(e){var n,i=this;try{p(t(e),(function(e){var t=e.getAttribute("data-sr-id");if(null!==t){n=!0;var r=i.store.elements[t];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),b(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete i.store.elements[t]}}))}catch(e){return m.call(this,"Clean failed.",e.message)}if(n)try{v.call(this)}catch(e){return m.call(this,"Clean failed.",e.message)}}function E(){var e=this;p(this.store.elements,(function(e){b(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),p(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function x(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(h(e))return p(t,(function(t){p(t,(function(t,n){h(t)?(e[n]&&h(e[n])||(e[n]={}),x(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function j(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var T,k=(T=0,function(){return T++});function O(){var e=this;v.call(this),p(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),b(e.node,t.filter((function(e){return""!==e})).join(" "))})),p(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function L(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?_.call(this,e,i):t.reset||o?q.call(this,e):void 0}function _(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,b(e.node,n.filter((function(e){return""!==e})).join(" ")),A.call(this,e,t)}function q(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,b(e.node,t.filter((function(e){return""!==e})).join(" ")),A.call(this,e)}function A(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&w.call(n,e.node)}),i-s)}}function P(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return L.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new M(n,"visible",this.store),o=new M(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return N.call(this,n,r.body[0],-1,t),N.call(this,n,r.body[0],1,t),L.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return N.call(this,n,i,-1,t),L.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return N.call(this,n,i,1,t),L.call(this,e,{reveal:!0,pristine:t})}}function R(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=k(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function M(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],p(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&p(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function N(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,a&&P.call(r,a,i)}),e.interval)}function I(e,n,i){var r=this;void 0===n&&(n={}),void 0===i&&(i=!1);var o,s=[],a=n.interval||d.interval;try{a&&(o=new R(a));var c=t(e);if(!c.length)throw new Error("Invalid reveal target.");var l=c.reduce((function(e,i){var a={},c=i.getAttribute("data-sr-id");c?(x(a,r.store.elements[c]),b(a.node,a.styles.inline.computed)):(a.id=k(),a.node=i,a.seen=!1,a.revealed=!1,a.visible=!1);var l=x({},a.config||r.defaults,n);if(!l.mobile&&j()||!l.desktop&&!j())return c&&w.call(r,a),e;var d,u=t(l.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(i)?(d=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var i=null;return p(t,(function(t){p(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(u,s,r.store.containers),null===d&&(d=k(),s.push({id:d,node:u})),a.config=l,a.containerId=d,a.styles=g(a),o&&(a.sequence={id:o.id,index:o.members.length},o.members.push(a.id)),e.push(a),e):e}),[]);p(l,(function(e){r.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(e){return m.call(this,"Reveal failed.",e.message)}p(s,(function(e){r.store.containers[e.id]={id:e.id,node:e.node}})),o&&(this.store.sequences[o.id]=o),!0!==i&&(this.store.history.push({target:e,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(O.bind(this),0))}function S(){var e=this;p(this.store.history,(function(t){I.call(e,t.target,t.options,!0)})),O.call(this)}var C,z,F,D,W,Y,$,B,H=Math.sign||function(e){return(e>0)-(e<0)||+e};function U(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function X(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function G(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&o>u&&s>c&&a<l||"fixed"===e.styles.position}}function J(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),l((function(){var i="init"===e.type||"resize"===e.type;p(n.store.containers,(function(e){i&&(e.geometry=U.call(n,e,!0));var t=X.call(n,e);e.scroll&&(e.direction={x:H(t.left-e.scroll.left),y:H(t.top-e.scroll.top)}),e.scroll=t})),p(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=U.call(n,e)),e.visible=G.call(n,e)})),p(t,(function(e){e.sequence?P.call(n,e):L.call(n,e)})),n.pristine=!1}))}function K(e){var n;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==K.prototype)return new K(e);if(!K.isSupported())return m.call(this,"Instantiation failed.","This browser is not supported."),f();try{n=x({},Y||d,e)}catch(e){return m.call(this,"Invalid configuration.",e.message),f()}try{if(!t(n.container)[0])throw new Error("Invalid container.")}catch(e){return m.call(this,e.message),f()}return!(Y=n).mobile&&j()||!Y.desktop&&!j()?(m.call(this,"This device is disabled.","desktop: "+Y.desktop,"mobile: "+Y.mobile),f()):(u(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,C=C||J.bind(this),z=z||E.bind(this),F=F||I.bind(this),D=D||w.bind(this),W=W||S.bind(this),Object.defineProperty(this,"delegate",{get:function(){return C}}),Object.defineProperty(this,"destroy",{get:function(){return z}}),Object.defineProperty(this,"reveal",{get:function(){return F}}),Object.defineProperty(this,"clean",{get:function(){return D}}),Object.defineProperty(this,"sync",{get:function(){return W}}),Object.defineProperty(this,"defaults",{get:function(){return Y}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),B||(B=this))}K.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(K,"debug",{get:function(){return $||!1},set:function(e){return $="boolean"==typeof e?e:$}}),K();const Q=K;Q({duration:1e3}),Q().reveal(".header__wrapper"),Q().reveal(".blog",{origin:"right",distance:"20px"}),Q().reveal(".landing__title",{distance:"60px",origin:"left",duration:1e3,delay:500}),Q().reveal(".landing__subtitle",{distance:"60px",origin:"right",duration:1e3,delay:500}),Q().reveal(".landing__button",{distance:"30px",origin:"bottom",duration:1e3,delay:500}),Q().reveal(".footer__wrapper"),document.addEventListener("DOMContentLoaded",(function(){function e(e){const t=document.getElementsByClassName(e),n=t[0].children;if(n)for(let e=0;e<2;e++)Array.from(n).forEach((function(e){const n=e.cloneNode(!0);n.setAttribute("aria-hidden",!0),t[0].appendChild(n)}));else console.error("Source or destination container not found.")}e("lines__first"),e("lines__second"),e("lines__third");const t=document.querySelector(".button-lang"),n=document.querySelector(".button-lang-text");if(!t)return console.log("error to find btn");t.addEventListener("click",(function(){"en"===n.textContent?n.textContent="рус":n.textContent="en"}));const i=document.querySelector(".header__burger"),r=document.querySelector(".menu__list"),o=document.querySelector(".button-sign-up"),s=document.querySelector(".button-log-in");i.addEventListener("click",(function(){r.classList.toggle("menu__list--open"),r.classList.contains("menu__list--open")?(document.body.style.overflow="hidden",i.classList.add("header__burger-close"),o.classList.add("button-sign-up--mobile"),s.classList.add("button-log-in--mobile")):(document.body.style.overflow="auto",i.classList.remove("header__burger-close"),o.classList.remove("button-sign-up--mobile"),s.classList.remove("button-log-in--mobile"))}))}))})();