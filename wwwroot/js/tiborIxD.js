"use strict";var _createClass=function(){function a(b,c){for(var i=0,d;i<c.length;i++){d=c[i];d.enumerable=d.enumerable||!1;d.configurable=!0;if("value"in d)d.writable=!0;Object.defineProperty(b,d.key,d)}}return function(b,c,d){if(c)a(b.prototype,c);if(d)a(b,d);return b}}();function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")}}var Panel=function(){function a(b,c,d){_classCallCheck(this,a);this.activeButton=c;if(!this.activeButton){this.activeButton=!1}this.panel=document.getElementById(b);this.switch=document.querySelector("#"+b+" #switch");this.filterIcon=document.querySelector("#"+b+" #filter");this.closeIcon=document.querySelector("#"+b+" #close");this.activeContent=document.querySelector("#"+b+" #locationInfo");this.content=d;this.addEventListeners()}_createClass(a,[{key:"addEventListeners",value:function b(){if(this.activeButton){this.switch.addEventListener("click",this.toggleMenuVisibility.bind(this))}else{this.switch.addEventListener("click",this.close.bind(this))}if(this.content){if(this.activeContent){this.cleanContent();this.showContent(this.content)}else{this.showContent(this.content)}}}},{key:"toggleMenuVisibility",value:function b(){if(this.isVisible()){this.close()}else{this.open()}}},{key:"isVisible",value:function b(){return this.panel.classList.contains("open")}},{key:"open",value:function b(){this.panel.classList.add("open");if(this.filterIcon){this.filterIcon.classList.add("hide")}this.closeIcon.classList.remove("hide")}},{key:"close",value:function b(){this.panel.classList.remove("open");if(this.filterIcon){this.filterIcon.classList.remove("hide")}this.closeIcon.classList.add("hide");if(this.activeContent){this.cleanContent()}}},{key:"showContent",value:function b(c){var d=document.createElement("div");d.id="locationInfo";var e=document.createElement("h5"),f=document.createElement("img"),g=document.createElement("ul"),h=document.createElement("li"),j=document.createElement("li"),k=this.content.title,l=this.content.phone,m=this.content.mail;f.src=this.content.imageSrc;f.style.width="100%";g.append(h);g.append(j);e.append(k);h.append(l);j.append(m);this.panel.append(d);d.append(e);d.append(f);d.append(g)}},{key:"cleanContent",value:function b(){this.activeContent.remove()}}]);return a}(),Checkbox=function(){function a(b){_classCallCheck(this,a);this.choicesElement=document.getElementById(b);this.choicesElements=document.querySelectorAll("#"+b+" input[type=checkbox]");this.resetElement=document.querySelector("#"+b+" .reset");this.addEventListeners()}_createClass(a,[{key:"addEventListeners",value:function b(){this.resetElement.addEventListener("click",this.resetChoices.bind(this))}},{key:"resetChoices",value:function b(){this.choicesElements.forEach(function(c){if(c.checked){c.checked=!1}},this)}}]);return a}(),Filter=function(){function a(b){_classCallCheck(this,a);this.addEventListeners()}_createClass(a,[{key:"addEventListeners",value:function b(){}},{key:"filter",value:function b(c){}}]);return a}();
//# sourceMappingURL=tiborIxD.js.map
