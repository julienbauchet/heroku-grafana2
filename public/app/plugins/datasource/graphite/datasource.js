/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/utils/datemath"],function(a){function b(a,b,e,f){this.basicAuth=a.basicAuth,this.url=a.url,this.name=a.name,this.cacheTimeout=a.cacheTimeout,this.withCredentials=a.withCredentials,this.render_method=a.render_method||"POST",this.query=function(a){var c={from:this.translateTime(a.rangeRaw.from,!1),until:this.translateTime(a.rangeRaw.to,!0),targets:a.targets,format:a.format,cacheTimeout:a.cacheTimeout||this.cacheTimeout,maxDataPoints:a.maxDataPoints},d=this.buildGraphiteParams(c,a.scopedVars);if(0===d.length)return b.when({data:[]});var e={method:"POST",url:"/render",data:d.join("&"),headers:{"Content-Type":"application/x-www-form-urlencoded"}};return a.panelId&&(e.requestId=this.name+".panelId."+a.panelId),this.doGraphiteRequest(e).then(this.convertDataPointsToMs)},this.convertDataPointsToMs=function(a){if(!a||!a.data)return[];for(var b=0;b<a.data.length;b++)for(var c=a.data[b],d=0;d<c.datapoints.length;d++)c.datapoints[d][1]*=1e3;return a},this.annotationQuery=function(a){if(a.annotation.target){var b=f.replace(a.annotation.target,{},"glob"),c={rangeRaw:a.rangeRaw,targets:[{target:b}],format:"json",maxDataPoints:100};return this.query(c).then(function(b){for(var c=[],d=0;d<b.data.length;d++)for(var e=b.data[d],f=0;f<e.datapoints.length;f++){var g=e.datapoints[f];g[0]&&c.push({annotation:a.annotation,time:g[1],title:e.target})}return c})}var d=f.replace(a.annotation.tags);return this.events({range:a.rangeRaw,tags:d}).then(function(b){for(var c=[],d=0;d<b.data.length;d++){var e=b.data[d];c.push({annotation:a.annotation,time:1e3*e.when,title:e.what,tags:e.tags,text:e.data})}return c})},this.events=function(a){try{var c="";return a.tags&&(c="&tags="+a.tags),this.doGraphiteRequest({method:"GET",url:"/events/get_data?from="+this.translateTime(a.range.from,!1)+"&until="+this.translateTime(a.range.to,!0)+c})}catch(d){return b.reject(d)}},this.targetContainsTemplate=function(a){return f.variableExists(a.target)},this.translateTime=function(a,b){if(c["default"].isString(a)){if("now"===a)return"now";if(a.indexOf("now-")>=0&&a.indexOf("/")===-1)return a=a.substring(3),a=a.replace("m","min"),a=a.replace("M","mon");a=d.parse(a,b)}return b?a.get("s")&&a.add(1,"m"):b===!1&&a.get("s")&&a.subtract(1,"m"),a.unix()},this.metricFindQuery=function(a){var d;try{d=encodeURIComponent(f.replace(a))}catch(e){return b.reject(e)}return this.doGraphiteRequest({method:"GET",url:"/metrics/find/?query="+d}).then(function(a){return c["default"].map(a.data,function(a){return{text:a.text,expandable:!!a.expandable}})})},this.testDatasource=function(){return this.metricFindQuery("*").then(function(){return{status:"success",message:"Data source is working",title:"Success"}})},this.doGraphiteRequest=function(a){return(this.basicAuth||this.withCredentials)&&(a.withCredentials=!0),this.basicAuth&&(a.headers=a.headers||{},a.headers.Authorization=this.basicAuth),a.url=this.url+a.url,a.inspect={type:"graphite"},e.datasourceRequest(a)},this._seriesRefLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.buildGraphiteParams=function(a,b){function d(a){return a.replace("m","min").replace("M","mon")}function e(a,b){return l[b]||a}var g,h,i,j=["from","until","rawData","format","maxDataPoints","cacheTimeout"],k=[],l={},m=/\#([A-Z])/g,n=/'(\d+)m'/gi,o=!1;for(a.format="json",i=0;i<a.targets.length;i++)g=a.targets[i],g.target&&(g.refId||(g.refId=this._seriesRefLetters[i]),h=f.replace(g.target,b),h=h.replace(n,d),l[g.refId]=h);for(i=0;i<a.targets.length;i++)g=a.targets[i],g.target&&(h=l[g.refId],h=h.replace(m,e),l[g.refId]=h,g.hide||(o=!0,k.push("target="+encodeURIComponent(h))));return c["default"].each(a,function(a,b){c["default"].indexOf(j,b)!==-1&&a&&k.push(b+"="+encodeURIComponent(a))}),o?k:[]}}b.$inject=["instanceSettings","$q","backendSrv","templateSrv"];var c,d;return a("GraphiteDatasource",b),{setters:[function(a){c=a},function(a){d=a}],execute:function(){}}});