/*
 * jQuery Block Link
 * http://jsnt.blog.fc2.com/
 * 
 * Copyright (c) 2011 yuqq (yuqq.js@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2011-02-11
 */
(function(b){b.fn.blocklink=function(m){var c=b.extend({className:"hover",block:1,bgColor:null},m);return this.each(function(){for(var g=b(this),j=null,k=null,d=g.parent(),l=1;l<c.block;l++)d=d.parent();d.offset();d.mouseover(function(){var a=b(this).addClass(c.className);if(c.bgColor){k=a.css("background-color");a.css("background-color",c.bgColor)}}).mouseout(function(){var a=b(this).removeClass(c.className);c.bgColor&&a.css("background-color",k)}).css("cursor","pointer").mousedown(function(){j=
this;return false}).mouseup(function(a){if(!(!a||j!=this||a.button==2)){var h=true;b(this).find("a").each(h&&function(){var i=b(this),e=i.offset();if(e.left<=a.pageX&&e.left+i.outerWidth()>=a.pageX&&e.top<=a.pageY&&e.top+i.outerHeight()>=a.pageY)h=false});if(h){var f=g.attr("target");f=b.browser.msie&&a.button==4||!b.browser.msie&&a.button==1||b.browser.msie&&b.browser.version>=9&&a.button==1?"_blank":f?f:"_self";window.open(g.attr("href"),f);window.focus();return false}}})})}})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright (c) 2008 George McGinley Smith
 * All rights reserved.
 */
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});

/**
 * jQuery VGrid v0.1.6 - variable grid layout plugin
 *
 * Terms of Use - jQuery VGrid
 * under the MIT (http://www.opensource.org/licenses/mit-license.php) License.
 *
 * Copyright 2009-2010 xlune.com All rights reserved.
 * (http://blog.xlune.com/2009/09/jqueryvgrid.html)
 */
