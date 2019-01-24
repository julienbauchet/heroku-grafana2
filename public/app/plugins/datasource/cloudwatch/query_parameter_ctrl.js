/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.directive("cloudwatchQueryParameter",function(){return{templateUrl:"public/app/plugins/datasource/cloudwatch/partials/query.parameter.html",controller:"CloudWatchQueryParameterCtrl",restrict:"E",scope:{target:"=",datasource:"=",onChange:"&"}}}),c.controller("CloudWatchQueryParameterCtrl",["$scope","templateSrv","uiSegmentSrv","datasourceSrv","$q",function(c,d,e,f,g){c.init=function(){var a=c.target;a.namespace=a.namespace||"",a.metricName=a.metricName||"",a.statistics=a.statistics||["Average"],a.dimensions=a.dimensions||{},a.period=a.period||"",a.region=a.region||"",c.regionSegment=e.getSegmentForValue(c.target.region,"select region"),c.namespaceSegment=e.getSegmentForValue(c.target.namespace,"select namespace"),c.metricSegment=e.getSegmentForValue(c.target.metricName,"select metric"),c.dimSegments=b.reduce(c.target.dimensions,function(a,b,c){return a.push(e.newKey(c)),a.push(e.newOperator("=")),a.push(e.newKeyValue(b)),a},[]),c.statSegments=b.map(c.target.statistics,function(a){return e.getSegmentForValue(a)}),c.ensurePlusButton(c.statSegments),c.ensurePlusButton(c.dimSegments),c.removeDimSegment=e.newSegment({fake:!0,value:"-- remove dimension --"}),c.removeStatSegment=e.newSegment({fake:!0,value:"-- remove stat --"}),b.isEmpty(c.target.region)&&(c.target.region=c.datasource.getDefaultRegion()),c.onChange||(c.onChange=function(){})},c.getStatSegments=function(){return g.when([a.copy(c.removeStatSegment),e.getSegmentForValue("Average"),e.getSegmentForValue("Maximum"),e.getSegmentForValue("Minimum"),e.getSegmentForValue("Sum"),e.getSegmentForValue("SampleCount")])},c.statSegmentChanged=function(a,d){a.value===c.removeStatSegment.value?c.statSegments.splice(d,1):a.type="value",c.target.statistics=b.reduce(c.statSegments,function(a,b){return b.fake||a.push(b.value),a},[]),c.ensurePlusButton(c.statSegments),c.onChange()},c.ensurePlusButton=function(a){var b=a.length,c=a[Math.max(b-1,0)];c&&"plus-button"===c.type||a.push(e.newPlusButton())},c.getDimSegments=function(b,d){if("operator"===b.type)return g.when([]);var e=c.target,f=g.when([]);if("key"===b.type||"plus-button"===b.type)f=c.datasource.getDimensionKeys(c.target.namespace,c.target.region);else if("value"===b.type){var h=c.dimSegments[d-2].value;f=c.datasource.getDimensionValues(e.region,e.namespace,e.metricName,h,{})}return f.then(c.transformToSegments(!0)).then(function(d){return"key"===b.type&&d.splice(0,0,a.copy(c.removeDimSegment)),d})},c.dimSegmentChanged=function(a,b){c.dimSegments[b]=a,a.value===c.removeDimSegment.value?c.dimSegments.splice(b,3):"plus-button"===a.type&&(c.dimSegments.push(e.newOperator("=")),c.dimSegments.push(e.newFake("select dimension value","value","query-segment-value")),a.type="key",a.cssClass="query-segment-key"),c.syncDimSegmentsWithModel(),c.ensurePlusButton(c.dimSegments),c.onChange()},c.syncDimSegmentsWithModel=function(){for(var a={},b=c.dimSegments.length,d=0;d<b-2;d+=3){var e=c.dimSegments[d],f=c.dimSegments[d+2];f.fake||(a[e.value]=f.value)}c.target.dimensions=a},c.getRegions=function(){return c.datasource.metricFindQuery("regions()").then(c.transformToSegments(!0))},c.getNamespaces=function(){return c.datasource.metricFindQuery("namespaces()").then(c.transformToSegments(!0))},c.getMetrics=function(){return c.datasource.metricFindQuery("metrics("+c.target.namespace+","+c.target.region+")").then(c.transformToSegments(!0))},c.regionChanged=function(){c.target.region=c.regionSegment.value,c.onChange()},c.namespaceChanged=function(){c.target.namespace=c.namespaceSegment.value,c.onChange()},c.metricChanged=function(){c.target.metricName=c.metricSegment.value,c.onChange()},c.transformToSegments=function(a){return function(c){var f=b.map(c,function(a){return e.newSegment({value:a.text,expandable:a.expandable})});return a&&b.each(d.variables,function(a){f.unshift(e.newSegment({type:"template",value:"$"+a.name,expandable:!0}))}),f}},c.init()}])});