(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(e,t,n){"use strict";var o=n(5),r=n(144);o({target:"String",proto:!0,forced:n(145)("anchor")},{anchor:function(e){return r(this,"a","name",e)}})},184:function(e,t,n){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=n(2),i=n(8),s=n(0),c=function(){function e(t,n){var o=n.location,r=void 0===o?0:o,a=n.distance,s=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.caseSensitive,f=void 0!==d&&d,p=n.tokenSeparator,v=void 0===p?/ +/g:p,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.id,x=void 0===k?null:k,S=n.keys,_=void 0===S?[]:S,w=n.shouldSort,C=void 0===w||w,M=n.getFn,I=void 0===M?i:M,L=n.sortFn,A=void 0===L?function(e,t){return e.score-t.score}:L,O=n.tokenize,P=void 0!==O&&O,j=n.matchAllTokens,z=void 0!==j&&j,D=n.includeMatches,T=void 0!==D&&D,F=n.includeScore,q=void 0!==F&&F,E=n.verbose,$=void 0!==E&&E;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m,id:x,keys:_,includeMatches:T,includeScore:q,shouldSort:C,getFn:I,sortFn:A,verbose:$,tokenize:P,matchAllTokens:z},this.setCollection(t)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),o=n.tokenSearchers,r=n.fullSearcher,a=this._search(o,r),i=a.weights,s=a.results;return this._computeScore(i,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),o=0,r=n.length;o<r;o+=1)t.push(new a(n[o],this.options));return{tokenSearchers:t,fullSearcher:new a(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,o={},r=[];if("string"==typeof n[0]){for(var a=0,i=n.length;a<i;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:o,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var s={},c=0,l=n.length;c<l;c+=1)for(var u=n[c],h=0,d=this.options.keys.length;h<d;h+=1){var f=this.options.keys[h];if("string"!=typeof f){if(s[f.name]={weight:1-f.weight||1},f.weight<=0||f.weight>1)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else s[f]={weight:1};this._analyze({key:f,value:this.options.getFn(u,f),record:u,index:c},{resultMap:o,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:r}}},{key:"_analyze",value:function(e,t){var n=e.key,o=e.arrayIndex,r=void 0===o?-1:o,a=e.value,i=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,f=t.resultMap,p=void 0===f?{}:f,v=t.results,g=void 0===v?[]:v;if(null!=a){var y=!1,b=-1,m=0;if("string"==typeof a){this._log("\nKey: ".concat(""===n?"-":n));var k=d.search(a);if(this._log('Full text: "'.concat(a,'", score: ').concat(k.score)),this.options.tokenize){for(var x=a.split(this.options.tokenSeparator),S=[],_=0;_<u.length;_+=1){var w=u[_];this._log('\nPattern: "'.concat(w.pattern,'"'));for(var C=!1,M=0;M<x.length;M+=1){var I=x[M],L=w.search(I),A={};L.isMatch?(A[I]=L.score,y=!0,C=!0,S.push(L.score)):(A[I]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(I,'", score: ').concat(A[I]))}C&&(m+=1)}b=S[0];for(var O=S.length,P=1;P<O;P+=1)b+=S[P];b/=O,this._log("Token score average:",b)}var j=k.score;b>-1&&(j=(j+b)/2),this._log("Score average:",j);var z=!this.options.tokenize||!this.options.matchAllTokens||m>=u.length;if(this._log("\nCheck Matches: ".concat(z)),(y||k.isMatch)&&z){var D=p[c];D?D.output.push({key:n,arrayIndex:r,value:a,score:j,matchedIndices:k.matchedIndices}):(p[c]={item:i,output:[{key:n,arrayIndex:r,value:a,score:j,matchedIndices:k.matchedIndices}]},g.push(p[c]))}}else if(s(a))for(var T=0,F=a.length;T<F;T+=1)this._analyze({key:n,arrayIndex:T,value:a[T],record:i,index:c},{resultMap:p,results:g,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,o=t.length;n<o;n+=1){for(var r=t[n].output,a=r.length,i=1,s=1,c=0;c<a;c+=1){var l=e?e[r[c].key].weight:1,u=(1===l?r[c].score:r[c].score||.001)*l;1!==l?s=Math.min(s,u):(r[c].nScore=u,i*=u)}t[n].score=1===s?i:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===o(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}))),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var o=0,r=n.length;o<r;o+=1){var a=n[o];if(0!==a.matchedIndices.length){var i={indices:a.matchedIndices,value:a.value};a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(i.arrayIndex=a.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var a=0,i=e.length;a<i;a+=1){var s=e[a];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var c={item:s.item},l=0,u=r.length;l<u;l+=1)r[l](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=c},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(3),a=n(4),i=n(7),s=function(){function e(t,n){var o=n.location,r=void 0===o?0:o,a=n.distance,s=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.isCaseSensitive,f=void 0!==d&&d,p=n.tokenSeparator,v=void 0===p?/ +/g:p,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,o=t.tokenSeparator;if(this.pattern.length>n)return r(e,this.pattern,o);var i=this.options,s=i.location,c=i.distance,l=i.threshold,u=i.findAllMatches,h=i.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&o(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(o,"|")),a=e.match(r),i=!!a,s=[];if(i)for(var c=0,l=a.length;c<l;c+=1){var u=a[c];s.push([e.indexOf(u),u.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,n){var o=n(5),r=n(6);e.exports=function(e,t,n,a){for(var i=a.location,s=void 0===i?0:i,c=a.distance,l=void 0===c?100:c,u=a.threshold,h=void 0===u?.6:u,d=a.findAllMatches,f=void 0!==d&&d,p=a.minMatchCharLength,v=void 0===p?1:p,g=s,y=e.length,b=h,m=e.indexOf(t,g),k=t.length,x=[],S=0;S<y;S+=1)x[S]=0;if(-1!==m){var _=o(t,{errors:0,currentLocation:m,expectedLocation:g,distance:l});if(b=Math.min(_,b),-1!==(m=e.lastIndexOf(t,g+k))){var w=o(t,{errors:0,currentLocation:m,expectedLocation:g,distance:l});b=Math.min(w,b)}}m=-1;for(var C=[],M=1,I=k+y,L=1<<(k<=31?k-1:30),A=0;A<k;A+=1){for(var O=0,P=I;O<P;)o(t,{errors:A,currentLocation:g+P,expectedLocation:g,distance:l})<=b?O=P:I=P,P=Math.floor((I-O)/2+O);I=P;var j=Math.max(1,g-P+1),z=f?y:Math.min(g+P,y)+k,D=Array(z+2);D[z+1]=(1<<A)-1;for(var T=z;T>=j;T-=1){var F=T-1,q=n[e.charAt(F)];if(q&&(x[F]=1),D[T]=(D[T+1]<<1|1)&q,0!==A&&(D[T]|=(C[T+1]|C[T])<<1|1|C[T+1]),D[T]&L&&(M=o(t,{errors:A,currentLocation:F,expectedLocation:g,distance:l}))<=b){if(b=M,(m=F)<=g)break;j=Math.max(1,2*g-m)}}if(o(t,{errors:A+1,currentLocation:g,expectedLocation:g,distance:l})>b)break;C=D}return{isMatch:m>=0,score:0===M?.001:M,matchedIndices:r(x,v)}}},function(e,t){e.exports=function(e,t){var n=t.errors,o=void 0===n?0:n,r=t.currentLocation,a=void 0===r?0:r,i=t.expectedLocation,s=void 0===i?0:i,c=t.distance,l=void 0===c?100:c,u=o/e.length,h=Math.abs(s-a);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o=-1,r=-1,a=0,i=e.length;a<i;a+=1){var s=e[a];s&&-1===o?o=a:s||-1===o||((r=a-1)-o+1>=t&&n.push([o,r]),o=-1)}return e[a-1]&&a-o>=t&&n.push([o,a-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,o=0;o<n;o+=1)t[e.charAt(o)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t,n){var o=n(0);e.exports=function(e,t){return function e(t,n,r){if(n){var a=n.indexOf("."),i=n,s=null;-1!==a&&(i=n.slice(0,a),s=n.slice(a+1));var c=t[i];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(o(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],s,r);else s&&e(c,s,r);else r.push(c.toString())}else r.push(t);return r}(e,t,[])}}])},190:function(e,t,n){"use strict";n.r(t);n(39),n(58),n(82),n(32),n(140),n(183),n(40);var o=n(15),r=n(184),a=n.n(r),i=n(21),s={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new a.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(n){e.push(Object(o.a)({},n,{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},c=n(14),l=n(1),u=l.a.config.optionMergeStrategies.computed,h={allMarkdownPage:{edges:[{node:{id:"9ad70cb94e1fe6a317a5d47f2e0c2d75",path:"/docs/settings/",title:"Settings",headings:[{depth:1,value:"Settings",anchor:"#settings"},{depth:2,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Next and Previous Navigation",anchor:"#next-and-previous-navigation"},{depth:2,value:"Navigation",anchor:"#navigation"},{depth:2,value:"Description",anchor:"#description"},{depth:2,value:"Social Links",anchor:"#social-links"},{depth:2,value:"On this Page",anchor:"#on-this-page"},{depth:2,value:"Google Analytics",anchor:"#google-analytics"}]}},{node:{id:"49295bef2db831c2b14b82b02fbc7eb3",path:"/docs/writing-content/",title:"Writing Content",headings:[{depth:1,value:"Writing Content",anchor:"#writing-content"},{depth:2,value:"Writing Markdown",anchor:"#writing-markdown"}]}},{node:{id:"04808e669cf8537a5d2d42d2ea840db8",path:"/docs/sidebar/",title:"Sidebar",headings:[{depth:1,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Global Configuration",anchor:"#global-configuration"},{depth:3,value:"The Sidebar Config Object",anchor:"#the-sidebar-config-object"},{depth:2,value:"Frontmatter setup",anchor:"#frontmatter-setup"}]}},{node:{id:"4fe3023f9083c2e61647f2b035427b32",path:"/docs/installation/",title:"Installation",headings:[{depth:1,value:"Installation",anchor:"#installation"},{depth:2,value:"Using the Gridsome CLI",anchor:"#using-the-gridsome-cli"},{depth:2,value:"Installing manually",anchor:"#installing-manually"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"Introduction",headings:[{depth:1,value:"Introduction",anchor:"#introduction"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"09873564a0818ec92881fabdf077984f",path:"/docs/deploying/",title:"Deploying",headings:[{depth:1,value:"Deploying",anchor:"#deploying"}]}}]}},d=function(e){var t=e.options;t.__staticData?t.__staticData.data=h:(t.__staticData=l.a.observable({data:h}),t.computed=u({$static:function(){return t.__staticData.data}},t.computed))},f=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"relative block"},[n("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[n("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),n("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?n("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[n("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?n("li",{staticClass:"px-2"},[e._v("\n        No results for "),n("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,o){return n("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":o+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=o},mousedown:e.go}},[n("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===o},attrs:{to:t.path+t.anchor}},[t.value===t.title?n("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):n("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),n("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),n("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof d&&d(f);t.default=f.exports}}]);