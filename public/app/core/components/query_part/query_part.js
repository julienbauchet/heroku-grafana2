/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a){function b(a,b){var c=a.def.type+"(",d=f["default"].map(a.params,function(b,c){var d=a.def.params[c];return"time"===d.type&&"auto"===b&&(b="$interval"),"single"===d.quote?"'"+b+"'":"double"===d.quote?'"'+b+'"':b});return b&&d.unshift(b),c+d.join(", ")+")"}function c(a,b){return b+" "+a.params[0]}function d(a,b){return a.params[0]}function e(a,b){return'"'+a.params[0]+'"'}var f,g,h;return a("functionRenderer",b),a("suffixRenderer",c),a("identityRenderer",d),a("quotedIdentityRenderer",e),{setters:[function(a){f=a}],execute:function(){g=function(){function a(a){this.type=a.type,this.params=a.params,this.defaultParams=a.defaultParams,this.renderer=a.renderer,this.category=a.category,this.addStrategy=a.addStrategy}return a}(),a("QueryPartDef",g),h=function(){function a(a,b){if(this.part=a,this.def=b,!this.def)throw{message:"Could not find query part "+a.type};a.params=a.params||f["default"].clone(this.def.defaultParams),this.params=a.params,this.updateText()}return a.prototype.render=function(a){return this.def.renderer(this,a)},a.prototype.hasMultipleParamsInString=function(a,b){return a.indexOf(",")!==-1&&(this.def.params[b+1]&&this.def.params[b+1].optional)},a.prototype.updateParam=function(a,b){var c=this;return this.hasMultipleParamsInString(a,b)?void f["default"].each(a.split(","),function(a,b){c.updateParam(a.trim(),b)}):(""===a&&this.def.params[b].optional?this.params.splice(b,1):this.params[b]=a,this.part.params=this.params,void this.updateText())},a.prototype.updateText=function(){if(0===this.params.length)return void(this.text=this.def.type+"()");var a=this.def.type+"(";a+=this.params.join(", "),a+=")",this.text=a},a}(),a("QueryPart",h)}}});