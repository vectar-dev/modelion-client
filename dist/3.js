(window.webpackJsonp=window.webpackJsonp||[]).push([[3,1,46],{100:function(t,e,r){"use strict";r.r(e),r.d(e,"createGesture",(function(){return c}));var i=r(98);r.d(e,"GESTURE_CONTROLLER",(function(){return i.a}));var n,o=function(t,e,r,i){var n,o,a=s(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(n="addEventListener",o="removeEventListener"),t[n](e,r,a),function(){t[o](e,r,a)}},s=function(t){if(void 0===n)try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){n=!1}return!!n},a=function(t){return t instanceof Document?t:t.ownerDocument},c=function(t){var e=!1,r=!1,n=!0,s=!1,c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),h=c.canStart,f=c.onWillStart,p=c.onStart,v=c.onEnd,b=c.notCaptured,y=c.onMove,m=c.threshold,S=c.passive,X=c.blurOnStart,w={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},g=function(t,e,r){var i=r*(Math.PI/180),n="x"===t,o=Math.cos(i),s=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<s)return!1;var h=Math.sqrt(d),f=(n?r:i)/h;return l=f>o?1:f<-o?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(c.direction,c.threshold,c.maxAngle),Y=i.a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),G=function(){e&&(s=!1,y&&y(w))},_=function(){return!(Y&&!Y.capture())&&(e=!0,n=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTime=w.currentTime,f?f(w).then(E):E(),!0)},E=function(){X&&function(){if("undefined"!=typeof document){var t=document.activeElement;null!==t&&t.blur&&t.blur()}}(),p&&p(w),n=!0},D=function(){e=!1,r=!1,s=!1,n=!0,Y.release()},I=function(t){var r=e,i=n;D(),i&&(u(w,t),r?v&&v(w):b&&b(w))},T=function(t,e,r,i,n){var s,c,u,l,d,h,f,p=0,v=function(i){p=Date.now()+2e3,e(i)&&(!c&&r&&(c=o(t,"touchmove",r,n)),u||(u=o(t,"touchend",y,n)),l||(l=o(t,"touchcancel",y,n)))},b=function(i){p>Date.now()||e(i)&&(!h&&r&&(h=o(a(t),"mousemove",r,n)),f||(f=o(a(t),"mouseup",m,n)))},y=function(t){S(),i&&i(t)},m=function(t){X(),i&&i(t)},S=function(){c&&c(),u&&u(),l&&l(),c=u=l=void 0},X=function(){h&&h(),f&&f(),h=f=void 0},w=function(){S(),X()},g=function(e){void 0===e&&(e=!0),e?(s||(s=o(t,"touchstart",v,n)),d||(d=o(t,"mousedown",b,n))):(s&&s(),d&&d(),s=d=void 0,w())};return{enable:g,stop:w,destroy:function(){g(!1),i=r=e=void 0}}}(c.el,(function(t){var e=d(t);return!(r||!n)&&(l(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTime=w.currentTime=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!h||!1!==h(w))&&(Y.release(),!!Y.start()&&(r=!0,0===m?_():(g.start(w.startX,w.startY),!0))))}),(function(t){e?!s&&n&&(s=!0,u(w,t),requestAnimationFrame(G)):(u(w,t),g.detect(w.currentX,w.currentY)&&(g.isGesture()&&_()||L()))}),I,{capture:!1,passive:S}),L=function(){D(),T.stop(),b&&b(w)};return{enable:function(t){void 0===t&&(t=!0),t||(e&&I(void 0),D()),T.enable(t)},destroy:function(){Y.destroy(),T.destroy()}}},u=function(t,e){if(e){var r=t.currentX,i=t.currentY,n=t.currentTime;l(e,t);var o=t.currentX,s=t.currentY,a=(t.currentTime=d(e))-n;if(a>0&&a<100){var c=(o-r)/a,u=(s-i)/a;t.velocityX=.7*c+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}},l=function(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var o=n[0];r=o.clientX,i=o.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i},d=function(t){return t.timeStamp||Date.now()}},112:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return o}));var i=r(96),n=(r(98),r(100)),o=function(t,e,r,o,s){var a=t.ownerDocument.defaultView;return Object(n.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/a.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,r=a.innerWidth,n=e/r,o=t.velocityX,c=r/2,u=o>=0&&(o>.2||t.deltaX>c),l=(u?1-n:n)*r,d=0;if(l>5){var h=l/Math.abs(o);d=Math.min(h,540)}s(u,n<=0?.01:Object(i.c)(0,n,.9999),d)}})}},98:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var i=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new n(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new o(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach((function(t){n=Math.max(n,t)})),n===r){this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(s)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(s)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),n=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),o=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),s="backdrop-no-scroll",a=new i}}]);
//# sourceMappingURL=3.js.map