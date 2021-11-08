/*! For license information please see 103.ea8aad5f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{911:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return T}));var n="-shadowcsshost",s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+s,"gim"),c=new RegExp("(-shadowcsscontext"+s,"gim"),i=new RegExp("(-shadowcssslotted"+s,"gim"),a="-shadowcsshost-no-combinator",u=/-shadowcsshost-no-combinator([^\s]*)/,l=[/::shadow/g,/::content/g],f=/-shadowcsshost/gim,h=/:host/gim,p=/::slotted/gim,g=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,v=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,x="%BLOCK%",_=function(t,e){var r=b(t),n=0;return r.escapedString.replace(m,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",i=t[4],a="";i&&i.startsWith("{%BLOCK%")&&(c=r.blocks[n++],i=i.substring(x.length+1),a="{");var u={selector:o,content:c},l=e(u);return""+t[1]+l.selector+t[3]+a+l.content+i}))},b=function(t){for(var e=t.split(w),r=[],n=[],s=0,o=[],c=0;c<e.length;c++){var i=e[c];"}"===i&&s--,s>0?o.push(i):(o.length>0&&(n.push(o.join("")),r.push(x),o=[]),r.push(i)),"{"===i&&s++}return o.length>0&&(n.push(o.join("")),r.push(x)),{escapedString:r.join(""),blocks:n}},S=function(t){return t.replace(g,"-shadowcsscontext").replace(h,n).replace(p,"-shadowcssslotted")},O=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(r(a,c,t[3]))}return s.join(",")}return a+t[3]}))},W=function(t,e,r){return t+e.replace(n,"")+r},j=function(t,e,r){return e.indexOf(n)>-1?W(t,e,r):t+e+r+", "+e+" "+t+r},k=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},E=function(t,e,r){if(f.lastIndex=0,f.test(t)){var n="."+r;return t.replace(u,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(f,n+" ")}return e+" "+t},R=function(t,e,r){for(var n,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(a)>-1)n=E(t,e,r);else{var o=t.replace(f,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+r+"__";return e.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var o="__ph-"+r+"__";return e.push(s),r++,n+o})),placeholders:e}}(t),i="",u=0,l=/( |>|\+|~(?!=))\s*/g,h=!((t=c.content).indexOf(a)>-1);null!==(n=l.exec(t));){var p=n[1],g=t.slice(u,n.index).trim();i+=((h=h||g.indexOf(a)>-1)?o(g):g)+" "+p+" ",u=l.lastIndex}var d=t.substring(u);return i+=(h=h||d.indexOf(a)>-1)?o(d):d,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(c.placeholders,i)},C=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():k(t,e)?R(t,e,r).trim():t.trim()})).join(", ")},L=function(t,e,r,n,s){var u=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(i,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),o=t[3],c=r+s+o,i="",u=t[4]-1;u>=0;u--){var l=t[5][u];if("}"===l||","===l)break;i=l+i}var f=i+c,h=""+i.trimRight()+c.trim();if(f.trim()!==h.trim()){var p=h+", "+f;n.push({orgSelector:f,updatedSelector:p})}return c}return a+t[3]})),{selectors:n,cssText:t}}(t=function(t){return O(t,c,j)}(t=function(t){return O(t,o,W)}(t=S(t))),n);return t=function(t){return l.reduce((function(t,e){return t.replace(e," ")}),t)}(t=u.cssText),e&&(t=function t(e,r,n,s,o){return _(e,(function(e){var o=e.selector,c=e.content;return"@"!==e.selector[0]?o=C(e.selector,r,n,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=t(e.content,r,n,s)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))}(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:u.selectors}},T=function(t,e,r){var n=e+"-h",s=e+"-s",o=function(t){return t.match(v)||[]}(t);t=function(t){return t.replace(d,"")}(t);var c=[];if(r){var i=function(t){var e="/*!@___"+c.length+"___*/",r="/*!@"+t.selector+"*/";return c.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=_(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=_(t.content,i),t):t}))}var a=L(t,e,n,s);return t=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<r;e++)for(var o=arguments[e],c=0,i=o.length;c<i;c++,s++)n[s]=o[c];return n}([a.cssText],o).join("\n"),r&&c.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),a.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);