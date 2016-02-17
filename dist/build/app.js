/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict
    
    //fade initial page show
    $('html').animate({
        opacity: 1
    }, 1300);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        /*var $anchor = $(this);*/
        /*var href = $anchor.attr('href');*/
        var href = this.hash;
        $('html, body').stop().animate({
            scrollTop: ($(href).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        /*window.location.hash = href;*/
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
            1.2, {
                minFontSize: '35px',
                maxFontSize: '65px'
            }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    

})(jQuery); // End of use strict

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5lYXNpbmcubWluLmpzIiwianF1ZXJ5LmZpdHRleHQuanMiLCJ3b3cubWluLmpzIiwiY3JlYXRpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjMgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXG4gKlxuICogVXNlcyB0aGUgYnVpbHQgaW4gZWFzaW5nIGNhcGFiaWxpdGllcyBhZGRlZCBJbiBqUXVlcnkgMS4xXG4gKiB0byBvZmZlciBtdWx0aXBsZSBlYXNpbmcgb3B0aW9uc1xuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0IMOD4oCaw4LCqSAyMDAxIFJvYmVydCBQZW5uZXJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVEVSTVMgT0YgVVNFIC0galF1ZXJ5IEVhc2luZ1xuICogXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxuICogXG4gKiBDb3B5cmlnaHQgw4PigJrDgsKpIDIwMDggR2VvcmdlIE1jR2lubGV5IFNtaXRoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBcbiAqIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IFxuICogb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgXG4gKiBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiBcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIFxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqIFxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxuICogIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgXG4gKiBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuIFxuICpcbiovXG5qUXVlcnkuZWFzaW5nLmpzd2luZz1qUXVlcnkuZWFzaW5nLnN3aW5nO2pRdWVyeS5leHRlbmQoalF1ZXJ5LmVhc2luZyx7ZGVmOlwiZWFzZU91dFF1YWRcIixzd2luZzpmdW5jdGlvbihlLGYsYSxoLGcpe3JldHVybiBqUXVlcnkuZWFzaW5nW2pRdWVyeS5lYXNpbmcuZGVmXShlLGYsYSxoLGcpfSxlYXNlSW5RdWFkOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuIGgqKGYvPWcpKmYrYX0sZWFzZU91dFF1YWQ6ZnVuY3Rpb24oZSxmLGEsaCxnKXtyZXR1cm4gLWgqKGYvPWcpKihmLTIpK2F9LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24oZSxmLGEsaCxnKXtpZigoZi89Zy8yKTwxKXtyZXR1cm4gaC8yKmYqZithfXJldHVybiAtaC8yKigoLS1mKSooZi0yKS0xKSthfSxlYXNlSW5DdWJpYzpmdW5jdGlvbihlLGYsYSxoLGcpe3JldHVybiBoKihmLz1nKSpmKmYrYX0sZWFzZU91dEN1YmljOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuIGgqKChmPWYvZy0xKSpmKmYrMSkrYX0sZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24oZSxmLGEsaCxnKXtpZigoZi89Zy8yKTwxKXtyZXR1cm4gaC8yKmYqZipmK2F9cmV0dXJuIGgvMiooKGYtPTIpKmYqZisyKSthfSxlYXNlSW5RdWFydDpmdW5jdGlvbihlLGYsYSxoLGcpe3JldHVybiBoKihmLz1nKSpmKmYqZithfSxlYXNlT3V0UXVhcnQ6ZnVuY3Rpb24oZSxmLGEsaCxnKXtyZXR1cm4gLWgqKChmPWYvZy0xKSpmKmYqZi0xKSthfSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbihlLGYsYSxoLGcpe2lmKChmLz1nLzIpPDEpe3JldHVybiBoLzIqZipmKmYqZithfXJldHVybiAtaC8yKigoZi09MikqZipmKmYtMikrYX0sZWFzZUluUXVpbnQ6ZnVuY3Rpb24oZSxmLGEsaCxnKXtyZXR1cm4gaCooZi89ZykqZipmKmYqZithfSxlYXNlT3V0UXVpbnQ6ZnVuY3Rpb24oZSxmLGEsaCxnKXtyZXR1cm4gaCooKGY9Zi9nLTEpKmYqZipmKmYrMSkrYX0sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24oZSxmLGEsaCxnKXtpZigoZi89Zy8yKTwxKXtyZXR1cm4gaC8yKmYqZipmKmYqZithfXJldHVybiBoLzIqKChmLT0yKSpmKmYqZipmKzIpK2F9LGVhc2VJblNpbmU6ZnVuY3Rpb24oZSxmLGEsaCxnKXtyZXR1cm4gLWgqTWF0aC5jb3MoZi9nKihNYXRoLlBJLzIpKStoK2F9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuIGgqTWF0aC5zaW4oZi9nKihNYXRoLlBJLzIpKSthfSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuIC1oLzIqKE1hdGguY29zKE1hdGguUEkqZi9nKS0xKSthfSxlYXNlSW5FeHBvOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuKGY9PTApP2E6aCpNYXRoLnBvdygyLDEwKihmL2ctMSkpK2F9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuKGY9PWcpP2EraDpoKigtTWF0aC5wb3coMiwtMTAqZi9nKSsxKSthfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKGUsZixhLGgsZyl7aWYoZj09MCl7cmV0dXJuIGF9aWYoZj09Zyl7cmV0dXJuIGEraH1pZigoZi89Zy8yKTwxKXtyZXR1cm4gaC8yKk1hdGgucG93KDIsMTAqKGYtMSkpK2F9cmV0dXJuIGgvMiooLU1hdGgucG93KDIsLTEwKi0tZikrMikrYX0sZWFzZUluQ2lyYzpmdW5jdGlvbihlLGYsYSxoLGcpe3JldHVybiAtaCooTWF0aC5zcXJ0KDEtKGYvPWcpKmYpLTEpK2F9LGVhc2VPdXRDaXJjOmZ1bmN0aW9uKGUsZixhLGgsZyl7cmV0dXJuIGgqTWF0aC5zcXJ0KDEtKGY9Zi9nLTEpKmYpK2F9LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24oZSxmLGEsaCxnKXtpZigoZi89Zy8yKTwxKXtyZXR1cm4gLWgvMiooTWF0aC5zcXJ0KDEtZipmKS0xKSthfXJldHVybiBoLzIqKE1hdGguc3FydCgxLShmLT0yKSpmKSsxKSthfSxlYXNlSW5FbGFzdGljOmZ1bmN0aW9uKGYsaCxlLGwsayl7dmFyIGk9MS43MDE1ODt2YXIgaj0wO3ZhciBnPWw7aWYoaD09MCl7cmV0dXJuIGV9aWYoKGgvPWspPT0xKXtyZXR1cm4gZStsfWlmKCFqKXtqPWsqMC4zfWlmKGc8TWF0aC5hYnMobCkpe2c9bDt2YXIgaT1qLzR9ZWxzZXt2YXIgaT1qLygyKk1hdGguUEkpKk1hdGguYXNpbihsL2cpfXJldHVybiAtKGcqTWF0aC5wb3coMiwxMCooaC09MSkpKk1hdGguc2luKChoKmstaSkqKDIqTWF0aC5QSSkvaikpK2V9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKGYsaCxlLGwsayl7dmFyIGk9MS43MDE1ODt2YXIgaj0wO3ZhciBnPWw7aWYoaD09MCl7cmV0dXJuIGV9aWYoKGgvPWspPT0xKXtyZXR1cm4gZStsfWlmKCFqKXtqPWsqMC4zfWlmKGc8TWF0aC5hYnMobCkpe2c9bDt2YXIgaT1qLzR9ZWxzZXt2YXIgaT1qLygyKk1hdGguUEkpKk1hdGguYXNpbihsL2cpfXJldHVybiBnKk1hdGgucG93KDIsLTEwKmgpKk1hdGguc2luKChoKmstaSkqKDIqTWF0aC5QSSkvaikrbCtlfSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKGYsaCxlLGwsayl7dmFyIGk9MS43MDE1ODt2YXIgaj0wO3ZhciBnPWw7aWYoaD09MCl7cmV0dXJuIGV9aWYoKGgvPWsvMik9PTIpe3JldHVybiBlK2x9aWYoIWope2o9ayooMC4zKjEuNSl9aWYoZzxNYXRoLmFicyhsKSl7Zz1sO3ZhciBpPWovNH1lbHNle3ZhciBpPWovKDIqTWF0aC5QSSkqTWF0aC5hc2luKGwvZyl9aWYoaDwxKXtyZXR1cm4gLTAuNSooZypNYXRoLnBvdygyLDEwKihoLT0xKSkqTWF0aC5zaW4oKGgqay1pKSooMipNYXRoLlBJKS9qKSkrZX1yZXR1cm4gZypNYXRoLnBvdygyLC0xMCooaC09MSkpKk1hdGguc2luKChoKmstaSkqKDIqTWF0aC5QSSkvaikqMC41K2wrZX0sZWFzZUluQmFjazpmdW5jdGlvbihlLGYsYSxpLGgsZyl7aWYoZz09dW5kZWZpbmVkKXtnPTEuNzAxNTh9cmV0dXJuIGkqKGYvPWgpKmYqKChnKzEpKmYtZykrYX0sZWFzZU91dEJhY2s6ZnVuY3Rpb24oZSxmLGEsaSxoLGcpe2lmKGc9PXVuZGVmaW5lZCl7Zz0xLjcwMTU4fXJldHVybiBpKigoZj1mL2gtMSkqZiooKGcrMSkqZitnKSsxKSthfSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKGUsZixhLGksaCxnKXtpZihnPT11bmRlZmluZWQpe2c9MS43MDE1OH1pZigoZi89aC8yKTwxKXtyZXR1cm4gaS8yKihmKmYqKCgoZyo9KDEuNTI1KSkrMSkqZi1nKSkrYX1yZXR1cm4gaS8yKigoZi09MikqZiooKChnKj0oMS41MjUpKSsxKSpmK2cpKzIpK2F9LGVhc2VJbkJvdW5jZTpmdW5jdGlvbihlLGYsYSxoLGcpe3JldHVybiBoLWpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShlLGctZiwwLGgsZykrYX0sZWFzZU91dEJvdW5jZTpmdW5jdGlvbihlLGYsYSxoLGcpe2lmKChmLz1nKTwoMS8yLjc1KSl7cmV0dXJuIGgqKDcuNTYyNSpmKmYpK2F9ZWxzZXtpZihmPCgyLzIuNzUpKXtyZXR1cm4gaCooNy41NjI1KihmLT0oMS41LzIuNzUpKSpmKzAuNzUpK2F9ZWxzZXtpZihmPCgyLjUvMi43NSkpe3JldHVybiBoKig3LjU2MjUqKGYtPSgyLjI1LzIuNzUpKSpmKzAuOTM3NSkrYX1lbHNle3JldHVybiBoKig3LjU2MjUqKGYtPSgyLjYyNS8yLjc1KSkqZiswLjk4NDM3NSkrYX19fX0sZWFzZUluT3V0Qm91bmNlOmZ1bmN0aW9uKGUsZixhLGgsZyl7aWYoZjxnLzIpe3JldHVybiBqUXVlcnkuZWFzaW5nLmVhc2VJbkJvdW5jZShlLGYqMiwwLGgsZykqMC41K2F9cmV0dXJuIGpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShlLGYqMi1nLDAsaCxnKSowLjUraCowLjUrYX19KTsiLCIvKmdsb2JhbCBqUXVlcnkgKi9cbi8qIVxuKiBGaXRUZXh0LmpzIDEuMlxuKlxuKiBDb3B5cmlnaHQgMjAxMSwgRGF2ZSBSdXBlcnQgaHR0cDovL2RhdmVydXBlcnQuY29tXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlXG4qIGh0dHA6Ly9zYW0uem95Lm9yZy93dGZwbC9cbipcbiogRGF0ZTogVGh1IE1heSAwNSAxNDoyMzowMCAyMDExIC0wNjAwXG4qL1xuXG4oZnVuY3Rpb24oICQgKXtcblxuICAkLmZuLmZpdFRleHQgPSBmdW5jdGlvbigga29tcHJlc3Nvciwgb3B0aW9ucyApIHtcblxuICAgIC8vIFNldHVwIG9wdGlvbnNcbiAgICB2YXIgY29tcHJlc3NvciA9IGtvbXByZXNzb3IgfHwgMSxcbiAgICAgICAgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgJ21pbkZvbnRTaXplJyA6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgICAgICAnbWF4Rm9udFNpemUnIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgICAvLyBTdG9yZSB0aGUgb2JqZWN0XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAvLyBSZXNpemVyKCkgcmVzaXplcyBpdGVtcyBiYXNlZCBvbiB0aGUgb2JqZWN0IHdpZHRoIGRpdmlkZWQgYnkgdGhlIGNvbXByZXNzb3IgKiAxMFxuICAgICAgdmFyIHJlc2l6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0aGlzLmNzcygnZm9udC1zaXplJywgTWF0aC5tYXgoTWF0aC5taW4oJHRoaXMud2lkdGgoKSAvIChjb21wcmVzc29yKjEwKSwgcGFyc2VGbG9hdChzZXR0aW5ncy5tYXhGb250U2l6ZSkpLCBwYXJzZUZsb2F0KHNldHRpbmdzLm1pbkZvbnRTaXplKSkpO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2FsbCBvbmNlIHRvIHNldC5cbiAgICAgIHJlc2l6ZXIoKTtcblxuICAgICAgLy8gQ2FsbCBvbiByZXNpemUuIE9wZXJhIGRlYm91bmNlcyB0aGVpciByZXNpemUgYnkgZGVmYXVsdC5cbiAgICAgICQod2luZG93KS5vbigncmVzaXplLmZpdHRleHQgb3JpZW50YXRpb25jaGFuZ2UuZml0dGV4dCcsIHJlc2l6ZXIpO1xuXG4gICAgfSk7XG5cbiAgfTtcblxufSkoIGpRdWVyeSApO1xuIiwiLyohIFdPVyAtIHYxLjEuMiAtIDIwMTUtMDQtMDdcbiogQ29weXJpZ2h0IChjKSAyMDE1IE1hdHRoaWV1IEF1c3NhZ3VlbDsgTGljZW5zZWQgTUlUICovKGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX0sZz1bXS5pbmRleE9mfHxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMubGVuZ3RoO2M+YjtiKyspaWYoYiBpbiB0aGlzJiZ0aGlzW2JdPT09YSlyZXR1cm4gYjtyZXR1cm4tMX07Yj1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt9cmV0dXJuIGEucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7Zm9yKGMgaW4gYilkPWJbY10sbnVsbD09YVtjXSYmKGFbY109ZCk7cmV0dXJuIGF9LGEucHJvdG90eXBlLmlzTW9iaWxlPWZ1bmN0aW9uKGEpe3JldHVybi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChhKX0sYS5wcm90b3R5cGUuY3JlYXRlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU7cmV0dXJuIG51bGw9PWImJihiPSExKSxudWxsPT1jJiYoYz0hMSksbnVsbD09ZCYmKGQ9bnVsbCksbnVsbCE9ZG9jdW1lbnQuY3JlYXRlRXZlbnQ/KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSxlLmluaXRDdXN0b21FdmVudChhLGIsYyxkKSk6bnVsbCE9ZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3Q/KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKSxlLmV2ZW50VHlwZT1hKTplLmV2ZW50TmFtZT1hLGV9LGEucHJvdG90eXBlLmVtaXRFdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiBudWxsIT1hLmRpc3BhdGNoRXZlbnQ/YS5kaXNwYXRjaEV2ZW50KGIpOmIgaW4obnVsbCE9YSk/YVtiXSgpOlwib25cIitiIGluKG51bGwhPWEpP2FbXCJvblwiK2JdKCk6dm9pZCAwfSxhLnByb3RvdHlwZS5hZGRFdmVudD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGwhPWEuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKTpudWxsIT1hLmF0dGFjaEV2ZW50P2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyk6YVtiXT1jfSxhLnByb3RvdHlwZS5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGwhPWEucmVtb3ZlRXZlbnRMaXN0ZW5lcj9hLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKTpudWxsIT1hLmRldGFjaEV2ZW50P2EuZGV0YWNoRXZlbnQoXCJvblwiK2IsYyk6ZGVsZXRlIGFbYl19LGEucHJvdG90eXBlLmlubmVySGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuXCJpbm5lckhlaWdodFwiaW4gd2luZG93P3dpbmRvdy5pbm5lckhlaWdodDpkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fSxhfSgpLGM9dGhpcy5XZWFrTWFwfHx0aGlzLk1veldlYWtNYXB8fChjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3RoaXMua2V5cz1bXSx0aGlzLnZhbHVlcz1bXX1yZXR1cm4gYS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7Zm9yKGY9dGhpcy5rZXlzLGI9ZD0wLGU9Zi5sZW5ndGg7ZT5kO2I9KytkKWlmKGM9ZltiXSxjPT09YSlyZXR1cm4gdGhpcy52YWx1ZXNbYl19LGEucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGc9dGhpcy5rZXlzLGM9ZT0wLGY9Zy5sZW5ndGg7Zj5lO2M9KytlKWlmKGQ9Z1tjXSxkPT09YSlyZXR1cm4gdm9pZCh0aGlzLnZhbHVlc1tjXT1iKTtyZXR1cm4gdGhpcy5rZXlzLnB1c2goYSksdGhpcy52YWx1ZXMucHVzaChiKX0sYX0oKSksYT10aGlzLk11dGF0aW9uT2JzZXJ2ZXJ8fHRoaXMuV2Via2l0TXV0YXRpb25PYnNlcnZlcnx8dGhpcy5Nb3pNdXRhdGlvbk9ic2VydmVyfHwoYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmbnVsbCE9PWNvbnNvbGUmJmNvbnNvbGUud2FybihcIk11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZudWxsIT09Y29uc29sZSYmY29uc29sZS53YXJuKFwiV09XLmpzIGNhbm5vdCBkZXRlY3QgZG9tIG11dGF0aW9ucywgcGxlYXNlIGNhbGwgLnN5bmMoKSBhZnRlciBsb2FkaW5nIG5ldyBjb250ZW50LlwiKX1yZXR1cm4gYS5ub3RTdXBwb3J0ZWQ9ITAsYS5wcm90b3R5cGUub2JzZXJ2ZT1mdW5jdGlvbigpe30sYX0oKSksZD10aGlzLmdldENvbXB1dGVkU3R5bGV8fGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWU9ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuXCJmbG9hdFwiPT09YiYmKGI9XCJzdHlsZUZsb2F0XCIpLGUudGVzdChiKSYmYi5yZXBsYWNlKGUsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSksKG51bGwhPShjPWEuY3VycmVudFN0eWxlKT9jW2JdOnZvaWQgMCl8fG51bGx9LHRoaXN9LGU9LyhcXC0oW2Etel0pezF9KS9nLHRoaXMuV09XPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtudWxsPT1hJiYoYT17fSksdGhpcy5zY3JvbGxDYWxsYmFjaz1mKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssdGhpcyksdGhpcy5zY3JvbGxIYW5kbGVyPWYodGhpcy5zY3JvbGxIYW5kbGVyLHRoaXMpLHRoaXMucmVzZXRBbmltYXRpb249Zih0aGlzLnJlc2V0QW5pbWF0aW9uLHRoaXMpLHRoaXMuc3RhcnQ9Zih0aGlzLnN0YXJ0LHRoaXMpLHRoaXMuc2Nyb2xsZWQ9ITAsdGhpcy5jb25maWc9dGhpcy51dGlsKCkuZXh0ZW5kKGEsdGhpcy5kZWZhdWx0cyksdGhpcy5hbmltYXRpb25OYW1lQ2FjaGU9bmV3IGMsdGhpcy53b3dFdmVudD10aGlzLnV0aWwoKS5jcmVhdGVFdmVudCh0aGlzLmNvbmZpZy5ib3hDbGFzcyl9cmV0dXJuIGUucHJvdG90eXBlLmRlZmF1bHRzPXtib3hDbGFzczpcIndvd1wiLGFuaW1hdGVDbGFzczpcImFuaW1hdGVkXCIsb2Zmc2V0OjAsbW9iaWxlOiEwLGxpdmU6ITAsY2FsbGJhY2s6bnVsbH0sZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLmVsZW1lbnQ9d2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImludGVyYWN0aXZlXCI9PT0oYT1kb2N1bWVudC5yZWFkeVN0YXRlKXx8XCJjb21wbGV0ZVwiPT09YT90aGlzLnN0YXJ0KCk6dGhpcy51dGlsKCkuYWRkRXZlbnQoZG9jdW1lbnQsXCJET01Db250ZW50TG9hZGVkXCIsdGhpcy5zdGFydCksdGhpcy5maW5pc2hlZD1bXX0sZS5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYixjLGQsZTtpZih0aGlzLnN0b3BwZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBhLGMsZCxlO2ZvcihkPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY29uZmlnLmJveENsYXNzKSxlPVtdLGE9MCxjPWQubGVuZ3RoO2M+YTthKyspYj1kW2FdLGUucHVzaChiKTtyZXR1cm4gZX0uY2FsbCh0aGlzKSx0aGlzLmFsbD1mdW5jdGlvbigpe3ZhciBhLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxhPTAsYz1kLmxlbmd0aDtjPmE7YSsrKWI9ZFthXSxlLnB1c2goYik7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5ib3hlcy5sZW5ndGgpaWYodGhpcy5kaXNhYmxlZCgpKXRoaXMucmVzZXRTdHlsZSgpO2Vsc2UgZm9yKGU9dGhpcy5ib3hlcyxjPTAsZD1lLmxlbmd0aDtkPmM7YysrKWI9ZVtjXSx0aGlzLmFwcGx5U3R5bGUoYiwhMCk7cmV0dXJuIHRoaXMuZGlzYWJsZWQoKXx8KHRoaXMudXRpbCgpLmFkZEV2ZW50KHdpbmRvdyxcInNjcm9sbFwiLHRoaXMuc2Nyb2xsSGFuZGxlciksdGhpcy51dGlsKCkuYWRkRXZlbnQod2luZG93LFwicmVzaXplXCIsdGhpcy5zY3JvbGxIYW5kbGVyKSx0aGlzLmludGVydmFsPXNldEludGVydmFsKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssNTApKSx0aGlzLmNvbmZpZy5saXZlP25ldyBhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYyxkLGUsZixnO2ZvcihnPVtdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspZj1iW2NdLGcucHVzaChmdW5jdGlvbigpe3ZhciBhLGIsYyxkO2ZvcihjPWYuYWRkZWROb2Rlc3x8W10sZD1bXSxhPTAsYj1jLmxlbmd0aDtiPmE7YSsrKWU9Y1thXSxkLnB1c2godGhpcy5kb1N5bmMoZSkpO3JldHVybiBkfS5jYWxsKGEpKTtyZXR1cm4gZ319KHRoaXMpKS5vYnNlcnZlKGRvY3VtZW50LmJvZHkse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSk6dm9pZCAwfSxlLnByb3RvdHlwZS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcHBlZD0hMCx0aGlzLnV0aWwoKS5yZW1vdmVFdmVudCh3aW5kb3csXCJzY3JvbGxcIix0aGlzLnNjcm9sbEhhbmRsZXIpLHRoaXMudXRpbCgpLnJlbW92ZUV2ZW50KHdpbmRvdyxcInJlc2l6ZVwiLHRoaXMuc2Nyb2xsSGFuZGxlciksbnVsbCE9dGhpcy5pbnRlcnZhbD9jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpOnZvaWQgMH0sZS5wcm90b3R5cGUuc3luYz1mdW5jdGlvbigpe3JldHVybiBhLm5vdFN1cHBvcnRlZD90aGlzLmRvU3luYyh0aGlzLmVsZW1lbnQpOnZvaWQgMH0sZS5wcm90b3R5cGUuZG9TeW5jPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGY7aWYobnVsbD09YSYmKGE9dGhpcy5lbGVtZW50KSwxPT09YS5ub2RlVHlwZSl7Zm9yKGE9YS5wYXJlbnROb2RlfHxhLGU9YS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMuY29uZmlnLmJveENsYXNzKSxmPVtdLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspYj1lW2NdLGcuY2FsbCh0aGlzLmFsbCxiKTwwPyh0aGlzLmJveGVzLnB1c2goYiksdGhpcy5hbGwucHVzaChiKSx0aGlzLnN0b3BwZWR8fHRoaXMuZGlzYWJsZWQoKT90aGlzLnJlc2V0U3R5bGUoKTp0aGlzLmFwcGx5U3R5bGUoYiwhMCksZi5wdXNoKHRoaXMuc2Nyb2xsZWQ9ITApKTpmLnB1c2godm9pZCAwKTtyZXR1cm4gZn19LGUucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYXBwbHlTdHlsZShhKSxhLmNsYXNzTmFtZT1hLmNsYXNzTmFtZStcIiBcIit0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsbnVsbCE9dGhpcy5jb25maWcuY2FsbGJhY2smJnRoaXMuY29uZmlnLmNhbGxiYWNrKGEpLHRoaXMudXRpbCgpLmVtaXRFdmVudChhLHRoaXMud293RXZlbnQpLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJhbmltYXRpb25lbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwib2FuaW1hdGlvbmVuZFwiLHRoaXMucmVzZXRBbmltYXRpb24pLHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsXCJ3ZWJraXRBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSx0aGlzLnV0aWwoKS5hZGRFdmVudChhLFwiTVNBbmltYXRpb25FbmRcIix0aGlzLnJlc2V0QW5pbWF0aW9uKSxhfSxlLnByb3RvdHlwZS5hcHBseVN0eWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO3JldHVybiBkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctZHVyYXRpb25cIiksYz1hLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWRlbGF5XCIpLGU9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1pdGVyYXRpb25cIiksdGhpcy5hbmltYXRlKGZ1bmN0aW9uKGYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBmLmN1c3RvbVN0eWxlKGEsYixkLGMsZSl9fSh0aGlzKSl9LGUucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oKXtyZXR1cm5cInJlcXVlc3RBbmltYXRpb25GcmFtZVwiaW4gd2luZG93P2Z1bmN0aW9uKGEpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEpfTpmdW5jdGlvbihhKXtyZXR1cm4gYSgpfX0oKSxlLnByb3RvdHlwZS5yZXNldFN0eWxlPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZTtmb3IoZD10aGlzLmJveGVzLGU9W10sYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKylhPWRbYl0sZS5wdXNoKGEuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIik7cmV0dXJuIGV9LGUucHJvdG90eXBlLnJlc2V0QW5pbWF0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBhLnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiYW5pbWF0aW9uZW5kXCIpPj0wPyhiPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQsYi5jbGFzc05hbWU9Yi5jbGFzc05hbWUucmVwbGFjZSh0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsXCJcIikudHJpbSgpKTp2b2lkIDB9LGUucHJvdG90eXBlLmN1c3RvbVN0eWxlPWZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGImJnRoaXMuY2FjaGVBbmltYXRpb25OYW1lKGEpLGEuc3R5bGUudmlzaWJpbGl0eT1iP1wiaGlkZGVuXCI6XCJ2aXNpYmxlXCIsYyYmdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uRHVyYXRpb246Y30pLGQmJnRoaXMudmVuZG9yU2V0KGEuc3R5bGUse2FuaW1hdGlvbkRlbGF5OmR9KSxlJiZ0aGlzLnZlbmRvclNldChhLnN0eWxlLHthbmltYXRpb25JdGVyYXRpb25Db3VudDplfSksdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSx7YW5pbWF0aW9uTmFtZTpiP1wibm9uZVwiOnRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShhKX0pLGF9LGUucHJvdG90eXBlLnZlbmRvcnM9W1wibW96XCIsXCJ3ZWJraXRcIl0sZS5wcm90b3R5cGUudmVuZG9yU2V0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY7ZD1bXTtmb3IoYyBpbiBiKWU9YltjXSxhW1wiXCIrY109ZSxkLnB1c2goZnVuY3Rpb24oKXt2YXIgYixkLGcsaDtmb3IoZz10aGlzLnZlbmRvcnMsaD1bXSxiPTAsZD1nLmxlbmd0aDtkPmI7YisrKWY9Z1tiXSxoLnB1c2goYVtcIlwiK2YrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cigxKV09ZSk7cmV0dXJuIGh9LmNhbGwodGhpcykpO3JldHVybiBkfSxlLnByb3RvdHlwZS52ZW5kb3JDU1M9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGk7Zm9yKGg9ZChhKSxnPWguZ2V0UHJvcGVydHlDU1NWYWx1ZShiKSxmPXRoaXMudmVuZG9ycyxjPTAsZT1mLmxlbmd0aDtlPmM7YysrKWk9ZltjXSxnPWd8fGguZ2V0UHJvcGVydHlDU1NWYWx1ZShcIi1cIitpK1wiLVwiK2IpO3JldHVybiBnfSxlLnByb3RvdHlwZS5hbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3ZhciBiO3RyeXtiPXRoaXMudmVuZG9yQ1NTKGEsXCJhbmltYXRpb24tbmFtZVwiKS5jc3NUZXh0fWNhdGNoKGMpe2I9ZChhKS5nZXRQcm9wZXJ0eVZhbHVlKFwiYW5pbWF0aW9uLW5hbWVcIil9cmV0dXJuXCJub25lXCI9PT1iP1wiXCI6Yn0sZS5wcm90b3R5cGUuY2FjaGVBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5zZXQoYSx0aGlzLmFuaW1hdGlvbk5hbWUoYSkpfSxlLnByb3RvdHlwZS5jYWNoZWRBbmltYXRpb25OYW1lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYSl9LGUucHJvdG90eXBlLnNjcm9sbEhhbmRsZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY3JvbGxlZD0hMH0sZS5wcm90b3R5cGUuc2Nyb2xsQ2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4hdGhpcy5zY3JvbGxlZHx8KHRoaXMuc2Nyb2xsZWQ9ITEsdGhpcy5ib3hlcz1mdW5jdGlvbigpe3ZhciBiLGMsZCxlO2ZvcihkPXRoaXMuYm94ZXMsZT1bXSxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWE9ZFtiXSxhJiYodGhpcy5pc1Zpc2libGUoYSk/dGhpcy5zaG93KGEpOmUucHVzaChhKSk7cmV0dXJuIGV9LmNhbGwodGhpcyksdGhpcy5ib3hlcy5sZW5ndGh8fHRoaXMuY29uZmlnLmxpdmUpP3ZvaWQgMDp0aGlzLnN0b3AoKX0sZS5wcm90b3R5cGUub2Zmc2V0VG9wPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYjt2b2lkIDA9PT1hLm9mZnNldFRvcDspYT1hLnBhcmVudE5vZGU7Zm9yKGI9YS5vZmZzZXRUb3A7YT1hLm9mZnNldFBhcmVudDspYis9YS5vZmZzZXRUb3A7cmV0dXJuIGJ9LGUucHJvdG90eXBlLmlzVmlzaWJsZT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO3JldHVybiBjPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctb2Zmc2V0XCIpfHx0aGlzLmNvbmZpZy5vZmZzZXQsZj13aW5kb3cucGFnZVlPZmZzZXQsZT1mK01hdGgubWluKHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsdGhpcy51dGlsKCkuaW5uZXJIZWlnaHQoKSktYyxkPXRoaXMub2Zmc2V0VG9wKGEpLGI9ZCthLmNsaWVudEhlaWdodCxlPj1kJiZiPj1mfSxlLnByb3RvdHlwZS51dGlsPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPXRoaXMuX3V0aWw/dGhpcy5fdXRpbDp0aGlzLl91dGlsPW5ldyBifSxlLnByb3RvdHlwZS5kaXNhYmxlZD1mdW5jdGlvbigpe3JldHVybiF0aGlzLmNvbmZpZy5tb2JpbGUmJnRoaXMudXRpbCgpLmlzTW9iaWxlKG5hdmlnYXRvci51c2VyQWdlbnQpfSxlfSgpfSkuY2FsbCh0aGlzKTsiLCIvKiFcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIENyZWF0aXZlIEJvb3RzdHJhcCBUaGVtZSAoaHR0cDovL3N0YXJ0Ym9vdHN0cmFwLmNvbSlcbiAqIENvZGUgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjAuXG4gKiBGb3IgZGV0YWlscywgc2VlIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMC5cbiAqL1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuICAgIFxuICAgIC8vZmFkZSBpbml0aWFsIHBhZ2Ugc2hvd1xuICAgICQoJ2h0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH0sIDEzMDApO1xuXG4gICAgLy8galF1ZXJ5IGZvciBwYWdlIHNjcm9sbGluZyBmZWF0dXJlIC0gcmVxdWlyZXMgalF1ZXJ5IEVhc2luZyBwbHVnaW5cbiAgICAkKCdhLnBhZ2Utc2Nyb2xsJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLyp2YXIgJGFuY2hvciA9ICQodGhpcyk7Ki9cbiAgICAgICAgLyp2YXIgaHJlZiA9ICRhbmNob3IuYXR0cignaHJlZicpOyovXG4gICAgICAgIHZhciBocmVmID0gdGhpcy5oYXNoO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoJChocmVmKS5vZmZzZXQoKS50b3AgLSA1MClcbiAgICAgICAgfSwgMTI1MCwgJ2Vhc2VJbk91dEV4cG8nKTtcbiAgICAgICAgLyp3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7Ki9cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgdG9wIG5hdiBhcyBzY3JvbGxpbmcgb2NjdXJzXG4gICAgJCgnYm9keScpLnNjcm9sbHNweSh7XG4gICAgICAgIHRhcmdldDogJy5uYXZiYXItZml4ZWQtdG9wJyxcbiAgICAgICAgb2Zmc2V0OiA1MVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2VzIHRoZSBSZXNwb25zaXZlIE1lbnUgb24gTWVudSBJdGVtIENsaWNrXG4gICAgJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZTp2aXNpYmxlJykuY2xpY2soKTtcbiAgICB9KTtcblxuICAgIC8vIEZpdCBUZXh0IFBsdWdpbiBmb3IgTWFpbiBIZWFkZXJcbiAgICAkKFwiaDFcIikuZml0VGV4dChcbiAgICAgICAgICAgIDEuMiwge1xuICAgICAgICAgICAgICAgIG1pbkZvbnRTaXplOiAnMzVweCcsXG4gICAgICAgICAgICAgICAgbWF4Rm9udFNpemU6ICc2NXB4J1xuICAgICAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBPZmZzZXQgZm9yIE1haW4gTmF2aWdhdGlvblxuICAgICQoJyNtYWluTmF2JykuYWZmaXgoe1xuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHRvcDogMTAwXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBcblxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==