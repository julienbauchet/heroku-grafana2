/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a){function b(a){if("undefined"==typeof window)return"";for(var b=0;b<f.length;b++)if(a.address===f[b])return"";return k(a.address)}var c,d,e,f,g,h,i,j,k;return a("fetch",b),{setters:[],execute:function(){for(c=100,d=document.getElementsByTagName("head")[0],e=document.getElementsByTagName("link"),f=[],g=0;g<e.length;g++)f.push(e[g].href);h=!!window.navigator.userAgent.match(/AppleWebKit\/([^ ;]*)/),i=function(a,b){setTimeout(function(){for(var c=0;c<document.styleSheets.length;c++){var d=document.styleSheets[c];if(d.href===a.href)return b()}i(a,b)},10)},j=function(){},k=function(a){return new Promise(function(b,e){var f=document.createElement("link"),g=setTimeout(function(){e("Unable to load CSS")},1e3*c),k=function(a){clearTimeout(g),f.onload=f.onerror=j,setTimeout(function(){a?e(a):b("")},7)};f.type="text/css",f.rel="stylesheet",f.href=a,h?i(f,k):f.onload=function(){k(void 0)},f.onerror=function(a){k(a.error||new Error("Error loading CSS file."))},d.appendChild(f)})}}}});