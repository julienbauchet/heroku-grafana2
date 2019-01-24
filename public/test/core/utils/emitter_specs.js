/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/core"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("Emitter",function(){b.describe("given 2 subscribers",function(){b.it("should notfiy subscribers",function(){var a=new c.Emitter,d=!1,e=!1;a.on("test",function(){d=!0}),a.on("test",function(){e=!0}),a.emit("test",null),b.expect(d).to.be(!0),b.expect(e).to.be(!0)}),b.it("when subscribing twice",function(){function a(){e+=1}var d=new c.Emitter,e=0;d.on("test",a),d.on("test",a),d.emit("test",null),b.expect(e).to.be(2)}),b.it("should handle errors",function(){var a=new c.Emitter,d=0,e=0;a.on("test",function(){throw d++,"hello"}),a.on("test",function(){e++});try{a.emit("test",null)}catch(f){}try{a.emit("test",null)}catch(f){}b.expect(d).to.be(2),b.expect(e).to.be(0)})})})}}});