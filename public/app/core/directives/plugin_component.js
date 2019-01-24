/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/core/config","app/core/core_module","app/plugins/panel/unknown/module"],function(a){function b(a,b,h,i,j,k){function l(a){if(a.template)return i.when(a.template);var b=k.get(a.templateUrl);return b?i.when(b):j.get(a.templateUrl).then(function(a){return a.data})}function m(a,b){if(a)return 0===a.indexOf("public")?a:b+"/"+a}function n(a){return a.Component.templateUrl=m(a.Component.templateUrl,a.baseUrl),function(){return{templateUrl:a.Component.templateUrl,template:a.Component.template,restrict:"E",controller:a.Component,controllerAs:"ctrl",bindToController:!0,scope:a.bindings,link:function(a,b,c,d){d.link&&d.link(a,b,c,d),d.init&&d.init()}}}}function o(a,b){var c={name:"panel-plugin-"+a.panel.type,bindings:{dashboard:"=",panel:"=",row:"="},attrs:{dashboard:"ctrl.dashboard",panel:"panel",row:"ctrl.row"}},d=("panel-"+a.panel.type,e["default"].panels[a.panel.type]),f=Promise.resolve(g.UnknownPanelCtrl);return d&&(f=System["import"](d.module).then(function(a){return a.PanelCtrl})),f.then(function(a){return c.Component=a,!a||a.registered?c:a.templatePromise?a.templatePromise.then(function(a){return c}):(d&&(a.templateUrl=m(a.templateUrl,d.baseUrl)),a.templatePromise=l(a).then(function(b){return a.templateUrl=null,a.template='<grafana-panel ctrl="ctrl">'+b+"</grafana-panel>",c}),a.templatePromise)})}function p(a,c){switch(c.type){case"query-ctrl":var d=a.target.datasource||a.ctrl.panel.datasource;return b.get(d).then(function(b){return a.datasource=b,System["import"](b.meta.module).then(function(a){return{baseUrl:b.meta.baseUrl,name:"query-ctrl-"+b.meta.id,bindings:{target:"=",panelCtrl:"=",datasource:"="},attrs:{target:"target","panel-ctrl":"ctrl",datasource:"datasource"},Component:a.QueryCtrl}})});case"query-options-ctrl":return b.get(a.ctrl.panel.datasource).then(function(a){return System["import"](a.meta.module).then(function(b){return b.QueryOptionsCtrl?{baseUrl:a.meta.baseUrl,name:"query-options-ctrl-"+a.meta.id,bindings:{panelCtrl:"="},attrs:{"panel-ctrl":"ctrl"},Component:b.QueryOptionsCtrl}:{notFound:!0}})});case"annotations-query-ctrl":return System["import"](a.ctrl.currentDatasource.meta.module).then(function(b){return{baseUrl:a.ctrl.currentDatasource.meta.baseUrl,name:"annotations-query-ctrl-"+a.ctrl.currentDatasource.meta.id,bindings:{annotation:"=",datasource:"="},attrs:{annotation:"ctrl.currentAnnotation",datasource:"ctrl.currentDatasource"},Component:b.AnnotationsQueryCtrl}});case"datasource-config-ctrl":var e=a.ctrl.datasourceMeta;return System["import"](e.module).then(function(a){return a.ConfigCtrl?{baseUrl:e.baseUrl,name:"ds-config-"+e.id,bindings:{meta:"=",current:"="},attrs:{meta:"ctrl.datasourceMeta",current:"ctrl.current"},Component:a.ConfigCtrl}:{notFound:!0}});case"app-config-ctrl":var f=a.ctrl.model;return System["import"](f.module).then(function(a){return{baseUrl:f.baseUrl,name:"app-config-"+f.id,bindings:{appModel:"=",appEditCtrl:"="},attrs:{"app-model":"ctrl.model","app-edit-ctrl":"ctrl"},Component:a.ConfigCtrl}});case"app-page":var g=a.ctrl.appModel;return System["import"](g.module).then(function(b){return{baseUrl:g.baseUrl,name:"app-page-"+g.appId+"-"+a.ctrl.page.slug,bindings:{appModel:"="},attrs:{"app-model":"ctrl.appModel"},Component:b[a.ctrl.page.component]}});case"panel":return o(a,c);default:return i.reject({message:"Could not find component type: "+c.type})}}function q(b,e,f){var g=c["default"].element(document.createElement(f.name));d["default"].each(f.attrs,function(a,b){g.attr(b,a)}),a(g)(b),e.empty(),setTimeout(function(){e.append(g),b.$applyAsync(function(){b.$broadcast("refresh")})})}function r(a,b,c,d){if(d.notFound)return void b.empty();if(!d.Component)throw{message:"Failed to find exported plugin component for "+d.name};if(!d.Component.registered){var e=c.$normalize(d.name),g=n(d);f["default"].directive(e,g),d.Component.registered=!0}q(a,b,d)}return{restrict:"E",link:function(a,b,c){p(a,c).then(function(d){r(a,b,c,d)})["catch"](function(a){h.appEvent("alert-error",["Plugin Error",a.message||a]),console.log("Plugin component error",a)})}}}b.$inject=["$compile","datasourceSrv","$rootScope","$q","$http","$templateCache"];var c,d,e,f,g;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){f["default"].directive("pluginComponent",b)}}});