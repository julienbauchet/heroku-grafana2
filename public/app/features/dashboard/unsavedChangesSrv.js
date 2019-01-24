/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.services");c.service("unsavedChangesSrv",["$rootScope","$q","$location","$timeout","contextSrv","$window",function(c,d,e,f,g,h){function i(a,b,c){var d=this;this.current=a,this.originalPath=e.path(),this.scope=b,b.onAppEvent("dashboard-saved",function(){this.original=this.current.getSaveModelClone(),this.originalPath=e.path()}.bind(this)),h.onbeforeunload=function(){if(!d.ignoreChanges())return d.hasChanges()?"There are unsaved changes to this dashboard":void 0},b.$on("$locationChangeStart",function(a,b){return d.originalPath===e.path()||(!!d.ignoreChanges()||void(d.hasChanges()&&(a.preventDefault(),d.next=b,f(function(){d.open_modal()}))))}),c?f(function(){d.original=a.getSaveModelClone()},c):d.original=a.getSaveModelClone()}var j=i.prototype;j.ignoreChanges=function(){if(!this.original)return!0;if(!g.isEditor)return!0;if(!this.current||!this.current.meta)return!0;var a=this.current.meta;return!a.canSave||a.fromScript||a.fromFile},j.cleanDashboardFromIgnoredChanges=function(a){a.time=0,a.refresh=0,a.schemaVersion=0,a.editMode=!1,a.rows=b.filter(a.rows,function(a){return!a.repeatRowId&&(a.panels=b.filter(a.panels,function(a){return!a.repeatPanelId&&(a.scopedVars=null,a.span=null,a.legend&&(delete a.legend.sort,delete a.legend.sortDesc),!0)}),a.collapse=!1,!0)}),b.each(a.templating.list,function(a){a.current=null,a.options=null})},j.hasChanges=function(){var c=this.current.getSaveModelClone(),d=this.original;this.cleanDashboardFromIgnoredChanges(c),this.cleanDashboardFromIgnoredChanges(d);var e=b.find(c.nav,{type:"timepicker"}),f=b.find(d.nav,{type:"timepicker"});e&&f&&(e.now=f.now);var g=a.toJson(c),h=a.toJson(d);return g!==h},j.open_modal=function(){var a=this,b=this.scope.$new();b.ignore=function(){a.original=null,a.goto_next()},b.save=function(){a.scope.$emit("save-dashboard")},c.appEvent("show-modal",{src:"public/app/partials/unsaved-changes.html",modalClass:"confirm-modal",scope:b})},j.goto_next=function(){var a=e.absUrl().length-e.url().length,b=this.next.substring(a);e.url(b)},this.Tracker=i,this.init=function(a,b){return new i(a,b,1e3)}}])});