var Se=Object.defineProperty;var Pe=(t,e,n)=>e in t?Se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var se=(t,e,n)=>Pe(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function g(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function $e(t){return t()}function he(){return Object.create(null)}function X(t){t.forEach($e)}function le(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ae(t){return Object.keys(t).length===0}function Ne(t,...e){if(t==null){for(const s of e)s(void 0);return g}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function b(t,e){t.appendChild(e)}function E(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function qe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function z(){return V(" ")}function ce(){return V("")}function Re(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function O(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function G(t,e){e=""+e,t.data!==e&&(t.data=e)}function J(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Ce(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}function ee(t,e){return new t(e)}let K;function Y(t){K=t}function ue(){if(!K)throw new Error("Function called outside component initialization");return K}function De(t){ue().$$.after_update.push(t)}function Ie(t){ue().$$.on_destroy.push(t)}function Me(){const t=ue();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=Ce(e,n,{cancelable:s});return r.slice().forEach(u=>{u.call(t,l)}),!l.defaultPrevented}return!0}}function pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const F=[],me=[];let U=[];const ge=[],ke=Promise.resolve();let ie=!1;function Ee(){ie||(ie=!0,ke.then(je))}function Be(){return Ee(),ke}function oe(t){U.push(t)}const re=new Set;let B=0;function je(){if(B!==0)return;const t=K;do{try{for(;B<F.length;){const e=F[B];B++,Y(e),He(e.$$)}}catch(e){throw F.length=0,B=0,e}for(Y(null),F.length=0,B=0;me.length;)me.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];re.has(n)||(re.add(n),n())}U.length=0}while(F.length);for(;ge.length;)ge.pop()();ie=!1,re.clear(),Y(t)}function He(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function Fe(t){const e=[],n=[];U.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),U=e}const Q=new Set;let C;function ae(){C={r:0,c:[],p:C}}function fe(){C.r||X(C.c),C=C.p}function S(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function P(t,e,n,s){if(t&&t.o){if(Q.has(t))return;Q.add(t),C.c.push(()=>{Q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function _e(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function te(t,e){const n={},s={},r={$$scope:1};let l=t.length;for(;l--;){const u=t[l],c=e[l];if(c){for(const i in u)i in c||(s[i]=1);for(const i in c)r[i]||(n[i]=c[i],r[i]=1);t[l]=c}else for(const i in u)r[i]=1}for(const u in s)u in n||(n[u]=void 0);return n}function ne(t){return typeof t=="object"&&t!==null?t:{}}function D(t){t&&t.c()}function q(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),oe(()=>{const l=t.$$.on_mount.map($e).filter(le);t.$$.on_destroy?t.$$.on_destroy.push(...l):X(l),t.$$.on_mount=[]}),r.forEach(oe)}function R(t,e){const n=t.$$;n.fragment!==null&&(Fe(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(t,e){t.$$.dirty[0]===-1&&(F.push(t),Ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,s,r,l,u=null,c=[-1]){const i=K;Y(t);const o=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:he(),dirty:c,skip_bound:!1,root:e.target||i.$$.root};u&&u(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(m,f,...y)=>{const _=y.length?y[0]:f;return o.ctx&&r(o.ctx[m],o.ctx[m]=_)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](_),a&&Ve(t,m)),f}):[],o.update(),a=!0,X(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const m=Te(e.target);o.fragment&&o.fragment.l(m),m.forEach($)}else o.fragment&&o.fragment.c();e.intro&&S(t.$$.fragment),q(t,e.target,e.anchor),je()}Y(i)}class M{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){R(this,1),this.$destroy=g}$on(e,n){if(!le(n))return g;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);const H=[];function xe(t,e){return{subscribe:Oe(t,e).subscribe}}function Oe(t,e=g){let n;const s=new Set;function r(c){if(T(t,c)&&(t=c,n)){const i=!H.length;for(const o of s)o[1](),H.push(o,t);if(i){for(let o=0;o<H.length;o+=2)H[o][0](H[o+1]);H.length=0}}}function l(c){r(c(t))}function u(c,i=g){const o=[c,i];return s.add(o),s.size===1&&(n=e(r,l)||g),c(t),()=>{s.delete(o),s.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:u}}function Le(t,e,n){const s=!Array.isArray(t),r=s?[t]:t;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return xe(n,(u,c)=>{let i=!1;const o=[];let a=0,m=g;const f=()=>{if(a)return;m();const _=e(s?o[0]:o,u,c);l?u(_):m=le(_)?_:g},y=r.map((_,j)=>Ne(_,k=>{o[j]=k,a&=~(1<<j),i&&f()},()=>{a|=1<<j}));return i=!0,f(),function(){X(y),m(),i=!1}})}function Ue(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,r,l,u=[],c="",i=t.split("/");for(i[0]||i.shift();r=i.shift();)n=r[0],n==="*"?(u.push("wild"),c+="/(.*)"):n===":"?(s=r.indexOf("?",1),l=r.indexOf(".",1),u.push(r.substring(1,~s?s:~l?l:r.length)),c+=~s&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(c+=(~s?"?":"")+"\\"+r.substring(l))):c+="/"+r;return{keys:u,pattern:new RegExp("^"+c+"/?$","i")}}function Xe(t){let e,n,s;const r=[t[2]];var l=t[0];function u(c,i){let o={};for(let a=0;a<r.length;a+=1)o=Z(o,r[a]);return i!==void 0&&i&4&&(o=Z(o,te(r,[ne(c[2])]))),{props:o}}return l&&(e=ee(l,u(t)),e.$on("routeEvent",t[7])),{c(){e&&D(e.$$.fragment),n=ce()},m(c,i){e&&q(e,c,i),E(c,n,i),s=!0},p(c,i){if(i&1&&l!==(l=c[0])){if(e){ae();const o=e;P(o.$$.fragment,1,0,()=>{R(o,1)}),fe()}l?(e=ee(l,u(c,i)),e.$on("routeEvent",c[7]),D(e.$$.fragment),S(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else if(l){const o=i&4?te(r,[ne(c[2])]):{};e.$set(o)}},i(c){s||(e&&S(e.$$.fragment,c),s=!0)},o(c){e&&P(e.$$.fragment,c),s=!1},d(c){c&&$(n),e&&R(e,c)}}}function Ye(t){let e,n,s;const r=[{params:t[1]},t[2]];var l=t[0];function u(c,i){let o={};for(let a=0;a<r.length;a+=1)o=Z(o,r[a]);return i!==void 0&&i&6&&(o=Z(o,te(r,[i&2&&{params:c[1]},i&4&&ne(c[2])]))),{props:o}}return l&&(e=ee(l,u(t)),e.$on("routeEvent",t[6])),{c(){e&&D(e.$$.fragment),n=ce()},m(c,i){e&&q(e,c,i),E(c,n,i),s=!0},p(c,i){if(i&1&&l!==(l=c[0])){if(e){ae();const o=e;P(o.$$.fragment,1,0,()=>{R(o,1)}),fe()}l?(e=ee(l,u(c,i)),e.$on("routeEvent",c[6]),D(e.$$.fragment),S(e.$$.fragment,1),q(e,n.parentNode,n)):e=null}else if(l){const o=i&6?te(r,[i&2&&{params:c[1]},i&4&&ne(c[2])]):{};e.$set(o)}},i(c){s||(e&&S(e.$$.fragment,c),s=!0)},o(c){e&&P(e.$$.fragment,c),s=!1},d(c){c&&$(n),e&&R(e,c)}}}function Ke(t){let e,n,s,r;const l=[Ye,Xe],u=[];function c(i,o){return i[1]?0:1}return e=c(t),n=u[e]=l[e](t),{c(){n.c(),s=ce()},m(i,o){u[e].m(i,o),E(i,s,o),r=!0},p(i,[o]){let a=e;e=c(i),e===a?u[e].p(i,o):(ae(),P(u[a],1,1,()=>{u[a]=null}),fe(),n=u[e],n?n.p(i,o):(n=u[e]=l[e](i),n.c()),S(n,1),n.m(s.parentNode,s))},i(i){r||(S(n),r=!0)},o(i){P(n),r=!1},d(i){i&&$(s),u[e].d(i)}}}function be(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const de=xe(null,function(e){e(be());const n=()=>{e(be())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Le(de,t=>t.location);Le(de,t=>t.querystring);const ve=Oe(void 0);function We(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Ge(t,e,n){let{routes:s={}}=e,{prefix:r=""}=e,{restoreScrollState:l=!1}=e;class u{constructor(d,p){if(!p||typeof p!="function"&&(typeof p!="object"||p._sveltesparouter!==!0))throw Error("Invalid component object");if(!d||typeof d=="string"&&(d.length<1||d.charAt(0)!="/"&&d.charAt(0)!="*")||typeof d=="object"&&!(d instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:x,keys:w}=Ue(d);this.path=d,typeof p=="object"&&p._sveltesparouter===!0?(this.component=p.component,this.conditions=p.conditions||[],this.userData=p.userData,this.props=p.props||{}):(this.component=()=>Promise.resolve(p),this.conditions=[],this.props={}),this._pattern=x,this._keys=w}match(d){if(r){if(typeof r=="string")if(d.startsWith(r))d=d.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const N=d.match(r);if(N&&N[0])d=d.substr(N[0].length)||"/";else return null}}const p=this._pattern.exec(d);if(p===null)return null;if(this._keys===!1)return p;const x={};let w=0;for(;w<this._keys.length;){try{x[this._keys[w]]=decodeURIComponent(p[w+1]||"")||null}catch{x[this._keys[w]]=null}w++}return x}async checkConditions(d){for(let p=0;p<this.conditions.length;p++)if(!await this.conditions[p](d))return!1;return!0}}const c=[];s instanceof Map?s.forEach((h,d)=>{c.push(new u(d,h))}):Object.keys(s).forEach(h=>{c.push(new u(h,s[h]))});let i=null,o=null,a={};const m=Me();async function f(h,d){await Be(),m(h,d)}let y=null,_=null;l&&(_=h=>{h.state&&(h.state.__svelte_spa_router_scrollY||h.state.__svelte_spa_router_scrollX)?y=h.state:y=null},window.addEventListener("popstate",_),De(()=>{We(y)}));let j=null,k=null;const W=de.subscribe(async h=>{j=h;let d=0;for(;d<c.length;){const p=c[d].match(h.location);if(!p){d++;continue}const x={route:c[d].path,location:h.location,querystring:h.querystring,userData:c[d].userData,params:p&&typeof p=="object"&&Object.keys(p).length?p:null};if(!await c[d].checkConditions(x)){n(0,i=null),k=null,f("conditionsFailed",x);return}f("routeLoading",Object.assign({},x));const w=c[d].component;if(k!=w){w.loading?(n(0,i=w.loading),k=w,n(1,o=w.loadingParams),n(2,a={}),f("routeLoaded",Object.assign({},x,{component:i,name:i.name,params:o}))):(n(0,i=null),k=null);const N=await w();if(h!=j)return;n(0,i=N&&N.default||N),k=w}p&&typeof p=="object"&&Object.keys(p).length?n(1,o=p):n(1,o=null),n(2,a=c[d].props),f("routeLoaded",Object.assign({},x,{component:i,name:i.name,params:o})).then(()=>{ve.set(o)});return}n(0,i=null),k=null,ve.set(void 0)});Ie(()=>{W(),_&&window.removeEventListener("popstate",_)});function L(h){pe.call(this,t,h)}function A(h){pe.call(this,t,h)}return t.$$set=h=>{"routes"in h&&n(3,s=h.routes),"prefix"in h&&n(4,r=h.prefix),"restoreScrollState"in h&&n(5,l=h.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[i,o,a,s,r,l,L,A]}class Je extends M{constructor(e){super(),I(this,e,Ge,Ke,T,{routes:3,prefix:4,restoreScrollState:5})}}function Qe(t){let e;return{c(){e=v("main"),e.innerHTML='<div><h1 class="svelte-w65taw">Registrado con éxito <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"></path></svg></h1></div> <div><a href="/" class="button-19 svelte-w65taw">Volver</a></div>',O(e,"class","svelte-w65taw")},m(n,s){E(n,e,s)},p:g,i:g,o:g,d(n){n&&$(e)}}}class Ze extends M{constructor(e){super(),I(this,e,null,Qe,T,{})}}function et(t){let e,n,s;return{c(){e=v("form"),e.innerHTML='<div class="svelte-1wa7ijb"><h3 style="color: #9a1ce8;text-align: center;">Registrate aquí</h3></div> <div class="svelte-1wa7ijb"><input type="text" name="name" id="name" placeholder="nombre..." required="" class="svelte-1wa7ijb"/></div> <div class="svelte-1wa7ijb"><input type="text" name="last_name" id="last_name" placeholder="apellidos..." required="" class="svelte-1wa7ijb"/></div> <div class="svelte-1wa7ijb"><input type="number" name="edad" id="edad" placeholder="33 años" required="" class="svelte-1wa7ijb"/></div> <div style="display: flex;align-items: center; justify-content: center; gap: 10px;" class="svelte-1wa7ijb"><button class="btn svelte-1wa7ijb" type="submit">Enviar</button> <a href="/#/table" class="btn svelte-1wa7ijb">Ver Tabla</a></div>',O(e,"class","form svelte-1wa7ijb")},m(r,l){E(r,e,l),n||(s=Re(e,"submit",t[0]),n=!0)},p:g,i:g,o:g,d(r){r&&$(e),n=!1,s()}}}function tt(t){return[n=>{n.preventDefault();let s=n.target.name.value,r=n.target.last_name.value,l=n.target.edad.value;location.href="http://localhost/app-svelte/app-svelte-php/src/backend/addPersonas.php?name="+s+"&last_name="+r+"&edad="+l}]}class nt extends M{constructor(e){super(),I(this,e,tt,et,T,{})}}function st(t){let e,n,s,r;return s=new nt({}),{c(){e=v("main"),n=v("div"),D(s.$$.fragment),J(n,"display","flex"),J(n,"justify-content","center"),J(n,"align-items","center"),J(n,"height","100vh")},m(l,u){E(l,e,u),b(e,n),q(s,n,null),r=!0},p:g,i(l){r||(S(s.$$.fragment,l),r=!0)},o(l){P(s.$$.fragment,l),r=!1},d(l){l&&$(e),R(s)}}}class rt extends M{constructor(e){super(),I(this,e,null,st,T,{})}}function we(t,e,n){const s=t.slice();return s[1]=e[n].dni,s[2]=e[n].nombre,s[3]=e[n].apellidos,s[4]=e[n].edad,s[6]=n,s}function ye(t){let e,n,s=t[1]+"",r,l,u,c=t[2]+"",i,o,a,m=t[3]+"",f,y,_,j=t[4]+"",k,W;return{c(){e=v("tr"),n=v("td"),r=V(s),l=z(),u=v("td"),i=V(c),o=z(),a=v("td"),f=V(m),y=z(),_=v("td"),k=V(j),W=z(),O(n,"class","svelte-ki27g9"),O(u,"class","svelte-ki27g9"),O(a,"class","svelte-ki27g9"),O(_,"class","svelte-ki27g9"),O(e,"class","svelte-ki27g9")},m(L,A){E(L,e,A),b(e,n),b(n,r),b(e,l),b(e,u),b(u,i),b(e,o),b(e,a),b(a,f),b(e,y),b(e,_),b(_,k),b(e,W)},p(L,A){A&1&&s!==(s=L[1]+"")&&G(r,s),A&1&&c!==(c=L[2]+"")&&G(i,c),A&1&&m!==(m=L[3]+"")&&G(f,m),A&1&&j!==(j=L[4]+"")&&G(k,j)},d(L){L&&$(e)}}}function it(t){let e,n,s,r,l,u,c,i=_e(t[0]),o=[];for(let a=0;a<i.length;a+=1)o[a]=ye(we(t,i,a));return{c(){e=v("header"),e.innerHTML='<div><a style="text-decoration: none;color: black; font-weight: bold;" href="/" class="svelte-ki27g9">Volver</a> <div class="div-link svelte-ki27g9"></div></div>',n=z(),s=v("div"),r=v("table"),l=v("thead"),l.innerHTML='<tr class="svelte-ki27g9"><th class="svelte-ki27g9">#</th> <th class="svelte-ki27g9">Nombre</th> <th class="svelte-ki27g9">Apellidos</th> <th class="svelte-ki27g9">Edad</th></tr>',u=z(),c=v("tbody");for(let a=0;a<o.length;a+=1)o[a].c();O(e,"class","svelte-ki27g9"),O(l,"class","svelte-ki27g9"),O(r,"class","darkTable svelte-ki27g9"),O(s,"class","container svelte-ki27g9")},m(a,m){E(a,e,m),E(a,n,m),E(a,s,m),b(s,r),b(r,l),b(r,u),b(r,c);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(c,null)},p(a,[m]){if(m&1){i=_e(a[0]);let f;for(f=0;f<i.length;f+=1){const y=we(a,i,f);o[f]?o[f].p(y,m):(o[f]=ye(y),o[f].c(),o[f].m(c,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=i.length}},i:g,o:g,d(a){a&&($(e),$(n),$(s)),qe(o,a)}}}function ot(t,e,n){var s=[];return fetch("http://localhost/app-svelte/app-svelte-php/src/backend/getPersonas.php").then(r=>r.json()).then(r=>{console.log(n(0,s=r))}),[s]}class lt extends M{constructor(e){super(),I(this,e,ot,it,T,{})}}function ct(t){let e,n,s;return n=new lt({}),{c(){e=v("main"),D(n.$$.fragment)},m(r,l){E(r,e,l),q(n,e,null),s=!0},p:g,i(r){s||(S(n.$$.fragment,r),s=!0)},o(r){P(n.$$.fragment,r),s=!1},d(r){r&&$(e),R(n)}}}class ut extends M{constructor(e){super(),I(this,e,null,ct,T,{})}}const at={"/":rt,"/statusOk":Ze,"/table":ut};function ft(t){let e,n,s;return n=new Je({props:{routes:at}}),{c(){e=v("main"),D(n.$$.fragment)},m(r,l){E(r,e,l),q(n,e,null),s=!0},p:g,i(r){s||(S(n.$$.fragment,r),s=!0)},o(r){P(n.$$.fragment,r),s=!1},d(r){r&&$(e),R(n)}}}class dt extends M{constructor(e){super(),I(this,e,null,ft,T,{})}}new dt({target:document.getElementById("app")});