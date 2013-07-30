webshims.register("dom-extend",function(e,t,a,n,i){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var r=function(){if(!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),a.$&&(a.$=t.$),a.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};r(),setTimeout(r,90),t.ready("DOM",r),e(r),t.ready("WINDOWLOAD",r)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,a,n,i,r){return r?f.call(e(t)):f.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(a){if(!e.widget)for(var n,i=0;null!=(n=a[i]);i++)try{e(n).triggerHandler("remove")}catch(r){}t(a)}}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(a=this,1===a.nodeType)if(n){var o=t.call(a,r,e.prop(a,"value",i,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,i,r){return r||(r=n),e(r)[i?"onTrigger":"on"](t,a),this.on("remove",function(n){n.originalEvent||e(r).off(t,a)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,a,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,m);return n!==i&&(r||(r=e.data(t,m,{})),a&&(r[a]=n)),a?r&&r[a]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var n=v(this,"shadowData"),i=n&&n[t.prop]||this;-1==e.inArray(i,a)&&a.push(i)}),this.pushStack(a)}}),["removeAttr","prop","attr"].forEach(function(a){l[a]=e[a],e[a]=function(t,n,r,o,s){var d="val"==o,f=d?h:l[a];if(!t||!u[n]||1!==t.nodeType||!d&&o&&"attr"==a&&e.attrFn[n])return f(t,n,r,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=a||r!==!1&&null!==r?a:"removeAttr";if(b||(b=c["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(r===i)return m.get?m.get.call(t):m.value;m.set&&("attr"==a&&r===!0&&(r=n),g=m.set.call(t,r)),"value"==n&&(m.isVal=v)}else g=f(t,n,r,o,s);if((r!==i||"removeAttr"===w)&&p[y]&&p[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,p[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,r,T,d?"val":w,a)})}return g},d[a]=function(e,n,r){c[e]||(c[e]={}),c[e][n]||(c[e][n]={});var o=c[e][n][a],s=function(e,t,i){return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==a&&"value"==n?function(e){var t=this;return r.isVal?h(t,n,e,!1,0===arguments.length):l[a](t,n,e)}:"prop"==a&&"value"==e&&r.value.apply?function(){var e=l[a](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[a](this,n,e)}};c[e][n][a]=r,r.value===i&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(n.createElement("foobar")),a=Object.prototype.hasOwnProperty,i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var l,u;if(!(i&&(l=n.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&a.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(r,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var a={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(a,function(e,a){return s(e),a&&a.forEach?(a.forEach(function(t){o[e].each(t)}),i):(t.warn("Error: with "+e+"-property. methods: "+a),i)}),o=null});var r,o=e([]),s=function(t,i){a[t]?a[t].push(i):a[t]=[i],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,a){s(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,a,n){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[a]=this[a],this[a]=n})})}}}(),b=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var n=a.prop("id");return n||(t++,n="ID-"+t,a.eq(0).prop("id",n)),n}}(),implement:function(e,a){var n=v(e,"implemented")||v(e,"implemented",{});return n[a]?(t.warn(a+" already implemented for element #"+e.id),!1):(n[a]=!0,!0)},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,a,n){var i,r=(e._data(t,"events")||{})[a];r&&r.length>1&&(i=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,i):r.unshift(i)),t=null},addShadowDom:function(){var i,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if("resize"==t.type){var i=e(a).width(),l=e(a).width();if(l==r&&i==o)return;r=l,o=i,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=n.body,i=n.documentElement;s[t]=function(){return Math.max(a["scroll"+e],i["scroll"+e],a["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout",this.handler),e(a).bind("resize",this.handler),function(){var t,a=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),a.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(a,n,i){if(a&&n){i=i||{},a.jquery&&(a=a[0]),n.jquery&&(n=n[0]);var r=e.data(a,m)||e.data(a,m,{}),o=e.data(n,m)||e.data(n,m,{}),s={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),s=e.data(i.shadowFocusElement,m)||e.data(i.shadowFocusElement,m,s)):i.shadowFocusElement=n,e(a).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),r.hasShadow=n,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=r.shadowData={nativeElement:a,shadowElement:n,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),i.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(a,n){b(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,i=this.getAttribute(n);if(null==i)return"";if(t.setAttribute("href",i+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(r){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,n){"string"==typeof n&&(n=n.split(s)),n.forEach(function(n){t.defineNodeNamesProperty(a,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(a,n,i){return u[n]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,n),["prop","attr","removeAttr"].forEach(function(r){var o=i[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[r](a,n,o),"*"!=a&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&g(a,n,o),i[r]=o)}),i.initAttr&&y.content(a,n),i},defineNodeNameProperties:function(e,a,n,i){for(var r in a)!i&&a[r].initAttr&&y.createTmpCache(e),n&&(a[r][n]||(a[r][n]={},["value","set","get"].forEach(function(e){e in a[r]&&(a[r][n][e]=a[r][e],delete a[r][e])}))),a[r]=t.defineNodeNameProperty(e,r,a[r]);return i||y.flushTmpCache(),a},createElement:function(a,n,i){var r;return e.isFunction(n)&&(n={after:n}),y.createTmpCache(a),n.before&&y.createElement(a,n.before),i&&(r=t.defineNodeNameProperties(a,i,!1,!0)),n.after&&y.createElement(a,n.after),y.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,a,n,i){"string"==typeof t&&(t=t.split(s)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof a&&(a=a.split(s)),n.initAttr&&y.createTmpCache(e),a.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),n.set&&(i&&(n.set.only=i),p[e][t].push(n.set)),n.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(a,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?i:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var n;return a===i?(n=e.attributes[t]||{},a=n.specified?n.value:null,null==a?i:a):("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a),i)}},activeLang:function(){var a,n,i=[],r={},s=/:\/\/|^\.*\//,l=function(a,n,i){var r;return n&&i&&-1!==e.inArray(n,i.availabeLangs||[])?(a.loading=!0,r=i.langSrc,s.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+n+".js",function(){a.langObj[n]?(a.loading=!1,c(a,!0)):e(function(){a.langObj[n]&&c(a,!0),a.loading=!1})}),!0):!1},u=function(e){r[e]&&r[e].forEach(function(e){e.callback(a,n,"")})},c=function(e,t){if(e.activeLang!=a&&e.activeLang!==n){var i=o[e.module].options;e.langObj[a]||n&&e.langObj[n]?(e.activeLang=a,e.callback(e.langObj[a]||e.langObj[n],a),u(e.module)):t||l(e,a,i)||l(e,n,i)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],a),u(e.module))}},d=function(t){return"string"==typeof t&&t!==a?(a=t,n=a.split("-")[0],a==n&&(n=!1),e.each(i,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(a,n,"")):(t.activeLang||(t.activeLang=""),i.push(t),c(t))),a};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,n,i,r){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[a](e,n,i,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(i,r){if(e.each(a,function(t,a){for(var o=e(t,i).add(r.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],a)}),i===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-message",function(e,t,a,n,i,r){"use strict";r.overrideMessages&&(r.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=r.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\u00e4ssig.",email:"{%value} ist keine g\u00fcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\u00fcltige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zul\u00e4ssig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\u00e4stchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte w\u00e4hlen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var l=o[""],u=function(t,a){return t&&"string"!=typeof t&&(t=t[e.prop(a,"type")]||t[(a.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(a,n){var i,r=u(l[n],a),s=e.prop(a,"type");return r||(r=u(o[""][n],a)||e.prop(a,"validationMessage"),t.info("could not find errormessage for: "+n+" / "+s+". in language: "+e.webshims.activeLang())),r&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==r.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):e.prop(a,o))||"";"patternMismatch"!=n||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(i||(i=e(a).getShadowElement().data("wsWidget"+s)),i&&i.formatValue&&(l=i.formatValue(l,!1))),r=r.replace("{%"+o+"}",l),"value"==o&&(r=r.replace("{%valueLen}",l.length))}}),r||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(){e.each(o,function(e,t){return o[t]?(l=o[t],!1):i})}}),s.forEach(function(a){var n={valid:1,badInput:1};t.defineNodeNamesProperty(["fieldset","output","button"],a,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var o=t.defineNodeNameProperty(r,a,{prop:{get:function(){var a=this,r="";if(!e.prop(a,"willValidate"))return r;var s=e.prop(a,"validity")||{valid:1};return s.valid?r:(r=t.getContentValidationMessage(a,s))?r:s.customError&&a.nodeName&&(r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&o.prop._supget?o.prop._supget.call(a):t.data(a,"customvalidationMessage"))?r:(e.each(s,function(e,o){return!n[e]&&o?(r=t.createValidationMessage(a,e),r?!1:i):i}),!r&&s.badInput&&(r=t.createValidationMessage(a,"typeMismatch")||t.createValidationMessage(a,"valueMissing")),r||"")},writeable:!1}})})})});