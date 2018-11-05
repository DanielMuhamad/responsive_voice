(function(e){function t(t){for(var a,i,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],r[i]&&f.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"28ae":function(e,t,n){"use strict";var a=n("5113"),r=n.n(a);r.a},5113:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ResponsiveVoice")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"3"}},[n("b-card-group",[n("b-card",[n("b",[e._v("Responsive Voice")]),n("b-card-body",[n("b-form-textarea",{attrs:{id:"input-text",placeholder:"Type your text ...",rows:3,"max-rows":6},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),n("br"),n("b-form-select",{attrs:{id:"select-speaker",size:"sm",options:e.speakers},on:{change:e.changeSpeaker},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("p",[e._v("hasil: "+e._s(e.selected))]),n("br"),n("br"),n("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(t){e.playSound()}}},[n("font-awesome-icon",{attrs:{icon:"play-circle"}}),e._v(" Play\n              ")],1),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.data.volume,expression:"data.volume"}],ref:"input",attrs:{type:"range",step:"0.1",min:"0",max:"1"},domProps:{value:e.data.volume},on:{input:function(t){e.setVolume(t.target.value)},__r:function(t){e.$set(e.data,"volume",t.target.value)}}}),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.data.pitch,expression:"data.pitch"}],ref:"input",attrs:{type:"range",step:"0.1",min:"0",max:"2"},domProps:{value:e.data.pitch},on:{input:function(t){e.setPitch(t.target.value)},__r:function(t){e.$set(e.data,"pitch",t.target.value)}}}),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.data.rate,expression:"data.rate"}],ref:"input",attrs:{type:"range",step:"0.1",min:"0",max:"2"},domProps:{value:e.data.rate},on:{input:function(t){e.setRate(t.target.value)},__r:function(t){e.$set(e.data,"rate",t.target.value)}}})],1)],1)],1)],1)],1)],1)],1)},s=[],u=(n("7f7f"),n("d4ec")),c=n("bee2"),l=function(){function e(){Object(u["a"])(this,e),this.volume=1,this.pitch=1,this.rate=1,this.speaker="UK English Male"}return Object(c["a"])(e,[{key:"getVolume",value:function(){return this.volume}},{key:"getPitch",value:function(){return this.pitch}},{key:"getRate",value:function(){return this.rate}},{key:"getSpeaker",value:function(){return this.speaker}},{key:"setVolume",value:function(e){this.volume=e}},{key:"setPitch",value:function(e){this.pitch=e}},{key:"setRate",value:function(e){this.rate=e}},{key:"setSpeaker",value:function(e){this.speaker=e}},{key:"play",value:function(e){var t={volume:this.getVolume(),pitch:this.getPitch(),rate:this.getRate()};console.log(t),responsiveVoice.speak(e,this.getSpeaker(),t)}}]),e}(),p={data:function(){return{textarea:"",selected:"UK English Male",sp:[{value:"idn-male",text:"Indonesian Male"}],speakers:[],data:{volume:.5,pitch:1,rate:1},tts:new l}},mounted:function(){this.loadAllSpeakers()},methods:{playSound:function(){var e=document.getElementById("input-text").value;this.tts.play(e)},setVolume:function(e){this.tts.setVolume(e)},setPitch:function(e){this.tts.setPitch(e)},setRate:function(e){this.tts.setRate(e)},loadAllSpeakers:function(){for(var e=responsiveVoice.getVoices(),t=0;t<e.length;t++){var n=e[t].name,a={value:n,text:n};this.speakers.push(a)}},changeSpeaker:function(e){this.tts.setSpeaker(e),console.log(e)}}},f=p,d=(n("28ae"),n("2877")),v=Object(d["a"])(f,i,s,!1,null,"5a78c478",null);v.options.__file="ResponsiveVoice.vue";var h=v.exports,m={name:"app",components:{ResponsiveVoice:h}},b=m,g=(n("034f"),Object(d["a"])(b,r,o,!1,null,null,null));g.options.__file="App.vue";var y=g.exports,k=n("9f7b"),x=n("ecee"),_=n("ad3d"),w=n("c074");x["c"].add(w["a"],w["e"],w["d"],w["c"],w["b"]),a["a"].component("font-awesome-icon",_["a"]);n("f9e3"),n("2dd8");a["a"].use(k["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.a97c6b07.js.map