(function(h){function p(a){var b=a.data("_vgchild"),e=[[0,a.width(),0]],i=0,c,m,n;b.each(function(){c=h(this);var f=c.width(),d=c.height();f+=Number(c.css("margin-left").replace("px",""))+Number(c.css("padding-left").replace("px",""))+Number(c.get(0).style.borderLeftWidth.replace("px",""))+Number(c.css("margin-right").replace("px",""))+Number(c.css("padding-right").replace("px",""))+Number(c.get(0).style.borderRightWidth.replace("px",""));d+=Number(c.css("margin-top").replace("px",""))+Number(c.css("padding-top").replace("px",
""))+Number(c.get(0).style.borderTopWidth.replace("px",""))+Number(c.css("margin-bottom").replace("px",""))+Number(c.css("padding-bottom").replace("px",""))+Number(c.get(0).style.borderBottomWidth.replace("px",""));m=[f,d];a:{f=m[0];d=e.concat().sort(t);for(var g=d[d.length-1][2],j=0,k=d.length;j<k;j++){if(d[j][2]>=g)break;if(d[j][1]-d[j][0]>=f){n=[d[j][0],d[j][2]];break a}}n=[0,g]}d=n;f=e.concat().sort(t);d=[d[0],d[0]+m[0],d[1]+m[1]];g=0;for(j=f.length;g<j;g++)if(d[0]<=f[g][0]&&f[g][1]<=d[1])delete f[g];
else{k=f;var q=g,l=f[g],o=d;if(l[0]>=o[0]&&l[0]<o[1]||l[1]>=o[0]&&l[1]<o[1])if(l[0]>=o[0]&&l[0]<o[1])l[0]=o[1];else l[1]=o[0];k[q]=l}f=f.concat([d]).sort(u);d=[];g=0;for(j=f.length;g<j;g++)if(f[g])if(d.length>0&&d[d.length-1][1]==f[g][0]&&d[d.length-1][2]==f[g][2])d[d.length-1][1]=f[g][1];else d.push(f[g]);e=d;i=Math.max(i,n[1]+m[1]);c.data("_vgleft",n[0]);c.data("_vgtop",n[1])});a.data("_vgwrapheight",i);v(a)}function t(a,b){if(!a||!b)return 0;return a[2]==b[2]&&a[0]>b[0]||a[2]>b[2]?1:-1}function u(a,
b){if(!a||!b)return 0;return a[0]>b[0]?1:-1}function v(a){var b=a.data("_vgchild").length*(a.data("_vgopt").delay||0)+a.data("_vgopt").time||500;a.stop();if(a.height()<a.data("_vgwrapheight"))h.browser.msie?a.height(a.data("_vgwrapheight")):a.animate({height:a.data("_vgwrapheight")+"px"},a.data("_vgopt").time||500,"easeOutQuart");else{clearTimeout(a.data("_vgwraptimeout"));a.data("_vgwraptimeout",setTimeout(function(){h.browser.msie?a.height(a.data("_vgwrapheight")):a.animate({height:a.data("_vgwrapheight")+
"px"},a.data("_vgopt").time||500,"easeOutQuart")},b))}}function w(a){var b;a.each(function(){b=h(this);b.css("left",~~b.data("_vgleft")+"px");b.css("top",~~b.data("_vgtop")+"px")})}function r(a,b,e,i){var c=h(a).parent(),m=false,n=a.length,f,d,g;for(f=0;f<n;f++){d=h(a[f]);g=d.position();if(g.left!=d.data("_vgleft")&&g.top!=d.data("_vgtop"))m=true}if(m){typeof c.data("_vgopt").onStart=="function"&&c.data("_vgopt").onStart();a.each(function(j){var k=h(this),q={duration:e,easing:b};if(a.size()-1==j)q.complete=
c.data("_vgopt").onFinish||null;clearTimeout(k.data("_vgtimeout"));k.data("_vgtimeout",setTimeout(function(){k.animate({left:k.data("_vgleft")+"px",top:k.data("_vgtop")+"px"},q)},j*i))})}}function s(a){clearTimeout(a.data("_vgtimeout"));p(a);a.data("_vgtimeout",setTimeout(function(){r(a.data("_vgchild"),a.data("_vgopt").easeing||"linear",a.data("_vgopt").time||500,a.data("_vgopt").delay||0)},500))}function x(a,b){var e=h("<span />").text(" ").attr("id","_vgridspan").hide().appendTo("body");e.data("size",
e.css("font-size"));e.data("timer",setInterval(function(){if(e.css("font-size")!=e.data("size")){e.data("size",e.css("font-size"));b(a)}},1E3))}function y(a,b){a.bind("vgrid-added",function(){a.find("img").bind("load",function(){b(a)})});a.trigger("vgrid-added");var e=a.append,i=a.prepend;a.append=function(){e.apply(a,arguments);a.trigger("vgrid-added")};a.prepend=function(){i.apply(a,arguments);a.trigger("vgrid-added")}}h.fn.extend({vgrid:function(a){var b=h(this);a=a||{};b.data("_vgopt",a);b.data("_vgchild",
b.find("> *"));b.data("_vgdefchild",b.data("_vgchild"));b.css({position:"relative",width:"auto"});b.data("_vgchild").css("position","absolute");p(b);w(b.data("_vgchild"));if(b.data("_vgopt").fadeIn){var e=typeof b.data("_vgopt").fadeIn=="object"?b.data("_vgopt").fadeIn:{time:b.data("_vgopt").fadeIn};b.data("_vgchild").each(function(i){var c=h(this);c.css("display","none");setTimeout(function(){c.fadeIn(e.time||250)},i*(e.delay||0))})}h(window).resize(function(){s(b)});a.useLoadImageEvent&&y(b,s);
a.useFontSizeListener&&x(b,s);return b},vgrefresh:function(a,b,e,i){var c=h(this);if(c.data("_vgchild")){c.data("_vgchild",c.find("> *"));c.data("_vgchild").css("position","absolute");p(c);b=typeof b=="number"?b:c.data("_vgopt").time||500;e=typeof e=="number"?e:c.data("_vgopt").delay||0;r(c.data("_vgchild"),a||c.data("_vgopt").easeing||"linear",b,e);typeof i=="function"&&setTimeout(i,c.data("_vgchild").length*e+b)}return c},vgsort:function(a,b,e,i){var c=h(this);if(c.data("_vgchild")){c.data("_vgchild",
c.data("_vgchild").sort(a));c.data("_vgchild").each(function(){h(this).appendTo(c)});p(c);r(c.data("_vgchild"),b||c.data("_vgopt").easeing||"linear",typeof e=="number"?e:c.data("_vgopt").time||500,typeof i=="number"?i:c.data("_vgopt").delay||0)}return c}})})(jQuery);

