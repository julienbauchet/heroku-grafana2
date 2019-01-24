/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","angular"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(a,b){this.backendSrv=a,this.$q=b}return a.$inject=["backendSrv","$q"],a.prototype.query=function(a){var d=b["default"].filter(a.targets,function(a){return a.hide!==!0}).map(function(b){return{refId:b.refId,scenarioId:b.scenarioId,intervalMs:a.intervalMs,maxDataPoints:a.maxDataPoints,stringInput:b.stringInput,jsonInput:c["default"].fromJson(b.jsonInput)}});return 0===d.length?this.$q.when({data:[]}):this.backendSrv.post("/api/tsdb/query",{from:a.range.from.valueOf().toString(),to:a.range.to.valueOf().toString(),queries:d}).then(function(a){var c=[];return a.results&&b["default"].forEach(a.results,function(a){for(var b=0,d=a.series;b<d.length;b++){var e=d[b];c.push({target:e.name,datapoints:e.points})}}),{data:c}})},a.prototype.annotationQuery=function(a){return this.backendSrv.get("/api/annotations",{from:a.range.from.valueOf(),to:a.range.to.valueOf(),limit:a.limit,type:a.type})},a}(),a("TestDataDatasource",d)}}});