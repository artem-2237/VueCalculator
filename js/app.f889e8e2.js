(function(){"use strict";var t={5967:function(t,n,e){var o=e(9242),r=e(3396),i=e(7139);const s={class:"calc"},u={class:"calc__expression"},c={class:"calc__result"};function l(t,n,e,o,l,a){const p=(0,r.up)("AppPanel");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("span",u,(0,i.zw)(l.expression),1),(0,r._)("span",c,(0,i.zw)(a.formatResult),1),(0,r.Wm)(p,{onOnCalculate:n[0]||(n[0]=t=>a.onCalculate(t)),onOnResult:n[1]||(n[1]=t=>a.onResult(t))})])}const a={class:"panel"};function p(t,n,e,o,i,s){const u=(0,r.up)("AppButton");return(0,r.wg)(),(0,r.iD)("div",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.buttons,((t,e)=>((0,r.wg)(),(0,r.j4)(u,{button:{value:t,id:e},key:t,onAction:n[0]||(n[0]=t=>s.onClick(t))},null,8,["button"])))),128))])}function f(t,n,e,s,u,c){return(0,r.wg)(),(0,r.iD)("button",{class:(0,i.C_)({operator:c.isOperator}),style:(0,i.j5)({color:c.color}),onClick:n[0]||(n[0]=(0,o.iM)((n=>t.$emit("action",e.button.value)),["prevent"]))},(0,i.zw)(e.button.value),7)}var h={name:"AppButton",props:{button:Object},computed:{color(){const t=this.button.value,n=this.button.id;return Number(t)||"."===t||"0"===t||"00"===t?"#a2a2a2":[0,1,2].includes(n)?"#000000":[3,7,11,15].includes(n)?"#ea6162":"#ffffff"},isOperator(){return"#ea6162"===this.color}}},d=e(89);const v=(0,d.Z)(h,[["render",f],["__scopeId","data-v-83632882"]]);var b=v,m={name:"AppPanel",components:{AppButton:b},data(){return{buttons:["C","<","%","/","1","2","3","*","4","5","6","+","7","8","9","-","0","00",".","="],expression:"0"}},methods:{onClick(t){let n=this.expression,e=n.split(" ");const o=n.length-1;if("="!==t){if(Number(t)&&("0"===e[e.length-1]?(e[e.length-1]=t,n=e.join(" ")):n+=t,this.expression=n),"0"!==t&&"00"!==t||(" "===n[o]?n+="0":"0"!==e[e.length-1]&&(n+=t),this.expression=n),"."===t&&(" "===n[o]?n+="0.":"."!==n[o]&&(n+=t),this.expression=n),"C"===t&&(this.expression="0",this.$emit("onResult",0)),"<"===t){const t=this.expression.trim().split("");t.pop(),n=t.join("");const e=n.length-2;!Number(n[e])&&0!==Number(n[e])||" "===n[e]||(n=n.trim()),this.expression=n||"0"}if(["%","/","*","*","-","+"].includes(t)){if("."===n[o]){const t=n.split("");t.pop(),n=t.join("")}" "!==n[o]&&(n+=` ${t} `),this.expression=n}this.$emit("onCalculate",this.expression||"0")}else if(e=n.trim().split(" "),!["/","*","+","-","%"].includes(e[e.length-1])){if("."===n[o]){const t=n.split("");t.pop(),n=t.join(""),this.$emit("onCalculate",n||0)}this.expression=n;const t=new Function(`return ${this.expression}`);this.$emit("onResult",t())}}}};const g=(0,d.Z)(m,[["render",p],["__scopeId","data-v-8b01d24c"]]);var x=g,w={name:"App",components:{AppPanel:x},data(){return{expression:"0",result:0}},computed:{formatResult(){let t=this.result.toString();if(isNaN(+t))return"Error";if(t.length>10){let n=t.split("");n.splice(8),t=n.join("")+"..."}return+t===1/0?"Error":t}},methods:{onCalculate(t){this.expression=t},onResult(t){this.result=t}}};const O=(0,d.Z)(w,[["render",l]]);var _=O;(0,o.ri)(_).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var s=1/0;for(a=0;a<t.length;a++){o=t[a][0],r=t[a][1],i=t[a][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<s&&(s=i));if(u){t.splice(a--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,s=o[0],u=o[1],c=o[2],l=0;if(s.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var a=c(e)}for(n&&n(o);l<s.length;l++)i=s[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(a)},o=self["webpackChunkvue_calculator"]=self["webpackChunkvue_calculator"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(5967)}));o=e.O(o)})();
//# sourceMappingURL=app.f889e8e2.js.map