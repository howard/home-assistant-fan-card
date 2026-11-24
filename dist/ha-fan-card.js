var FanCard=(()=>{var F=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var bt=Object.getOwnPropertyNames;var At=Object.prototype.hasOwnProperty;var xt=(r,t)=>{for(var e in t)F(r,e,{get:t[e],enumerable:!0})},wt=(r,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of bt(t))!At.call(r,i)&&i!==e&&F(r,i,{get:()=>t[i],enumerable:!(s=vt(t,i))||s.enumerable});return r};var Et=r=>wt(F({},"__esModule",{value:!0}),r);var Ft={};xt(Ft,{FanCard:()=>L});var T=globalThis,H=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),tt=new WeakMap,E=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(H&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}},et=r=>new E(typeof r=="string"?r:r+"",void 0,j),S=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new E(e,r,j)},st=(r,t)=>{if(H)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},I=H?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return et(e)})(r):r;var{is:St,defineProperty:Ct,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Mt,getPrototypeOf:Nt}=Object,R=globalThis,it=R.trustedTypes,Ut=it?it.emptyScript:"",Ot=R.reactiveElementPolyfillSupport,C=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ot=(r,t)=>!St(r,t),rt={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let t=Nt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,s=[...Pt(e),...Mt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(I(i))}else t!==void 0&&e.push(I(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:D).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:D;this._$Em=i;let l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??ot)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[C("elementProperties")]=new Map,m[C("finalized")]=new Map,Ot?.({ReactiveElement:m}),(R.reactiveElementVersions??=[]).push("2.1.2");var K=globalThis,nt=r=>r,z=K.trustedTypes,at=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,ut="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+$,Tt=`<${ft}>`,b=document,P=()=>b.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ht=r=>G(r)||typeof r?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,y=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,_t=/^(?:script|style|textarea|title)$/i,J=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=J(1),Vt=J(2),Zt=J(3),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),pt=new WeakMap,v=b.createTreeWalker(b,129);function mt(r,t){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}var Rt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=k;for(let l=0;l<e;l++){let a=r[l],c,p,h=-1,_=0;for(;_<a.length&&(n.lastIndex=_,p=n.exec(a),p!==null);)_=n.lastIndex,n===k?p[1]==="!--"?n=lt:p[1]!==void 0?n=ht:p[2]!==void 0?(_t.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=i??k,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?y:p[3]==='"'?dt:ct):n===dt||n===ct?n=y:n===lt||n===ht?n=k:(n=y,i=void 0);let g=n===y&&r[l+1].startsWith("/>")?" ":"";o+=n===k?a+Tt:h>=0?(s.push(c),a.slice(0,h)+ut+a.slice(h)+$+g):a+$+(h===-2?l:g)}return[mt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,l=t.length-1,a=this.parts,[c,p]=Rt(t,e);if(this.el=r.createElement(c,s),v.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(ut)){let _=p[n++],g=i.getAttribute(h).split($),O=/([.?@])?(.*)/.exec(_);a.push({type:1,index:o,name:O[2],strings:g,ctor:O[1]==="."?V:O[1]==="?"?Z:O[1]==="@"?W:w}),i.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(_t.test(i.tagName)){let h=i.textContent.split($),_=h.length-1;if(_>0){i.textContent=z?z.emptyScript:"";for(let g=0;g<_;g++)i.append(h[g],P()),v.nextNode(),a.push({type:2,index:++o});i.append(h[_],P())}}}else if(i.nodeType===8)if(i.data===ft)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function x(r,t,e=r,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=M(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=x(r,i._$AS(r,t.values),i,s)),t}var q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??b).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new U(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Q(o,this,t)),this._$AV.push(c),a=s[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},U=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),M(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(mt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new q(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new N(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=nt(t).nextSibling;nt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=x(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=x(this,l[s+a],e,a),c===A&&(c=this._$AH[a]),n||=!M(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},V=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},Z=class extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},W=class extends w{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??d)===A)return;let s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}};var zt=K.litHtmlPolyfillSupport;zt?.(N,U),(K.litHtmlVersions??=[]).push("3.3.3");var gt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new U(t.insertBefore(P(),o),o,void 0,e??{})}return i._$AI(r),i};var X=globalThis,f=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};f._$litElement$=!0,f.finalized=!0,X.litElementHydrateSupport?.({LitElement:f});var Lt=X.litElementPolyfillSupport;Lt?.({LitElement:f});(X.litElementVersions??=[]).push("4.2.2");var $t=`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- frame: rounded square with circular opening (evenodd cutout) -->
  <path fill="#d9cdb2" d="M 5 0 L 95 0 A 5 5 0 0 1 100 5 L 100 95 A 5 5 0 0 1 95 100 L 5 100 A 5 5 0 0 1 0 95 L 0 5 A 5 5 0 0 1 5 0 Z M 50 3.5 A 46.5 46.5 0 1 0 50 96.5 A 46.5 46.5 0 1 0 50 3.5 Z" fill-rule="evenodd"/>
  <!-- opening rim -->
  <circle cx="50" cy="50" r="46.5" fill="none" stroke="#bfae88" stroke-width="1.5"/>
  <!-- corner screws -->
  <circle cx="9" cy="9" r="2.2" fill="#a9986f"/>
  <circle cx="91" cy="9" r="2.2" fill="#a9986f"/>
  <circle cx="9" cy="91" r="2.2" fill="#a9986f"/>
  <circle cx="91" cy="91" r="2.2" fill="#a9986f"/>
  <!-- rotating assembly -->
  <g class="fan-rotor">
    <g transform="rotate(0 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <g transform="rotate(51.42857142857143 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <g transform="rotate(102.85714285714286 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <g transform="rotate(154.28571428571428 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <g transform="rotate(205.71428571428572 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <g transform="rotate(257.14285714285717 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <g transform="rotate(308.57142857142856 50 50)"><path d="M 66.96 51.19 C 74.73 58.03, 84.01 66.96, 91.47 68.47 Q 96.78 54.50, 93.26 40.01 C 88.35 38.64, 76.31 40.42, 65.76 43.63 A 17 17 0 0 1 66.96 51.19 Z" fill="#7a5734"/></g>
    <circle cx="50" cy="50" r="18.5" fill="#d5c7a6"/>
    <circle cx="50" cy="50" r="18.5" fill="none" stroke="#a08d64" stroke-width="1.2"/>
    <circle cx="50" cy="50" r="8.5" fill="none" stroke="#a08d64" stroke-width="1.2"/>
    <circle cx="50" cy="50" r="2.6" fill="#8a764f"/>
  </g>
</svg>`;var yt={fans:[],fans_per_row:4,speed_scale:.15},Y=class extends f{static properties={hass:{type:Object},config:{type:Object}};setConfig(t){this.config={fans_per_row:yt.fans_per_row,speed_scale:yt.speed_scale,...t,fans:(t.fans||[]).map(e=>({...e}))}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}_set(t){this.config={...this.config,...t},this._fire()}_setFan(t,e){let s=this.config.fans.map((i,o)=>o===t?{...i,...e}:i);this._set({fans:s})}_addFan(){this._set({fans:[...this.config.fans,{entity:""}]})}_removeFan(t){this._set({fans:this.config.fans.filter((e,s)=>s!==t)})}static styles=S`
    :host {
      display: block;
      color: var(--primary-text-color, #1c1c1c);
    }
    .editor {
      padding: 4px 0;
    }
    h3 {
      font-size: 14px;
      margin: 0 0 8px;
    }
    .fan-card {
      position: relative;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      padding: 12px 36px 12px 12px;
      margin-bottom: 10px;
    }
    .fan-card .remove {
      position: absolute;
      top: 6px;
      right: 6px;
      border: none;
      background: none;
      color: var(--error-color, #c62828);
      font-size: 15px;
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
    }
    .fan-card .remove:hover {
      background: rgba(198, 40, 40, 0.1);
    }
    label {
      display: block;
      font-size: 12px;
      opacity: 0.85;
      margin: 8px 0 4px;
    }
    input[type="text"] {
      width: 100%;
      box-sizing: border-box;
      font: inherit;
      padding: 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--input-fill, transparent);
      color: var(--primary-text-color, #1c1c1c);
    }
    .add {
      border: 1px dashed var(--divider-color, rgba(0, 0, 0, 0.3));
      background: none;
      color: var(--primary-color, #03a9f4);
      font: inherit;
      font-weight: 600;
      border-radius: 8px;
      padding: 10px;
      width: 100%;
      cursor: pointer;
      margin-bottom: 12px;
    }
    .add:hover {
      background: rgba(3, 169, 244, 0.06);
    }
    .opt-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
    .opt-row label {
      margin: 0;
      min-width: 110px;
    }
    .opt-row input[type="number"] {
      font: inherit;
      padding: 6px 8px;
      width: 90px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--input-fill, transparent);
      color: var(--primary-text-color, #1c1c1c);
    }
    .opt-row .hint {
      font-size: 11px;
      opacity: 0.6;
    }
    .empty {
      opacity: 0.6;
      font-size: 13px;
      margin: 4px 0 10px;
    }
  `;render(){if(!this.hass||!this.config)return u``;let t=this.config.fans||[];return u`
      <div class="editor">
        <h3>Fans</h3>
        ${t.length===0?u`<div class="empty">
              No fans configured yet — add the first one below.
            </div>`:""}
        ${t.map((e,s)=>u`
            <div class="fan-card">
              <button
                class="remove"
                title="Remove fan"
                @click=${()=>this._removeFan(s)}
              >
                ✕
              </button>
              <label>Speed sensor (Hz)</label>
              <ha-entity-picker
                .hass=${this.hass}
                .value=${e.entity||""}
                .include-domains=${["sensor"]}
                allow-custom-entity
                @value-changed=${i=>this._setFan(s,{entity:i.detail.value||void 0})}
              ></ha-entity-picker>
              <label>Name (optional)</label>
              <input
                type="text"
                .value=${e.name||""}
                placeholder="e.g. Fan 1"
                @change=${i=>this._setFan(s,{name:i.target.value||void 0})}
              />
              <label>Problem sensor (optional, binary)</label>
              <ha-entity-picker
                .hass=${this.hass}
                .value=${e.problem_entity||""}
                .include-domains=${["binary_sensor"]}
                allow-custom-entity
                @value-changed=${i=>this._setFan(s,{problem_entity:i.detail.value||void 0})}
              ></ha-entity-picker>
            </div>
          `)}
        <button class="add" @click=${this._addFan}>＋ Add fan</button>

        <div class="opt-row">
          <label>Fans per row</label>
          <input
            type="number"
            min="1"
            max="12"
            step="1"
            .value=${this.config.fans_per_row??4}
            @change=${e=>this._set({fans_per_row:Math.max(1,parseInt(e.target.value,10)||4)})}
          />
        </div>
        <div class="opt-row">
          <label>Speed scale</label>
          <input
            type="number"
            min="0.05"
            max="5"
            step="0.05"
            .value=${this.config.speed_scale??.15}
            @change=${e=>this._set({speed_scale:Math.max(.05,parseFloat(e.target.value)||.15)})}
          />
          <span class="hint">0.15 = blades visible, 1.0 = real-time</span>
        </div>
      </div>
    `}};customElements.get("fan-card-editor")||customElements.define("fan-card-editor",Y);var L=class extends f{static properties={hass:{type:Object},config:{type:Object}};connectedCallback(){super.connectedCallback(),this._start()}static styles=S`
    :host {
      display: block;
      padding: 4px;
    }
    .row {
      display: grid;
      gap: 8px;
      margin-bottom: 8px;
    }
    .fan {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid transparent;
      border-radius: 10px;
      padding: 6px;
      box-sizing: border-box;
      /* Allow shrinking below content size (WebKit keeps the SVG's intrinsic
         ~300px as the grid auto-minimum, which would overflow the row). */
      min-width: 0;
    }
    .fan.problem {
      border-color: #ef5350;
      background: rgba(239, 83, 80, 0.08);
    }
    .svg-wrapper {
      width: 100%;
    }
    .svg-wrapper svg {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
    }
    .label {
      text-align: center;
      font-size: 12px;
      line-height: 1.4;
      color: var(--primary-text-color, #1c1c1c);
      margin-top: 2px;
    }
    .label .hz {
      opacity: 0.7;
    }
    .fan.problem .label {
      color: #c62828;
    }
  `;static getConfigElement(){return document.createElement("fan-card-editor")}static getStubConfig(){return{fans:[],fans_per_row:4,speed_scale:.15}}setConfig(t){if(!t.fans||!t.fans.length)throw new Error("Specify at least one fan in the 'fans' array.");this.config={fans_per_row:4,speed_scale:.15,...t},this._rotors={};for(let e of this.config.fans)this._rotors[e.entity]={angle:0};this._lastTs=0}getCardSize(){return Math.ceil(this.config.fans.length/this.config.fans_per_row)*2}setSpeedScale(t){this.config&&(this.config.speed_scale=Number(t)||0,this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this._stop()}render(){if(!this.config)return u``;let t=Math.max(1,this.config.fans_per_row||4),e=[],s=this.config.fans.map(i=>this._renderFan(i));for(let i=0;i<s.length;i+=t)e.push(u`<div
          class="row"
          style="grid-template-columns: repeat(${Math.min(t,s.length-i)}, minmax(0, 1fr))"
          >${s.slice(i,i+t)}</div
        >`);return u`${e}`}_renderFan(t){let e=this.hass?.states?.[t.entity],s=t.problem_entity?this.hass?.states?.[t.problem_entity]:null,i=e?parseFloat(e.state):NaN,o=s?.state==="on",n=Number.isFinite(i)?`${Math.round(i*10)/10} Hz`:"\u2013",l=t.name||(t.entity.includes(".")?t.entity.split(".").pop():t.entity);return u`
      <div
        class="fan ${o?"problem":""}"
        @click=${()=>this._handleFanClick(t.entity)}
      >
        <div class="svg-wrapper"><svg viewBox="0 0 100 100"></svg></div>
        <div class="label">
          <div class="name">${l}</div>
          <div class="hz">${n}</div>
        </div>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this._injectSvgs(),this._collectRotors()}updated(t){t.has("hass")&&this.config&&this._collectRotors()}_injectSvgs(){this.shadowRoot.querySelectorAll(".svg-wrapper").forEach(e=>{e.dataset.injected||(e.innerHTML=$t,e.dataset.injected="true")})}_collectRotors(){this._rotorEls=new Map;let t=this.shadowRoot.querySelectorAll(".fan-rotor");this.config.fans.forEach((e,s)=>{this._rotorEls.set(e.entity,t[s])})}_start(){if(this._rafId)return;let t=e=>{this._rafId=void 0,this._tick(e)};this._rafId=requestAnimationFrame(t)}_stop(){this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=void 0),this._lastTs=0}_tick(t){if(this.isConnected&&this._start(),!this.config||!this._rotorEls)return;let e=this._lastTs?t-this._lastTs:0;if(this._lastTs=t,e<=0)return;let s=this.config.speed_scale||1;for(let i of this.config.fans){let o=this.hass?.states?.[i.entity],n=o?parseFloat(o.state):NaN,l=this._rotorEls.get(i.entity),a=this._rotors[i.entity];!l||!a||!Number.isFinite(n)||n<=0||(a.angle=(a.angle+n*s*360*e/1e3)%360,l.setAttribute("transform",`rotate(${a.angle} 50 50)`))}}_handleFanClick(t){this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}};customElements.get("fan-card")||customElements.define("fan-card",L);window.customCards=window.customCards||[];window.customCards.some(r=>r.type==="fan-card")||window.customCards.push({type:"fan-card",name:"Fan Card (Hz)",description:"Noctua-style fans spinning at the real rate from a Hz sensor"});return Et(Ft);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
