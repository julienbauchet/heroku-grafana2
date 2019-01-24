/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","../../core/core_module","../../core/app_events","moment","./alert_def"],function(a){var b,c,d,e,f,g;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c){this.backendSrv=a,this.$location=b,this.$scope=c,this.stateFilters=[{text:"All",value:null},{text:"OK",value:"ok"},{text:"Alerting",value:"alerting"},{text:"No Data",value:"no_data"}],this.filters={state:"ALL"};var d=b.search();this.filters.state=d.state||null,this.loadAlerts()}return a.$inject=["backendSrv","$location","$scope"],a.prototype.filtersChanged=function(){this.$location.search(this.filters)},a.prototype.loadAlerts=function(){var a=this;this.backendSrv.get("/api/alerts",this.filters).then(function(c){a.alerts=b["default"].map(c,function(a){return a.stateModel=f["default"].getStateDisplayModel(a.state),a.newStateDateAgo=e["default"](a.newStateDate).fromNow().replace(" ago",""),a})})},a.prototype.pauseAlertRule=function(a){var c=b["default"].find(this.alerts,{id:a}),d={paused:"paused"!==c.state};this.backendSrv.post("/api/alerts/"+c.id+"/pause",d).then(function(a){c.state=a.state,c.stateModel=f["default"].getStateDisplayModel(a.state)})},a.prototype.openHowTo=function(){d["default"].emit("show-modal",{src:"public/app/features/alerting/partials/alert_howto.html",modalClass:"confirm-modal",model:{}})},a}(),a("AlertListCtrl",g),c["default"].controller("AlertListCtrl",g)}}});