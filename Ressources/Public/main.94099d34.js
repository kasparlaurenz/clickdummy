parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
$(".show-menu").on("click",function(){$(".menu").slideToggle({start:function(){$(this).css({display:"flex"})}})}),$(".nav-level-1 li a, .nav-level-1 li p").mouseover(function(){$(".menu-teaser").removeClass("hidden")}),$(".nav-level-1 li a, .nav-level-1 li p").mouseout(function(){$(".menu-teaser").addClass("hidden")}),$(".services").on("click",function(){$(".menu").addClass("hidden-teaser"),$(".level-2-services").toggleClass("hidden"),$(".services").toggleClass("active"),$(".level-2-tools").hasClass("hidden")||($(".level-2-tools").toggleClass("hidden"),$(".tools").toggleClass("active")),$(".level-2-services").hasClass("hidden")&&$(".level-2-tools").hasClass("hidden")&&$(".menu").removeClass("hidden-teaser")}),$(".tools").on("click",function(){$(".menu").addClass("hidden-teaser"),$(".level-2-tools").toggleClass("hidden"),$(".tools").toggleClass("active"),$(".level-2-services").hasClass("hidden")||($(".level-2-services").toggleClass("hidden"),$(".services").toggleClass("active")),$(".level-2-services").hasClass("hidden")&&$(".level-2-tools").hasClass("hidden")&&$(".menu").removeClass("hidden-teaser")}),$(".active-gif").hover(function(){$(this).css({opacity:"1"}),$(this).css({transform:"scale(1.02)"}),$(this).prev("img").css({opacity:"0"})},function(){$(this).css({opacity:"0"}),$(this).prev("img").css({opacity:"1"})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.94099d34.js.map