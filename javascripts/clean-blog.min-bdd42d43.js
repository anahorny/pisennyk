/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(){},submitSuccess:function(t,e){e.preventDefault();var n=$("input#name").val(),i=$("input#email").val(),o=$("input#phone").val(),a=$("textarea#message").val(),s=n;s.indexOf(" ")>=0&&(s=n.split(" ").slice(0,-1).join(" ")),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:n,phone:o,email:i,message:a},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+s+", it seems that my mail server is not responding. Please try again later!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(t){t.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")}),function(t){function e(t){return new RegExp("^"+t+"$")}function n(t,e){for(var n=Array.prototype.slice.call(arguments).splice(2),i=t.split("."),o=i.pop(),a=0;a<i.length;a++)e=e[i[a]];return e[o].apply(this,n)}var i=[],o={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(e){var n=t.extend(!0,{},o);n.options=t.extend(!0,n.options,e);var r=this,l=t.unique(r.map(function(){return t(this).parents("form")[0]}).toArray());return t(l).bind("submit",function(e){var i=t(this),o=0,a=i.find("input,textarea,select").not("[type=submit],[type=image]").filter(n.options.filter);a.trigger("submit.validation").trigger("validationLostFocus.validation"),a.each(function(e,n){var i=t(n),a=i.parents(".form-group").first();a.hasClass("warning")&&(a.removeClass("warning").addClass("error"),o++)}),a.trigger("validationLostFocus.validation"),o?(n.options.preventSubmit&&e.preventDefault(),i.addClass("error"),t.isFunction(n.options.submitError)&&n.options.submitError(i,e,a.jqBootstrapValidation("collectErrors",!0))):(i.removeClass("error"),t.isFunction(n.options.submitSuccess)&&n.options.submitSuccess(i,e))}),this.each(function(){var e=t(this),o=e.parents(".form-group").first(),r=o.find(".help-block").first(),l=e.parents("form").first(),d=[];if(!r.length&&n.options.autoAdd&&n.options.autoAdd.helpBlocks&&(r=t('<div class="help-block" />'),o.find(".controls").append(r),i.push(r[0])),n.options.sniffHtml){var c="";if(void 0!==e.attr("pattern")&&(c="Not in the expected format<!-- data-validation-pattern-message to override -->",e.data("validationPatternMessage")&&(c=e.data("validationPatternMessage")),e.data("validationPatternMessage",c),e.data("validationPatternRegex",e.attr("pattern"))),void 0!==e.attr("max")||void 0!==e.attr("aria-valuemax")){var u=e.attr(void 0!==e.attr("max")?"max":"aria-valuemax");c="Too high: Maximum of '"+u+"'<!-- data-validation-max-message to override -->",e.data("validationMaxMessage")&&(c=e.data("validationMaxMessage")),e.data("validationMaxMessage",c),e.data("validationMaxMax",u)}if(void 0!==e.attr("min")||void 0!==e.attr("aria-valuemin")){var h=e.attr(void 0!==e.attr("min")?"min":"aria-valuemin");c="Too low: Minimum of '"+h+"'<!-- data-validation-min-message to override -->",e.data("validationMinMessage")&&(c=e.data("validationMinMessage")),e.data("validationMinMessage",c),e.data("validationMinMin",h)}void 0!==e.attr("maxlength")&&(c="Too long: Maximum of '"+e.attr("maxlength")+"' characters<!-- data-validation-maxlength-message to override -->",e.data("validationMaxlengthMessage")&&(c=e.data("validationMaxlengthMessage")),e.data("validationMaxlengthMessage",c),e.data("validationMaxlengthMaxlength",e.attr("maxlength"))),void 0!==e.attr("minlength")&&(c="Too short: Minimum of '"+e.attr("minlength")+"' characters<!-- data-validation-minlength-message to override -->",e.data("validationMinlengthMessage")&&(c=e.data("validationMinlengthMessage")),e.data("validationMinlengthMessage",c),e.data("validationMinlengthMinlength",e.attr("minlength"))),(void 0!==e.attr("required")||void 0!==e.attr("aria-required"))&&(c=n.builtInValidators.required.message,e.data("validationRequiredMessage")&&(c=e.data("validationRequiredMessage")),e.data("validationRequiredMessage",c)),void 0!==e.attr("type")&&"number"===e.attr("type").toLowerCase()&&(c=n.builtInValidators.number.message,e.data("validationNumberMessage")&&(c=e.data("validationNumberMessage")),e.data("validationNumberMessage",c)),void 0!==e.attr("type")&&"email"===e.attr("type").toLowerCase()&&(c="Not a valid email address<!-- data-validator-validemail-message to override -->",e.data("validationValidemailMessage")?c=e.data("validationValidemailMessage"):e.data("validationEmailMessage")&&(c=e.data("validationEmailMessage")),e.data("validationValidemailMessage",c)),void 0!==e.attr("minchecked")&&(c="Not enough options checked; Minimum of '"+e.attr("minchecked")+"' required<!-- data-validation-minchecked-message to override -->",e.data("validationMincheckedMessage")&&(c=e.data("validationMincheckedMessage")),e.data("validationMincheckedMessage",c),e.data("validationMincheckedMinchecked",e.attr("minchecked"))),void 0!==e.attr("maxchecked")&&(c="Too many options checked; Maximum of '"+e.attr("maxchecked")+"' required<!-- data-validation-maxchecked-message to override -->",e.data("validationMaxcheckedMessage")&&(c=e.data("validationMaxcheckedMessage")),e.data("validationMaxcheckedMessage",c),e.data("validationMaxcheckedMaxchecked",e.attr("maxchecked")))}void 0!==e.data("validation")&&(d=e.data("validation").split(",")),t.each(e.data(),function(t){var e=t.replace(/([A-Z])/g,",$1").split(",");"validation"===e[0]&&e[1]&&d.push(e[1])});var p=d,f=[];do t.each(d,function(t,e){d[t]=a(e)}),d=t.unique(d),f=[],t.each(p,function(i,o){if(void 0!==e.data("validation"+o+"Shortcut"))t.each(e.data("validation"+o+"Shortcut").split(","),function(t,e){f.push(e)});else if(n.builtInValidators[o.toLowerCase()]){var s=n.builtInValidators[o.toLowerCase()];"shortcut"===s.type.toLowerCase()&&t.each(s.shortcut.split(","),function(t,e){e=a(e),f.push(e),d.push(e)})}}),p=f;while(p.length>0);var g={};t.each(d,function(i,o){var s=e.data("validation"+o+"Message"),r=void 0!==s,l=!1;if(s=s?s:"'"+o+"' validation failed <!-- Add attribute 'data-validation-"+o.toLowerCase()+"-message' to input to change this message -->",t.each(n.validatorTypes,function(n,i){void 0===g[n]&&(g[n]=[]),l||void 0===e.data("validation"+o+a(i.name))||(g[n].push(t.extend(!0,{name:a(i.name),message:s},i.init(e,o))),l=!0)}),!l&&n.builtInValidators[o.toLowerCase()]){var d=t.extend(!0,{},n.builtInValidators[o.toLowerCase()]);r&&(d.message=s);var c=d.type.toLowerCase();"shortcut"===c?l=!0:t.each(n.validatorTypes,function(n,i){void 0===g[n]&&(g[n]=[]),l||c!==n.toLowerCase()||(e.data("validation"+o+a(i.name),d[i.name.toLowerCase()]),g[c].push(t.extend(d,i.init(e,o))),l=!0)})}l||t.error("Cannot find validation info for '"+o+"'")}),r.data("original-contents",r.data("original-contents")?r.data("original-contents"):r.html()),r.data("original-role",r.data("original-role")?r.data("original-role"):r.attr("role")),o.data("original-classes",o.data("original-clases")?o.data("original-classes"):o.attr("class")),e.data("original-aria-invalid",e.data("original-aria-invalid")?e.data("original-aria-invalid"):e.attr("aria-invalid")),e.bind("validation.validation",function(i,o){var a=s(e),r=[];return t.each(g,function(i,s){(a||a.length||o&&o.includeEmpty||n.validatorTypes[i].blockSubmit&&o&&o.submitting)&&t.each(s,function(t,o){n.validatorTypes[i].validate(e,a,o)&&r.push(o.message)})}),r}),e.bind("getValidators.validation",function(){return g}),e.bind("submit.validation",function(){return e.triggerHandler("change.validation",{submitting:!0})}),e.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(i,a){var d=s(e),c=[];o.find("input,textarea,select").each(function(n,i){var o=c.length;if(t.each(t(i).triggerHandler("validation.validation",a),function(t,e){c.push(e)}),c.length>o)t(i).attr("aria-invalid","true");else{var s=e.data("original-aria-invalid");t(i).attr("aria-invalid",void 0!==s?s:!1)}}),l.find("input,select,textarea").not(e).not('[name="'+e.attr("name")+'"]').trigger("validationLostFocus.validation"),c=t.unique(c.sort()),c.length?(o.removeClass("success error").addClass("warning"),r.html(n.options.semanticallyStrict&&1===c.length?c[0]+(n.options.prependExistingHelpBlock?r.data("original-contents"):""):'<ul role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(n.options.prependExistingHelpBlock?r.data("original-contents"):""))):(o.removeClass("warning error success"),d.length>0&&o.addClass("success"),r.html(r.data("original-contents"))),"blur"===i.type&&o.removeClass("success")}),e.bind("validationLostFocus.validation",function(){o.removeClass("success")})})},destroy:function(){return this.each(function(){var e=t(this),n=e.parents(".form-group").first(),o=n.find(".help-block").first();e.unbind(".validation"),o.html(o.data("original-contents")),n.attr("class",n.data("original-classes")),e.attr("aria-invalid",e.data("original-aria-invalid")),o.attr("role",e.data("original-role")),i.indexOf(o[0])>-1&&o.remove()})},collectErrors:function(){var e={};return this.each(function(n,i){var o=t(i),a=o.attr("name"),s=o.triggerHandler("validation.validation",{includeEmpty:!0});e[a]=t.extend(!0,s,e[a])}),t.each(e,function(t,n){0===n.length&&delete e[t]}),e},hasErrors:function(){var e=[];return this.each(function(n,i){e=e.concat(t(i).triggerHandler("getValidators.validation")?t(i).triggerHandler("validation.validation",{submitting:!0}):[])}),e.length>0},override:function(e){o=t.extend(!0,o,e)}},validatorTypes:{callback:{name:"callback",init:function(t,e){return{validatorName:e,callback:t.data("validation"+e+"Callback"),lastValue:t.val(),lastValid:!0,lastFinished:!0}},validate:function(t,e,i){if(i.lastValue===e&&i.lastFinished)return!i.lastValid;if(i.lastFinished===!0){i.lastValue=e,i.lastValid=!0,i.lastFinished=!1;var o=i,a=t;n(i.callback,window,t,e,function(t){o.lastValue===t.value&&(o.lastValid=t.valid,t.message&&(o.message=t.message),o.lastFinished=!0,a.data("validation"+o.validatorName+"Message",o.message),setTimeout(function(){a.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(t,e){return{validatorName:e,url:t.data("validation"+e+"Ajax"),lastValue:t.val(),lastValid:!0,lastFinished:!0}},validate:function(e,n,i){return""+i.lastValue==""+n&&i.lastFinished===!0?i.lastValid===!1:(i.lastFinished===!0&&(i.lastValue=n,i.lastValid=!0,i.lastFinished=!1,t.ajax({url:i.url,data:"value="+n+"&field="+e.attr("name"),dataType:"json",success:function(t){""+i.lastValue==""+t.value&&(i.lastValid=!!t.valid,t.message&&(i.message=t.message),i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1))},failure:function(){i.lastValid=!0,i.message="ajax call failed",i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(t,n){return{regex:e(t.data("validation"+n+"Regex"))}},validate:function(t,e,n){return!n.regex.test(e)&&!n.negative||n.regex.test(e)&&n.negative}},required:{name:"required",init:function(){return{}},validate:function(t,e,n){return!(0!==e.length||n.negative)||!!(e.length>0&&n.negative)},blockSubmit:!0},match:{name:"match",init:function(t,e){var n=t.parents("form").first().find('[name="'+t.data("validation"+e+"Match")+'"]').first();return n.bind("validation.validation",function(){t.trigger("change.validation",{submitting:!0})}),{element:n}},validate:function(t,e,n){return e!==n.element.val()&&!n.negative||e===n.element.val()&&n.negative},blockSubmit:!0},max:{name:"max",init:function(t,e){return{max:t.data("validation"+e+"Max")}},validate:function(t,e,n){return parseFloat(e,10)>parseFloat(n.max,10)&&!n.negative||parseFloat(e,10)<=parseFloat(n.max,10)&&n.negative}},min:{name:"min",init:function(t,e){return{min:t.data("validation"+e+"Min")}},validate:function(t,e,n){return parseFloat(e)<parseFloat(n.min)&&!n.negative||parseFloat(e)>=parseFloat(n.min)&&n.negative}},maxlength:{name:"maxlength",init:function(t,e){return{maxlength:t.data("validation"+e+"Maxlength")}},validate:function(t,e,n){return e.length>n.maxlength&&!n.negative||e.length<=n.maxlength&&n.negative}},minlength:{name:"minlength",init:function(t,e){return{minlength:t.data("validation"+e+"Minlength")}},validate:function(t,e,n){return e.length<n.minlength&&!n.negative||e.length>=n.minlength&&n.negative}},maxchecked:{name:"maxchecked",init:function(t,e){var n=t.parents("form").first().find('[name="'+t.attr("name")+'"]');return n.bind("click.validation",function(){t.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:t.data("validation"+e+"Maxchecked"),elements:n}},validate:function(t,e,n){return n.elements.filter(":checked").length>n.maxchecked&&!n.negative||n.elements.filter(":checked").length<=n.maxchecked&&n.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(t,e){var n=t.parents("form").first().find('[name="'+t.attr("name")+'"]');return n.bind("click.validation",function(){t.trigger("change.validation",{includeEmpty:!0})}),{minchecked:t.data("validation"+e+"Minchecked"),elements:n}},validate:function(t,e,n){return n.elements.filter(":checked").length<n.minchecked&&!n.negative||n.elements.filter(":checked").length>=n.minchecked&&n.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",message:"Not a valid email address<!-- data-validator-validemail-message to override -->"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password<!-- data-validator-paswordagain-message to override -->"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number<!-- data-validator-number-message to override -->"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed<!-- data-validator-integer-message to override -->"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number<!-- data-validator-positivenumber-message to override -->"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number<!-- data-validator-negativenumber-message to override -->"},required:{name:"Required",type:"required",message:"This is required<!-- data-validator-required-message to override -->"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option<!-- data-validation-checkone-message to override -->"}}},a=function(t){return t.toLowerCase().replace(/(^|\s)([a-z])/g,function(t,e,n){return e+n.toUpperCase()})},s=function(e){var n=e.val(),i=e.attr("type");return"checkbox"===i&&(n=e.is(":checked")?n:""),"radio"===i&&(n=t('input[name="'+e.attr("name")+'"]:checked').length>0?n:""),n};t.fn.jqBootstrapValidation=function(e){return o.methods[e]?o.methods[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(t.error("Method "+e+" does not exist on jQuery.jqBootstrapValidation"),null):o.methods.init.apply(this,arguments)},t.jqBootstrapValidation=function(){t(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery),$(function(){$("body").on("input propertychange",".floating-label-form-group",function(t){$(this).toggleClass("floating-label-form-group-with-value",!!$(t.target).val())}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus")})}),jQuery(document).ready(function(t){var e=1170;if(t(window).width()>e){var n=t(".navbar-custom").height();t(window).on("scroll",{previousTop:0},function(){var e=t(window).scrollTop();e<this.previousTop?e>0&&t(".navbar-custom").hasClass("is-fixed")?t(".navbar-custom").addClass("is-visible"):t(".navbar-custom").removeClass("is-visible is-fixed"):(t(".navbar-custom").removeClass("is-visible"),e>n&&!t(".navbar-custom").hasClass("is-fixed")&&t(".navbar-custom").addClass("is-fixed")),this.previousTop=e})}});