/*
 * jQuery Easing Scroll - http://moto-mono.net/easingScroll/
 * Copyright 2009 (c) nori (norimania@gmail.com)
 * http://moto-mono.net
 * Licensed Under the MIT.
 *
 * $Date: 2009-05-13
*/
jQuery.fn.easingScroll=function(b){var d=$.extend({easing:"swing",duration:500},b),c=$.support.boxModel?navigator.appName.match(/Opera/)?"html":"html,body":"body";if(isNaN(d.duration)==null){if(d.duration.match(/fast/)){d.duration=210;}else{if(d.duration.match(/normal/)){d.duration=410;}else{if(d.duration.match(/slow/)){d.duration=610;}}}}$(this).each(function(){if(this.hash&&$(this.hash).length>0&&this.href.match(new RegExp(location.href.split("#")[0]))){$(this).click(function(e){$(c).queue([]).stop();var a=this.hash;var f=$(a).offset();$(c).animate({scrollTop:f.top,scrollLeft:f.left},{duration:d.duration,easing:d.easing});e.preventDefault();e.stopPropagation();});}});$(document).click(function(a){$(c).queue([]).stop();});};

/*
 * jQuery Boost
 * http://jsnt.blog.fc2.com/
 * 
 * Copyright (c) 2011 yuqq (yuqq.js@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2011-02-11
 */
(function(e){e.boost=function(j){var c=e.extend({fade:true,fadeDuration:300,interval:20,source:"s",target:"img,iframe",loaded:null,complete:null},j),b={elements:[],index:0,supported:!e.browser.msie||e.browser.version>=6,timer:null},k=function(a){for(var d=0;a;){d+=a.offsetTop;a=a.offsetParent}return d},h=function(a,d){for(var i=b.elements[Math.floor((a+d)/2)].y,f=a,g=d;;){for(;b.elements[f].y<i;)++f;for(;i<b.elements[g].y;)--g;if(f>=g)break;n=b.elements[f];b.elements[f++]=b.elements[g];b.elements[g--]=
n}a<f-1&&h(a,f-1);g+1<d&&h(g+1,d)},l=function(){var a=b.elements[b.index],d=a.target.clone(true).removeAttr(c.source).attr("src",a.src).css("visibility","visible");a.target.before(d).remove();c.fade&&d.fadeTo(c.fadeDuration,1);c.loaded&&c.loaded.apply(d.get(0),arguments);if(++b.index>=b.elements.length){clearInterval(b.timer);c.complete&&c.complete.apply(this,arguments)}};b.supported&&e(window).bind("load",function(){e(c.target).each(function(){var a=e(this);if(a.attr(c.source)){b.elements.push({target:a,
src:a.attr(c.source),y:k(this)});c.fade&&a.fadeTo(0,0)}});h(0,b.elements.length-1);b.timer=setInterval(l,c.interval)})}})(jQuery);

/**
 * jQuery custom event "outerClick".
 * @author David Brockman Smoliansky http://littleroom.se/
 * @license GNU Lesser General Public License: http://creativecommons.org/licenses/LGPL/2.1/
 * @version 1.1
 * 2009/02/27
 */
(function(c,b,e){function h(a){for(var f=0,i=b.length,g=a.target,d;f<i;f++){d=b[f];if(d!==g&&!(d.contains?d.contains(g):d.compareDocumentPosition?d.compareDocumentPosition(g)&16:1))c.event.trigger(e,a,d)}}c.event.special[e]={setup:function(){var a=b.length;a||c.event.add(document,"click",h);if(c.inArray(this,b)<0)b[a]=this},teardown:function(){var a=c.inArray(this,b);if(a>=0){b.splice(a,1);b.length||c.event.remove(document,"click",h)}}};c.fn[e]=function(a){return a?this.bind(e,a):this.trigger(e)}})(jQuery,
[],"outerClick");

