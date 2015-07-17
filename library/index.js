/*! v0.1.1 Build Fri Jul 17 2015 13:44:09 GMT+0300 (MSK) */
!function(){var e={},t=function(){var t,n,r,a=Array.prototype.slice.call(arguments,0);"string"==typeof a[0]?(r=a[0],t=a[1],n=a[2]):Array.isArray(a[0])&&(t=a[0],n=a[1]);var o=t.reduce(function(e,t){return e.addDependency(t)},tau.mashups);return o=o.addDependency(r+"/config"),o=o.addMashup(function(){var a=Array.prototype.slice.call(arguments,0);if(t.length>0&&1===a.length)throw new Error("Can't properly load dependencies for mashup \""+r+'", mashup is stopped.');return e.variables=a[a.length-1],a.length-t.length===2?e.config=a[a.length-2]:e.config={},Object.freeze&&(Object.freeze(e.variables),Object.freeze(e.config),Object.freeze(e)),n.apply(null,a)})};t("CustomUnitLastComment",["tau/models/board.customize.units/const.entity.types.names","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/board.customize.units.interaction","tau/configurator","jQuery"],function(t,n,r,a,o){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={exports:{},id:e,loaded:!1};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var r={};return n.m=t,n.c=r,n.p="",n.p=e.variables?e.variables.mashupPath:n.p,n(0)}([function(e,t,n){e.exports=n(3)},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(4),o=r(a),i="customunit_last_comment",s=function(e){var t=document.createElement("DIV");t.innerHTML=e;var n=t.textContent||t.innerText||"";return n.length>150&&(n=n.substring(0,150)+"..."),n.replace(/\u00a0/g," ")};o["default"].add({id:i,name:"Last Comment",outerClassName:"tau-board-unit_type_custom-rich-tex",alignment:"base",sections:1,template:{markup:'<div class="tau-board-unit__value" style="white-space:normal"><%= fn.output(this.data.comment.description) %>',customFunctions:{output:s}},hideIf:function(e){return!e.comment},model:{comment:"Comments.OrderByDescending(CreateDate).Select({Description}).First()"},sampleData:{comment:{description:"Suspendisse consequat nisi et diam euismod, vel pulvinar massa laoreet. Nunc finibus et elit nec ultrices. Suspendisse consectetur tincidunt tortor, venenatis varius dolor."}}})},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(7).openUnitEditor,i=n(8),s=function(e){return e=e||{},e.types=e.types||[r.ANY_TYPE],e.sizes=e.sizes||Object.keys(a).map(function(e){return a[e]}),i.getAppConfigurator().then(function(t){var n=t.getUnitsRegistry();if(!e.id)throw new Error('Field "id" is required for custom unit config');if(n.units[e.id])throw new Error('Custom unit with id "'+e.id+'" has been already registered');e.name=e.name||e.id,e.model=e.model||e.sampleData?e.model:{dummy:1},"string"!=typeof e.model&&"object"==typeof e.model&&(e.model=Object.keys(e.model).reduce(function(t,n){return t.concat(n+":"+e.model[n])},[]).join(", ")),e.sampleData=e.sampleData||{},e.template=e.template||{markup:['<div class="tau-board-unit__value">'+e.id+"</div>"]},"string"==typeof e.template&&(e.template={markup:[e.template]}),"string"==typeof e.template.markup&&(e.template.markup=[e.template.markup]),e.outerClassName&&(e.classId=e.outerClassName),e.isEditable&&(e.interactionConfig={isEditable:e.isEditable},e.editorHandler?e.interactionConfig.handler=e.editorHandler:e.interactionConfig.handler=function(t,n){var r=t.cardDataForUnit,a=e.editorComponentName instanceof Function?e.editorComponentName(r):e.editorComponentName,i=o(a,{});if(e.editorData){var s={};Object.keys(e.editorData).forEach(function(t){var n=e.editorData[t];s[t]=n instanceof Function?n(r):r[n]}),t.cardDataForUnit=s}return i(t,n)}),n.units[e.id]=n.register([e])[e.id]})};e.exports={types:r,sizes:a,add:s}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(9),a=n(10),o=new a.Deferred;r.getGlobalBus().once("configurator.ready",function(e,t){o.resolve(t)});var i=function(){return o.promise()};e.exports={getAppConfigurator:i}},function(e,t){e.exports=a},function(e,t){e.exports=o}])})}();