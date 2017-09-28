/*! vue-ydui v0.9.6 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}({0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var r=o(98),i=n(r);e.Popup=i.default},1:function(t,e){t.exports=function(t,e,o,n){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),o&&(a._scopeId=o),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:r,exports:i,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},3:function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=p[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(i(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(i(o.parts[r]));p[o.id]={id:o.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function i(t){var e,o,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(v){var i=d++;n=f||(f=r()),e=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=r(),e=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function s(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var o=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,u=o(4),p={},c=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){h=o;var r=u(t,e);return n(r),function(e){for(var o=[],i=0;i<r.length;i++){var s=r[i],a=p[s.id];a.refs--,o.push(a)}e?(r=u(t,e),n(r)):r=[];for(var i=0;i<o.length;i++){var a=o[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete p[a.id]}}}};var g=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],s=i[0],a=i[1],l=i[2],u=i[3],p={id:t+":"+r,css:a,media:l,sourceMap:u};n[s]?n[s].parts.push(p):o.push(n[s]={id:s,parts:[p]})}return o}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(o){e||(e=!0,(o||document).addEventListener("touchmove",t))},unlock:function(o){e=!1,(o||document).removeEventListener("touchmove",t)}}}(),n=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||o.test(t)||n.test(t)},i=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var o=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===o||"auto"===o)return e;e=e.parentNode}return window},s=function(t,e){var o=t==window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,r=e.getBoundingClientRect().top-n,i=r+e.offsetHeight;return r>=0&&r<o||i>0&&i<=o},a=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){a(t,e)||(t.className=""==t.className?e:t.className+" "+e)},u=function(t,e){if(a(t,e)){for(var o=" "+t.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+e+" ")>=0;)o=o.replace(" "+e+" "," ");t.className=o.replace(/^\s+|\s+$/g,"")}},p=function(t){function e(o,n,r){if(o!==n){var i=o+r>n?n:o+r;o>n&&(i=o-r<n?n:o-r),t===window?window.scrollTo(i,i):t.scrollTop=i,window.requestAnimationFrame(function(){return e(i,n,r)})}}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var i=Math.abs(o-n),s=Math.ceil(i/r*50);e(o,n,s)};e.pageScroll=o,e.isIOS=n,e.isColor=r,e.getScrollview=i,e.checkInview=s,e.addClass=l,e.removeClass=u,e.scrollTop=p},54:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".yd-popup-mask{background-color:rgba(0,0,0,.4);z-index:1500;bottom:0;right:0;left:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yd-popup,.yd-popup-mask{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-popup{background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;pointer-events:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-popup-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch}.yd-popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.yd-popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.yd-popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.yd-popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.yd-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .1s;transition:all .1s;border-radius:2px}.yd-popup-center,.yd-popup-center *{pointer-events:none}.yd-popup-center.yd-popup-show{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);pointer-events:auto}.yd-popup-center.yd-popup-show *{pointer-events:auto}",""])},98:function(t,e,o){o(213);var n=o(1)(o(258),o(178),null,null);t.exports=n.exports},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"yd-popup-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),o("div",{ref:"box",class:t.classes,style:t.styles()},[t.$slots.top&&"center"!=t.position?o("div",{ref:"top"},[t._t("top")],2):t._e(),t._v(" "),o("div",{staticClass:"yd-popup-content"},[o("div",{ref:"content"},[t._t("default")],2)]),t._v(" "),t.$slots.bottom&&"center"!=t.position?o("div",{ref:"bottom"},[t._t("bottom")],2):t._e()])])},staticRenderFns:[]}},213:function(t,e,o){var n=o(54);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("19f28fa0",n,!0)},258:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5);e.default={name:"yd-popup",data:function(){return{show:this.value}},props:{position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},height:{type:String,default:"50%"},width:{type:String,default:"50%"},value:{type:Boolean}},watch:{value:function(t){if(n.isIOS){var e=this.$refs,o=this.$slots.top&&"center"!==this.position?e.top.offsetHeight:0,r=this.$slots.bottom&&"center"!==this.position?e.bottom.offsetHeight:0,i=o+e.content.offsetHeight+r;t?(n.pageScroll.lock(),i>e.box.offsetHeight&&e.box.addEventListener("touchmove",this.stopPropagation),(0,n.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(n.pageScroll.unlock(),i>e.box.offsetHeight&&e.box.removeEventListener("touchmove",this.stopPropagation),(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))}this.show=t}},computed:{classes:function(){return("center"===this.position?"yd-popup-center ":"yd-popup yd-popup-"+this.position)+(this.show?" yd-popup-show ":"")}},methods:{stopPropagation:function(t){t.stopPropagation()},styles:function(){return"left"===this.position||"right"===this.position?{width:this.width}:"bottom"===this.position?{width:"100%",height:this.height}:{width:this.width}},close:function(){n.isIOS&&(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.show=!1,this.$emit("input",!1)}},mounted:function(){this.scrollView=(0,n.getScrollview)(this.$el)},destroyed:function(){n.pageScroll.unlock()}}}})});