/*
 * jQuery SelectImg
 * http://jsnt.blog.fc2.com/
 * 
 * Copyright (c) 2011 yuqq (yuqq.js@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2011-02-12
 */
(function(b){b.fn.imageselector=function(o){var c=b.extend({name:"comment[title]",prefix:"http://blog-imgs-46.fc2.com/o/l/e/olelab/icon-",className:"selectimg",ext:".gif",nums:10,label:"Choose a image",digitB:true},o),a={index:1,e:null,ol:null,span:null,div:null,input:null,open:false},k=function(f){for(var d=0;f;){f=Math.floor(f/10);++d}return d},h=function(){if(!a.open){a.span.show();a.ol.show();a.open=true;a.e.unbind("click",h).bind("click",i)}},i=function(){if(a.open){a.span.hide();a.ol.hide();
a.open=false;a.e.unbind("click",i).bind("click",h)}};return this.each(function(){a.e=b(this).addClass(c.className);a.div=b("<div/>").text(c.label).appendTo(a.e);a.input=b('<input type="hidden" name="'+c.name+'" value="1" />').appendTo(a.e);a.span=b("<span/>").appendTo(a.e).hide();a.ol=b("<ol/>").appendTo(a.e).hide();if(c.digitB)var f=k(c.nums);for(var d=1;d<=c.nums;d++){var g=d;if(c.digitB){var j=k(d),l=0;for(j=f-j;l<j;l++)g="0"+g}b('<li no="'+g+'"><img src="'+c.prefix+g+c.ext+'" alt="No.'+g+'" /></li>').appendTo(a.ol).click(function(){var e=
b(this),m=e.attr("no");e=e.offset();var n=a.e.offset();e.left-=n.left;e.top-=n.top;a.input.val(m);a.span.css(e);a.div.text("No."+m+" is selected")})}a.e.bind("click",h).bind("outerClick",i)})}})(jQuery);

/**
 * jQuery ListPager
 * http://jsnt.blog.fc2.com/
 * 
 * Copyright (c) 2011 yuqq (yuqq.js@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2011-02-12
 */
(function(c){c.fn.listPager=function(i){var j={per:5,index:0,className:"listPager",position:"both",pager:[],scroller:c.support.boxModel?navigator.appName.match(/Opera/)?"html":"html,body":"body"},a=c.extend(j,i),h=function(b,d){a.index=d;b.children("li").hide();d?b.children("li:lt("+(d+1)*a.per+")").filter(":gt("+(d*a.per-1)+")").show():b.children("li:first, li:gt(0)").filter(":lt("+a.per+")").show();for(var e=0;e<a.pager.length;e++){a.pager[e].children("li.active").removeClass("active");a.pager[e].children("li:eq("+
d+")").addClass("active")}c(a.scroller).scrollTop(b.offset().top)},k=function(b){var d=function(){var e=c('<ol class="'+a.className+'"/>'),g=b.children("li").length,f=1;for(g=Math.ceil(g/a.per);f<=g;f++)c("<li"+(f!=a.index+1?"":' class="active"')+' no="'+f+'">'+f+"<\/li>").appendTo(e).click(function(){h(b,c(this).attr("no")-1)}).mouseover(function(){c(this).addClass("hover")}).mouseout(function(){c(this).removeClass("hover")});return e};switch(a.position){case "top":a.pager.push(d().insertBefore(b));
break;case "bottom":a.pager.push(d().addClass(a.className+"Bottom").insertAfter(b));break;case "both":a.pager.push(d().insertBefore(b));a.pager.push(a.pager[0].clone(true).addClass(a.className+"Bottom").insertAfter(b))}};return this.each(function(){var b=c(this);b.children("li").hide();h(b,a.index);k(b)})}})(jQuery);

