!function(){function Survey(){this.$progressbar=$(".progress .progress-bar"),this.already_answered=this.$progressbar.data("already-answered"),this.items_left=this.$progressbar.data("items-left"),this.items_on_page=this.$progressbar.data("items-on-page"),$(".default_formr_button")[0]||this.items_on_page--,this.hidden_but_rendered=this.$progressbar.data("hidden-but-rendered"),this.percentage_minimum=this.$progressbar.data("percentage-minimum"),this.percentage_maximum=this.$progressbar.data("percentage-maximum"),this.form_inputs={},webshim.ready("DOM geolocation",function(){"use strict";$(".geolocator").click(function(){var a=$(this).closest(".controls").find("input[type=hidden]"),b=$(this).closest(".controls").find("input[type=text]");return b.attr("placeholder","You can also enter your location manually"),b.prop("readonly",!1),navigator.geolocation.getCurrentPosition(function(c){a.val(flatStringifyGeo(c)),b.val("lat:"+c.coords.latitude+"/long:"+c.coords.longitude),b.prop("readonly",!0)},function(){}),!1}).each(function(){$(this).closest(".input-group-btn.hidden").removeClass("hidden")})}),webshim.ready("DOM forms forms-ext dom-extend",function(){var a=$("div.btn-radio button.btn");a.closest("div.btn-group").removeClass("hidden"),a.closest(".controls").find("label[class!=keep-label]").addClass("hidden"),a.off("click").each(function(){var a=$(this),b=!!$("#"+a.attr("data-for")).prop("checked");a.toggleClass("btn-checked",b);new FastClick(this);webshim.addShadowDom($("#"+a.attr("data-for")),a.closest("div.btn-group"))}).click(function(){var a=$(this);$("#"+a.attr("data-for")).prop("checked",!0);var b=a.closest("div.btn-group").find("button.btn");return b.removeClass("btn-checked"),a.addClass("btn-checked"),a.change(),!1}),$("div.btn-checkbox button.btn").off("click").click(function(){var a=$(this),b=$("#"+a.attr("data-for")).prop("checked");return $("#"+a.attr("data-for")).prop("checked",!b),a.toggleClass("btn-checked",!b),$("#"+a.attr("data-for")).change(),!1}).each(function(){var a=$(this),b=!!$("#"+a.attr("data-for")).prop("checked");a.toggleClass("btn-checked",b),a.closest("div.btn-group").removeClass("hidden"),a.closest(".controls").find("label").addClass("hidden");new FastClick(this);webshim.addShadowDom($("#"+a.attr("data-for")),a.closest("div.btn-group"))}),$("div.btn-check button.btn").off("click").click(function(){"use strict";var a=$(this);return $("#"+a.attr("data-for")).trigger("togglecheck"),!1}).each(function(){"use strict";var a=$(this),b=$("#"+a.attr("data-for"));b.change(function(){var a=!!$(this).prop("checked"),b=$('button.btn[data-for="'+this.id+'"]');b.toggleClass("btn-checked",a).find("i").toggleClass("fa-check",a)}).change().on("togglecheck",function(){var a=!!$(this).prop("checked");$(this).prop("checked",!a),$(this).change()}),a.closest("div.btn-group").removeClass("hidden"),b.closest("label").addClass("hidden");new FastClick(this);webshim.addShadowDom($("#"+a.attr("data-for")),a.closest("div.btn-group"))}),$(".item-number.counter input[type=number]").each(function(){var a=$(this);a.parents("span").hide();var b=$('<div class="btn-group"><button class="btn btn-lg btn-down"><i class="fa fa-minus-circle"></i></button><button class="btn btn-lg btn-up"><i class="fa fa-plus-circle"></i></button></div>');b.insertAfter(a.parents("span")),b.find(".btn-down").click(function(){var b=1;return a.attr("value")&&(b=+a.attr("value")),a.attr("min")<b&&(a.attr("value",b-1),a.change()),!1}),b.find(".btn-up").click(function(){var b=1;return a.attr("value")&&(b=+a.attr("value")),a.attr("max")>b&&(a.attr("value",b+1),a.change()),!1}),webshim.ready("dom-extend",function(){webshim.addShadowDom(a,b)})}),$("select.select2zone, .form-group.select2 select").each(function(a,b){"use strict";var c=$(b);c.select2(),webshim.addShadowDom(c,c.select2("container"))}),$(".select2pills select").each(function(a,b){"use strict";var c=$(b);c.select2({width:"element",dropdownCssClass:"bigdrop",maximumSelectionSize:c.data("select2maximumSelectionSize"),maximumInputLength:c.data("select2maximumInputLength"),formatResult:function(a){if(""!==a.id){var b="<strong>"+a.text+"</strong><br><img width='200px' alt='"+a.text+"' src='assets/img/pills/"+a.id+".jpg'/>";return b}return""},formatSelection:function(a){return a.text},escapeMarkup:function(a){return a}}).on("change select2-open",function(){document.activeElement.blur()}),webshim.addShadowDom(c,c.select2("container"))}),$(".people_list textarea").each(function(a,b){"use strict";var c=$(b);c.select2({width:"element",height:"2000px",data:[],formatNoMatches:function(a){return""!==a?"Füge '"+a+"' hinzu!":"Weitere Personen hinzufügen."},tokenSeparators:["\n"],separator:"\n",createSearchChoice:function(a,b){return 0===$(b).filter(function(){return 0===this.text.localeCompare(a)}).length?(a=a.replace("\n","; "),{id:a,text:a}):void 0},initSelection:function(a,b){for(var c=a.val().split("\n"),d=[],e=0;e<c.length;e++)d.push({id:c[e],text:c[e]});b(d)},maximumSelectionSize:15,maximumInputLength:50,formatResultCssClass:function(){return"people_list_results"},multiple:!0,allowClear:!0,escapeMarkup:function(a){return a}}).removeClass("form-control");var d=$("<span class='select2-plus'>+</span>");d.insertBefore(c.select2("container").find(".select2-search-field input")),webshim.addShadowDom(c,c.select2("container"))}),$("input.select2add").each(function(a,b){var c=$(b);if(!c.select2("container").hasClass("select2-container")){var d=c.attr("data-select2add");"object"!=typeof d&&(d=$.parseJSON(d));for(var e,f=[],g=0;g<d.length;g++){e=d[g].id.split(",");for(var h=0;h<e.length;h++)e[h].trim().length>0&&f.push({id:e[h],text:e[h]})}c.select2({createSearchChoice:function(a,b){return 0===$(b).filter(function(){return 0===this.text.localeCompare(a)}).length?(a=a.replace(",",";"),{id:a,text:a}):void 0},initSelection:function(a,b){var d;if(c.data("select2multiple")){var e=a.val().split(",");d=new Array(e.length);for(var g=0;g<e.length;g++)d[g]={id:e[g],text:e[g]}}else d={id:a.val(),text:a.val()};$.each(f,function(b,c){return c.id===a.val()?(d=c,!1):void 0}),b(d)},maximumSelectionSize:c.data("select2maximumSelectionSize"),maximumInputLength:c.data("select2maximumInputLength"),data:f,multiple:!!c.data("select2multiple"),allowClear:!0,escapeMarkup:function(a){return a}}),webshim.ready("forms forms-ext dom-extend form-validators",function(){webshim.addShadowDom(c,c.select2("container"))})}})}),webshim.ready("forms forms-ext dom-extend form-validators",function(){webshim.addCustomValidityRule("always_invalid",function(a){return $(a).hasClass("always_invalid")?!0:void 0},"Cannot submit while there are problems with openCPU."),webshim.refreshCustomValidityRules()});var a=mysql_datetime(),b=window.performance.now?performance.now():null;$("form").find("input.item_shown, input.item_shown_relative, input.item_answered, input.item_answered_relative").change(function(a){a.stopPropagation()}),$(".form-group:not([data-showif])").each(function(c,d){$(d).find("input.item_shown").val(a),$(d).find("input.item_shown_relative").val(b)}),$(".form-group").each(function(a,b){$(b).change(function(){$(this).addClass("formr_answered"),$(this).find("input.item_answered").val(mysql_datetime()),$(this).find("input.item_answered_relative").val(window.performance.now?performance.now():null)})})}function flatStringifyGeo(a){"use strict";var b={};b.timestamp=a.timestamp;var c={};return c.accuracy=a.coords.accuracy,c.altitude=a.coords.altitude,c.altitudeAccuracy=a.coords.altitudeAccuracy,c.heading=a.coords.heading,c.latitude=a.coords.latitude,c.longitude=a.coords.longitude,c.speed=a.coords.speed,b.coords=c,JSON.stringify(b)}function mysql_datetime(){return(new Date).toISOString().slice(0,19).replace("T"," ")}window.performance=window.performance||{},performance.now=function(){return performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow}(),$(document).ready(function(){var a=new Survey;$("form").on("change",function(){a.update()}),a.update()}),Survey.prototype.update=function(){this.getData(),this.showIf(),this.getProgress()},Survey.prototype.getData=function(){var a=$("form").serializeArray();this.data={};var b=this;$.each(a,function(a,c){if(0!==c.name.indexOf("_")&&"session_id"!=c.name){if(c.name.indexOf("[]",c.name.length-2)>-1&&(c.name=c.name.substring(0,c.name.length-2)),""===c.value&&1===$("input[type=hidden][name='"+c.name+"']").length&&c.value===$("input[type=hidden][name='"+c.name+"']").attr("value"))return!0;b.data[c.name]?b.data[c.name]+=", "+c.value:b.data[c.name]=c.value}})},Survey.prototype.getProgress=function(){var a=this;a.items_answered_on_page=$(".formr_answered").length+0,a.items_visible_on_page=$(".form-group:not(.hidden)").length+0;var b=(a.items_answered_on_page+a.already_answered)/(a.items_visible_on_page+a.items_left+a.already_answered),c=b*(a.percentage_maximum-a.percentage_minimum);return c+=a.percentage_minimum,c>a.percentage_maximum&&(c=a.percentage_maximum),a.$progressbar.css("width",Math.round(c)+"%"),a.$progressbar.text(Math.round(c)+"%"),a.change_events_set=!0,c},Survey.prototype.showIf=function(e){var survey=this,any_change=!1;return $(".form-group[data-showif]").each(function(i,elm){var showif=$(elm).data("showif");try{with(survey.data){var hide=!eval(showif);$(elm).hasClass("hidden")!=hide&&(any_change=!0,$(elm).toggleClass("hidden",hide),$(elm).find("input,select,textarea,button").prop("disabled",hide),$(elm).find(".select2-container").select2("enable",!hide),hide||($(elm).find("input.item_shown").val(mysql_datetime()),$(elm).find("input.item_shown_relative").val(window.performance.now?performance.now():null)))}}catch(e){window.console&&console.log("JS showif failed",showif,e,$(elm).find("input").attr("name"))}finally{return}}),any_change}}();