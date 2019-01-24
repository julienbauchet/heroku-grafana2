/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/core/core_module","./row/row_model"],function(a){var b,c,d,e,f;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(){}return a.prototype.init=function(a,b){this.dashboard=a,this.variables=b.variables},a.prototype.process=function(a){if(!this.dashboard.snapshot&&0!==this.variables.length){this.iteration=(this.iteration||(new Date).getTime())+1,a=a||{};var b,d,e,f,g=a.cleanUpOnly;for(b=0;b<this.dashboard.rows.length;b++)for(e=this.dashboard.rows[b],d=0;d<e.panels.length;d++)delete e.panels[d].scopedVars;for(b=0;b<this.dashboard.rows.length;b++){if(e=this.dashboard.rows[b],e.repeat)g||this.repeatRow(e,b);else if(e.repeatRowId&&e.repeatIteration!==this.iteration){this.dashboard.removeRow(e,!0),b-=1;continue}for(d=0;d<e.panels.length;d++)f=e.panels[d],f.repeat?g||this.repeatPanel(f,e):f.repeatPanelId&&f.repeatIteration!==this.iteration&&(e.panels=c["default"].without(e.panels,f),d-=1)}}},a.prototype.getRowClone=function(a,c,d){if(0===c)return a;var f,g,h,i,j=d+1;for(f=0;f<this.dashboard.rows.length;f++)if(h=this.dashboard.rows[f],h.repeatRowId===j&&h.repeatIteration!==this.iteration){i=h,i.copyPropertiesFromRowSource(a);break}if(!i){var k=b["default"].copy(a.getSaveModel());for(i=new e.DashboardRow(k),this.dashboard.rows.splice(d+c,0,i),f=0;f<i.panels.length;f++)g=i.panels[f],g.id=this.dashboard.getNextPanelId()}return i.repeat=null,i.repeatRowId=j,i.repeatIteration=this.iteration,i},a.prototype.repeatRow=function(a,b){var d=this,e=c["default"].find(this.variables,{name:a.repeat});if(e){var f,g,h,i;f="All"===e.current.text?e.options.slice(1,e.options.length):c["default"].filter(e.options,{selected:!0}),c["default"].each(f,function(c,f){for(g=d.getRowClone(a,f,b),g.scopedVars={},g.scopedVars[e.name]=c,h=0;h<g.panels.length;h++)i=g.panels[h],i.scopedVars={},i.scopedVars[e.name]=c})}},a.prototype.getPanelClone=function(a,c,d){if(0===d)return a;var e,f,g,h;for(e=0;e<c.panels.length;e++)if(g=c.panels[e],g.repeatIteration!==this.iteration&&g.repeatPanelId===a.id){h=g;break}return h||(h={id:this.dashboard.getNextPanelId()},c.panels.push(h)),f=h.id,b["default"].copy(a,h),h.id=f,h.repeatIteration=this.iteration,h.repeatPanelId=a.id,h.repeat=null,h},a.prototype.repeatPanel=function(a,b){var d=this,e=c["default"].find(this.variables,{name:a.repeat});if(e){var f;f="All"===e.current.text?e.options.slice(1,e.options.length):c["default"].filter(e.options,{selected:!0}),c["default"].each(f,function(c,g){var h=d.getPanelClone(a,b,g);h.span=Math.max(12/f.length,a.minSpan||4),h.scopedVars=h.scopedVars||{},h.scopedVars[e.name]=c})}},a}(),a("DynamicDashboardSrv",f),d["default"].service("dynamicDashboardSrv",f)}}});