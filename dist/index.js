(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('vue-slideout-panel',[],b):'object'==typeof exports?exports['vue-slideout-panel']=b():a['vue-slideout-panel']=b()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=9)}([function(a,b,c){var d=c(3)(c(4),c(5),function(){!1||c(6)},'data-v-74aa87bc',null);d.options.__file='/home/jooshka/z/vue-slideout-panel/src/VueSlideoutPanel.vue',d.esModule&&Object.keys(d.esModule).some(function(a){return'default'!==a&&'__'!==a.substr(0,2)})&&console.error('named exports are not supported in *.vue files.'),d.options.functional&&console.error('[vue-loader] VueSlideoutPanel.vue: functional components are not supported with templates, they should use render functions.'),!1,a.exports=d.exports},function(a,b,c){b=a.exports=c(2)(void 0),b.push([a.i,'\n.blackout[data-v-74aa87bc] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2000;\n  background-color: rgba(0, 0, 0, .3);\n}\n.dock[data-v-74aa87bc] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 3000;\n  box-shadow: -3px 3px 9px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\nsection[data-v-74aa87bc] {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\nsection > div[data-v-74aa87bc] {\n  height: 100%;\n  overflow: auto;\n}\nsection.default[data-v-74aa87bc] {\n  background-color: #fff;\n  padding: 1rem 1rem 3rem;\n}\na.default[data-v-74aa87bc] {\n  position: absolute;\n  bottom: 1rem;\n  cursor: pointer;\n}\n.vsp-br[data-v-74aa87bc]{\n  border-right: 2px solid rgba(0, 0, 0, .2);\n}\n.vsp-bl[data-v-74aa87bc]{\n  border-left: 2px solid rgba(0, 0, 0, .1);\n}\n.slide-out-enter-active[data-v-74aa87bc], .slide-out-leave-active[data-v-74aa87bc] {\n  transition: transform .8s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.slide-out-enter[data-v-74aa87bc], .slide-out-leave-to[data-v-74aa87bc] {\n  transform: translateX(100%);\n}\n.fade-enter-active[data-v-74aa87bc], .fade-leave-active[data-v-74aa87bc] {\n  transition: opacity .8s ease-in;\n}\n.fade-enter[data-v-74aa87bc], .fade-leave-to[data-v-74aa87bc] {\n  opacity: 0\n}\n.bg-transparent[data-v-74aa87bc] {\n  background-color: transparent !important;\n}\n',''])},function(a){function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='+e.sourceRoot+a+' */'});return[d,g,f].join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+b)+' */'}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '+c[2]+'{'+d+'}':d}).join('')},c.i=function(a,b){'string'==typeof a&&(a=[[null,a,'']]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],'number'==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];'number'==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]='('+g[2]+') and ('+b+')'),c.push(g))}},c}},function(a){a.exports=function(a,b,c,d,e){var f,g=a=a||{},h=typeof a.default;('object'==h||'function'==h)&&(f=a,g=a.default);var i='function'==typeof g?g.options:g;b&&(i.render=b.render,i.staticRenderFns=b.staticRenderFns),d&&(i._scopeId=d);var j;if(e?(j=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||'undefined'==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),c&&c.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(e)},i._ssrRegister=j):c&&(j=c),j){var k=i.functional,l=k?i.render:i.beforeCreate;k?i.render=function(a,b){return j.call(b),l(a,b)}:i.beforeCreate=l?[l,j]:[j]}return{esModule:f,exports:g,options:i}}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b['default']={name:'VueSideoutPanel',props:{value:{type:Boolean,default:!1,required:!0},count:{type:Number,default:1,validator(a){return 0<a&&2>=a}},closeHtml:{type:String,default:'Close'},widths:{type:Array,default(){return 1==this.count?['100%']:['100%','50%']},validator(a){return a.reduce((c,a)=>c&&/col-(\w+-)?\d+|\d+px|\d+%/.test(a),!0)}},classes:{type:Array,default(){return[,,,,].fill('default')},validator(a){return a.reduce((c,a)=>c&&(!a||'string'==typeof a),!0)}},styles:{type:Array,default(){return[{},{},{},{}]},validator(a){return a.reduce((c,a)=>c&&(!a||'object'==typeof a),!0)}}},data(){return{isVisibleDock:this.value,isVisibleSections:[],d_styles:[],d_classes:[]}},created(){this.init()},watch:{value(){this.isVisibleDock=this.value}},computed:{visibleCount(){return this.isVisibleSections.reduce((c,a)=>c+a)}},methods:{init(){for(let a=0;4>a;a++)this.classes[a]&&0<=this.classes[a].length?2==a&&'same'==this.classes[a]?this.d_classes.push(this.classes[a-1]):this.d_classes.push(this.classes[a]):this.d_classes.push('default');for(let a=0;4>a;a++)2==a&&this.styles[a]&&this.styles[a].same?this.d_styles.push(Object.assign({},this.styles[a-1]||{})):this.d_styles.push(this.styles[a]||{});2==this.count&&(this.d_classes[1]+=' vsp-br',this.d_classes[2]+=' vsp-bl'),this.isVisibleSections=Array(this.count).fill(1);let a=!1;1==this.count?(this.widths[0]=this.widths[0]||this.widths[1],this.widths[1]='100%'):/\d+%/.test(this.widths[1])&&(this.d_styles[2].width=`${100-this.widths[1].slice(0,-1)}%`,a=!0),this.widths.forEach((b,c)=>{if(/col-(\w+-)?\d+/.test(b))this.d_classes[c]+=' '+b;else{if(2==c&&a)return;this.d_styles[c].width=b}})},_style(a){return this.d_styles[a]},_class(a){return this.d_classes[a]},setTransform(a,b){['webkitTransform','MozTransform','msTransform','OTransform','transform'].forEach((c)=>{a.style[c]=b[0]}),a.style.transitionTimingFunction=b[1],a.style.transitionDuration=b[2]},moveDockHalf(){let a=this.$refs.section[1].offsetWidth,b=this.$refs.section[0].offsetWidth;this.setTransform(this.$refs.dock,[`translateX(${a}px)`,'cubic-bezier(0.215, 0.61, 0.355, 1)','.8s']),setTimeout(()=>{this.$refs.dock.style.width=`${b}px`,this.$refs.section[0].style.width='100%',this.setTransform(this.$refs.dock,['','',''])},800)},beforeLeave(){this.isVisibleSections[1]?(this.$refs.dock.classList.add('bg-transparent'),this.$refs.dock.style.boxShadow='none',this.$refs.section[1].style.boxShadow='-3px 3px 9px rgba(0, 0, 0, 0.3)'):this.moveDockHalf()},afterLeave(){this.isVisibleSections[1]&&(this.$refs.dock.classList.remove('bg-transparent'),this.$refs.dock.style.boxShadow='-3px 3px 9px rgba(0, 0, 0, 0.3)',this.$refs.dock.style.width=this.$refs.section[0].offsetWidth+'px',this.$refs.section[0].style.width='100%')},close(a){2==this.visibleCount&&1==a&&this.$refs.dock.classList.add('bg-transparent'),this.$set(this.isVisibleSections,a,0),0==this.visibleCount&&(this.isVisibleDock=!1,this.init(),this.$emit('close'))}}}},function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c('div',[c('transition',{attrs:{name:'fade'}},[a.isVisibleDock?c('div',{staticClass:'blackout'}):a._e()]),a._v(' '),c('transition',{attrs:{name:'slide-out'}},[a.isVisibleDock?c('div',{ref:'dock',staticClass:'dock',class:a._class(0),style:a._style(0)},[c('transition-group',{attrs:{name:'slide-out'},on:{"before-leave":a.beforeLeave,afterLeave:a.afterLeave}},a._l(a.isVisibleSections,function(b,d){return b?c('section',{key:'k'+d,ref:'section',refInFor:!0,class:a._class(d+1),style:a._style(d+1)},[0==d?c('div',[a._t('default')],2):c('div',[a._t('extra')],2),a._v(' '),c('a',{class:a._class(3),style:a._style(3),attrs:{href:'#'},domProps:{innerHTML:a._s(a.closeHtml)},on:{click:function(b){b.preventDefault(),a.close(d)}}})]):a._e()}))],1):a._e()])],1)},staticRenderFns:[]},a.exports.render._withStripped=!0,!1},function(a,b,c){var d=c(1);'string'==typeof d&&(d=[[a.i,d,'']]),d.locals&&(a.exports=d.locals);c(7)('4db53567',d,!1)},function(a,b,c){function d(a){for(var b=0;b<a.length;b++){var c=a[b],d=l[c.id];if(d){d.refs++;for(var e=0;e<d.parts.length;e++)d.parts[e](c.parts[e]);for(;e<c.parts.length;e++)d.parts.push(f(c.parts[e]));d.parts.length>c.parts.length&&(d.parts.length=c.parts.length)}else{for(var g=[],e=0;e<c.parts.length;e++)g.push(f(c.parts[e]));l[c.id]={id:c.id,refs:1,parts:g}}}}function e(){var a=document.createElement('style');return a.type='text/css',j.appendChild(a),a}function f(a){var b,c,d=document.querySelector('style[data-vue-ssr-id~="'+a.id+'"]');if(d){if(o)return p;d.parentNode.removeChild(d)}if(q){var f=n++;d=m||(m=e()),b=g.bind(null,d,f,!1),c=g.bind(null,d,f,!0)}else d=e(),b=h.bind(null,d),c=function(){d.parentNode.removeChild(d)};return b(a),function(d){if(d){if(d.css===a.css&&d.media===a.media&&d.sourceMap===a.sourceMap)return;b(a=d)}else c()}}function g(a,b,c,d){var e=c?'':d.css;if(a.styleSheet)a.styleSheet.cssText=r(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function h(a,b){var c=b.css,d=b.media,e=b.sourceMap;if(d&&a.setAttribute('media',d),e&&(c+='\n/*# sourceURL='+e.sources[0]+' */',c+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+' */'),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}var i='undefined'!=typeof document;if('undefined'!=typeof DEBUG&&DEBUG&&!i)throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');var k=c(8),l={},j=i&&(document.head||document.getElementsByTagName('head')[0]),m=null,n=0,o=!1,p=function(){},q='undefined'!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());a.exports=function(a,b,c){o=c;var e=k(a,b);return d(e),function(b){for(var c=[],f=0;f<e.length;f++){var g=e[f],h=l[g.id];h.refs--,c.push(h)}b?(e=k(a,b),d(e)):e=[];for(var h,f=0;f<c.length;f++)if(h=c[f],0===h.refs){for(var i=0;i<h.parts.length;i++)h.parts[i]();delete l[h.id]}}};var r=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}()},function(a){a.exports=function(a,b){for(var c=[],d={},e=0;e<b.length;e++){var f=b[e],g=f[0],h=f[1],i=f[2],j=f[3],k={id:a+':'+e,css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}},function(a,b,c){var d=c(0);a.exports=d}])});