/*
 * grid_general.js
 * http://olelab.blog77.fc2.com/
 * 
 * Copyright (c) 2011 yuqq (yuqq.js@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: 2011-03-05
*/
var myself=$.browser.msie?document.scripts[document.scripts.length-1]:function(k){if(k.nodeName.toLowerCase()=="script")return k;return arguments.callee(k.lastChild)}(document);if(!config)var config={};
(function(k){var e={grid:null,adjPosTgt:null,vg:null,ecWidth:200,widgetColor:20,reactionPer:5,maxImageList:{}};(function(){var a=myself.src.split("?")[1];if(a){a=a.split("&");for(var f=0;f<a.length;f++){var b=a[f].split("=");e[b[0]]=b[1]}}})();var s=function(){$("div.textBody").each(function(){function a(r){if(k.noEC)for(var m=0;m<k.noEC.length;m++){if(k.noEC[m]==r.src)return true}else return false}var f=$(this),b=f.find("xmp.teb"),d=b.text(),i=d.replace(/<script.*>.*<\/script>/g,"").match(/(<img [^>]+>)/gi),
h=d.match(/<!--\s*more\s*--\>/g);if(h&&h.length)var j=d.substr(0,d.indexOf(h[0])),n=j.replace(/<[^>]+>/ig,"");b.remove();b=j?n?"<p>"+n+"...</p>":"":"<p>"+f.text().substr(0,100)+"...</p>";if(i&&i.length){d=i[0];if(d.match(/class="emoji"/i)||a(d))d=null;h=1;for(j=i.length;h<j;h++)if(i[h].match(/class=["']?ec["']?/)&&!a(i[h])){d=i[h];break}else if(!d&&!i[h].match(/class="emoji"/i)&&!a(i[h]))d=i[h];if(d){d='<p class="imgwrap"><a href="'+f.parent().find("> h2 a").attr("href")+'">'+d.replace(/align=["']?(left|center|right)["']?/i,
"").replace("src","s")+"</a></p>";b=d+b}}f.html(b)})},l=function(a,f){if(a.complete){if(a.width>f||e.maxImageList[a.src]){e.maxImageList[a.src]||(e.maxImageList[a.src]={width:a.width,height:a.height});var b=Math.round(a.height*(f/a.width));if(b<e.maxImageList[a.src].height){a.height=b;a.width=f}else{a.height=e.maxImageList[a.src].height;a.width=e.maxImageList[a.src].width}}}else $(a).bind("load",function(){if(this.width>f||e.maxImageList[this.src]){e.maxImageList[this.src]||(e.maxImageList[this.src]=
{width:this.width,height:this.height});var d=Math.round(this.height*(f/this.width));if(d<e.maxImageList[this.src].height){this.height=d;this.width=f}else{this.height=e.maxImageList[this.src].height;this.width=e.maxImageList[this.src].width}}})},o=function(){var a=$(window).width(),f=Math.floor(($.browser.msie&&$.browser.version<9?a:a-10)/250);a=Math.floor((a-(f*250-5))/2);if(e.mode=="permanent")if(f<4){var b=f>=2?"middle_layout":"layout";e.grid.find(".large_layout").each(function(){$(this).removeClass("large_layout").addClass(b)});
f==1&&e.grid.find(".middle_layout").each(function(){$(this).removeClass("large_layout").addClass(b)})}else{var d=e.grid.find('div > div[id^="entry"]').parent();if(d.hasClass("middle_layout"))d.removeClass("middle_layout").addClass("large_layout");else d.hasClass("layout")&&d.removeClass("layout").addClass("large_layout")}e.adjPosTgt.grid.animate({width:f*250,left:a},0);e.adjPosTgt.pager.animate({width:f*250-10,left:a},1);e.adjPosTgt.footer.animate({width:f*250-10,left:a},1);e.grid.vgrefresh(null,
null,null,null);if(e.mode=="permanent"){f=$("div.textBody");var i=f.parent().children("h2").outerWidth();f.find("img, object, embed").each(function(){l(this,i)})}},t=function(){$("div.widget > dl > dt").each(function(){var a=$(this);a.addClass("pn"+a.attr("no")%e.widgetColor)})},p={config:{startline:100,button:"#return"},isvisible:false,toggleControle:function(){var a=$(window).scrollTop()>=this.config.startline?true:false;if(a&&!this.isvisible){$(this.config.button).fadeIn("fast");$(this.config.button).css("display",
"block");this.isvisible=true}else if(!a&&this.isvisible){$(this.config.button).fadeOut("fast");this.isvisible=false}},init:function(){if($.browser.msie&&$.browser.version<7){var a=$(window);$(this.config.button).css({position:"absolute",top:Math.round(a.height()/2+a.scrollTop())+"px"})}var f=p;$(window).bind("scroll resize",function(){$.browser.msie&&$.browser.version<7&&$(f.config.button).css("top",Math.round($(this).height()/2+$(this).scrollTop())+"px");f.toggleControle()});$(f.config.button+" a").click(function(){var b=
$.support.boxModel?navigator.appName.match(/Opera/)?"html":"html,body":"body";$(b).animate({scrollTop:0},{easing:"swing",duration:500});return false})}},u={init:function(){$("div.widget dd.category").each(function(){var a="<ul>",f=g=false;$(this).find("div > div").each(function(){var b=$(this).find("a");if($(this).text().replace(/^\s+|\s+$/g,"").length-b.text().replace(/^\s+|\s+$/g,"").length>2){c=$(this).text().replace(/^\s+|\s+$/g,"").charAt(0);if(c=="\u2523"){if(!f){a+="<ul>";f=true}a+='<li><a href="'+
b.attr("href")+'">'+b.text()+"</a></li>"}else{f||(a+="<ul>");a+='<li><a href="'+b.attr("href")+'">'+b.text()+"</a></li>";a+="</ul></li>";g=f=false}}else{if(g)a+="</li>";a+='<li><a href="'+b.attr("href")+'">'+b.text()+"</a>";g=true}});if(g)a+="</li>";a+="</ul>";$(this).html(a)})}},q={elm:"#pager",label:{newer:"Newer",older:"Older"},current:0,range:10,init:function(a,f){var b=q;if(a){var d=/(page-|blog-category-\d+-|blog-date-\d+-|&page=)(\d+)/;d=document.URL.match(d);b.current=Number(d[2]);var i="/"+
d[1];if(a.match(/page-/))document.title=document.title+" Page "+b.current}else{d=/(page-|blog-category-\d+|blog-date-\d+)/;i=/(\/\?.*)/;d=document.URL.match(d);if(d==null){d=document.URL.match(i);i=d==null?"page-":d[1]+"&page="}else{d[1].match(/page-/)||(d[1]+="-");i=d[1]}}d="";if(a)d+='<li class="newer"><a href="'+i+(b.current-1)+'.html">'+b.label.newer+"</a></li>";var h=b.current-Math.floor(b.range/2),j=Math.ceil(b.range/2);if(h<0){j-=h;h=b.current}else{j=f-(b.current+Math.ceil(b.range/2));h=Math.floor(b.range/
2);if(j<0){h-=j;j=f-b.current}else h=Math.floor(b.range/2)}for(h=b.current-h;h<=b.current;h++)h<0||(d+=h!=b.current?'<li><a href="'+i+h+'.html">'+(h+1)+"</a></li>":'<li class="active">'+(h+1)+"</li>");for(h=b.current+1;h<=b.current+j;h++){if(h>=f)break;d+='<li><a href="'+i+h+'.html">'+(h+1)+"</a></li>"}if(f-1!=b.current)d+='<li class="older"><a href="'+i+(b.current+1)+'.html">'+b.label.older+"</a></li>";$(b.elm).html(d).parent().css("position","relative")}};$(function(){e.grid=$("#grid");e.adjPosTgt=
{grid:e.grid,pager:$("#pager").parent(),footer:$("#footer")};var a=$("iframe"),f=0;a.each(function(){if(this.complete)++f>=a.length&&e.grid.vgrefresh(null,null,null,null);else $(this).bind("load error",function(){++f>=a.length&&e.grid.vgrefresh(null,null,null,null)})});var b=$("div.textBody");if(e.mode=="permanent"){b.find("img").each(function(){this.complete?l(this,b.width()):$(this).load(function(){l(this,b.width())})});b.find("object, embed").each(function(){l(this,b.width())});$(window).bind("resize",
function(){var d=b.parent().children("h2").outerWidth();b.find("img, object, embed").each(function(){l(this,d)})});b.find("a[href*='#']").easingScroll();$("#selectIcon").imageselector();$("#comment ol.comments p.icon img").each(function(){var d=$(this).attr("title").match(/(^\d{2}$)/);if(!d){d=Math.floor(Math.random()*10)+1;if(d!=10)d="0"+d;$(this).attr("src","http://blog-imgs-46.fc2.com/o/l/e/olelab/icon-"+d+".gif")}})}else b.parent().each(function(){var d=$(this);d.find("> h2 a").blocklink({block:2,
className:"blocklink",bgColor:d.find("> div.no span").css("background-color")})});e.total_pages&&q.init(e.prevpage,e.total_pages);t();u.init();p.init()});$(window).bind("load",function(){e.grid.vgrid({easeing:"easeOutQuint",time:400,delay:40});e.mode!="permanent"&&s();e.grid.find(".layout,.middle_layout,.large_layout").each(function(){$(this).bind("resize",function(){e.grid.vgrefresh(null,null,null,null)})});$(document).bind("DOMNodeInserted",function(b){switch(b.target.tagName.toLowerCase()){case "img":case "iframe":b.target.complete?
e.grid.vgrid({easeing:"easeOutQuint",time:400,delay:40}):$(b.target).bind("load",function(){e.grid.vgrid({easeing:"easeOutQuint",time:400,delay:40})});break;default:$(b.target).find("img,iframe").each(function(){this.complete?e.grid.vgrid({easeing:"easeOutQuint",time:400,delay:40}):$(this).bind("load",function(){e.grid.vgrid({easeing:"easeOutQuint",time:400,delay:40})})})}});o();$(window).bind("resize",o);if(e.cm&&e.cm>e.reactionPer){var a=document.URL.match(/#comment(\d+)/i);if(a&&a.length>0){var f=
$("#comment ol.comments");f.children("li:lt(2)");a=$("#cm"+a[1]);$("#comment ol.comments").listPager({index:Math.ceil(f.children("li").index(a)/e.reactionPer)});$($.support.boxModel?navigator.appName.match(/Opera/)?"html":"html,body":"body").animate({scrollTop:a.offset().top},500,"swing")}else $("#comment ol.comments").listPager();$("#comment ol.listPager").bind("click",function(){e.grid.vgrefresh(null,null,null,null)})}else if((a=document.URL.match(/#comment(\d+)/i))&&a.length>0)$($.support.boxModel?
navigator.appName.match(/Opera/)?"html":"html,body":"body").animate({scrollTop:$("#comment"+a[1]).offset().top},500,"swing");if(e.tb&&e.tb>e.reactionPer){if((a=document.URL.match(/#tb(\d+)/i))&&a.length>0){f=$("#tb ol.tbs");f.children("li:lt(2)");a=$("#tb"+a[1]);$("#tbt ol.tbs").listPager({index:Math.ceil(f.children("li").index(a)/e.reactionPer)});$($.support.boxModel?navigator.appName.match(/Opera/)?"html":"html,body":"body").animate({scrollTop:a.offset().top},500,"swing")}else $("#tb ol.tbs").listPager();
$("#tb ol.listPager").bind("click",function(){e.grid.vgrefresh(null,null,null,null)})}else if((a=document.URL.match(/#tb(\d+)/i))&&a.length>0)if(!$.browser.msie||$.browser.version>6)$($.support.boxModel?navigator.appName.match(/Opera/)?"html":"html,body":"body").animate({scrollTop:$("#tb"+a[1]).offset().top},500,"swing");e.grid.vgrefresh(null,null,null,null)});e.mode!="permanent"&&$.boost({target:"div.textBody img",interval:200,fadeDuration:500,loaded:function(){l(this,e.ecWidth);$(this).parent().parent().css("background-image",
"none")},complete:function(){e.grid.vgrefresh(null,null,null,null)}})})(config);
