import{j as e,r as l,I as rt,f as Ee,P as Ie,C as Ce,h as Pe,i as Le,k as lt,n as q,O as M,w as je,q as qe,R as Ue,x as le,l as H,y as it,z as ot,A as ct,m as xe,Z as he,o as ie,B as dt,D as ge,E as pt,p as ut,T as mt,G as ft,H as ze,a as He,u as bt}from"./index-P2NOgU5f.js";import{q as L}from"./qawm-model-dvUGH3gt.js";import{S as Oe,M as vt,P as xt,I as ht,T as gt,N as yt,a as jt,D as Nt}from"./Tune-CX2KKIKY.js";import{c as de,n as oe,F as G,S as St}from"./FormControl-DyHSzjl9.js";import{B}from"./dropdown.esm-m5jmjxza.js";import{P as wt,D as Re,C as O}from"./datatable.esm-DZFTTv4H.js";import{d as K,F as Ve}from"./FindRoomCard-Bx8WOS2A.js";import{B as Et}from"./badge.esm-CO9WCIdi.js";import{I as It,T as Ct,L as Pt,M as Rt}from"./inputswitch.esm-CISlTFdS.js";import{s as kt,f as De,W as te}from"./data-DJZQOe9g.js";import{i as Tt}from"./logo-data-url-D1qcISVS.js";import{c as Mt}from"./camelCase-Ctvswe2c.js";import{D as ke}from"./dialog.esm-3Cp5b_Tc.js";import{M as Ye}from"./ModalHeader-Cbh5zjSG.js";import{T as Je,a as ce}from"./tabview.esm-oKmeENfd.js";import{S as Ke}from"./SelectFromFloorPlan-q0d5YRgY.js";import"./_createAggregator-D3RNyrb2.js";import"./index.esm-B-ADObUs.js";import"./upperFirst-CygeGpjd.js";import"./capitalize-CJbizlXP.js";const Ot=async t=>{try{const[s,n,r]=await Promise.all([L.getServiceRequests(),L.getMoveRequests(),L.getLicenses(t)]);return[{header:"Service Request",key:"serviceRequest",value:(s==null?void 0:s.value)??{},count:(s==null?void 0:s.count)??0,icon:e.jsx(Oe,{}),url:"/dashboard/service",enabled:!0},{header:"Move Request",key:"moveRequest",value:(n==null?void 0:n.value)??{},count:(n==null?void 0:n.count)??0,icon:e.jsx(vt,{}),url:"/dashboard/moverequest",enabled:!0},{header:"Products & Services",key:"productsServices",value:{},count:0,icon:e.jsx(xt,{}),enabled:!1},{header:"Reservations",key:"reservations",value:r??{},count:(r==null?void 0:r.totalSize)??0,icon:e.jsx(Oe,{}),enabled:((r==null?void 0:r.totalSize)??0)>0}]}catch(s){return console.error("Failed to fetch request types:",s),[]}};function Ne(){return Ne=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ne.apply(null,arguments)}var Xe=l.memo(l.forwardRef(function(t,s){var n=rt.getPTI(t);return l.createElement("svg",Ne({ref:s,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),l.createElement("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"}))}));Xe.displayName="MinusIcon";function Se(){return Se=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Se.apply(null,arguments)}function Dt(t){if(Array.isArray(t))return t}function Ft(t,s){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,a,x,c,o=[],d=!0,m=!1;try{if(x=(n=n.call(t)).next,s!==0)for(;!(d=(r=x.call(n)).done)&&(o.push(r.value),o.length!==s);d=!0);}catch(S){m=!0,a=S}finally{try{if(!d&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(m)throw a}}return o}}function Fe(t,s){(s==null||s>t.length)&&(s=t.length);for(var n=0,r=Array(s);n<s;n++)r[n]=t[n];return r}function _t(t,s){if(t){if(typeof t=="string")return Fe(t,s);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fe(t,s):void 0}}function At(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(t,s){return Dt(t)||Ft(t,s)||_t(t,s)||At()}var ne=Ce.extend({defaultProps:{__TYPE:"Panel",id:null,header:null,headerTemplate:null,footer:null,footerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:null,collapseIcon:null,icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null,children:void 0},css:{classes:{root:function(s){var n=s.props;return q("p-panel p-component",{"p-panel-toggleable":n.toggleable})},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",togglerIcon:"p-panel-header-icon p-panel-toggler p-link",toggleableContent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer",transition:"p-toggleable-content"},styles:`
        @layer primereact {
            .p-panel-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .p-panel-title {
              line-height: 1;
            }
            
            .p-panel-header-icon {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              text-decoration: none;
              overflow: hidden;
              position: relative;
            }
        }
        `}}),Te=l.forwardRef(function(t,s){var n=Ee(),r=l.useContext(Ie),a=ne.getProps(t,r),x=l.useState(a.id),c=_e(x,2),o=c[0],d=c[1],m=l.useState(a.collapsed),S=_e(m,2),P=S[0],h=S[1],f=l.useRef(null),u=l.useRef(null),b=a.toggleable?a.onToggle?a.collapsed:P:!1,E=o+"_header",p=o+"_content",g=ne.setMetaData({props:a,state:{id:o,collapsed:b}}),y=g.ptm,j=g.cx,D=g.isUnstyled;Pe(ne.css.styles,D,{name:"panel"});var k=function(C){a.toggleable&&(b?N(C):i(C),C&&(a.onToggle&&a.onToggle({originalEvent:C,value:!b}),C.preventDefault()))},N=function(C){a.onToggle||h(!1),a.onExpand&&C&&a.onExpand(C)},i=function(C){a.onToggle||h(!0),a.onCollapse&&C&&a.onCollapse(C)};l.useImperativeHandle(s,function(){return{props:a,toggle:k,expand:N,collapse:i,getElement:function(){return f.current},getContent:function(){return u.current}}}),Le(function(){o||d(lt())});var v=function(){if(a.toggleable){var C=o+"_label",A=n({className:j("toggler"),onClick:k,id:C,"aria-controls":p,"aria-expanded":!b,type:"button",role:"button","aria-label":a.header},y("toggler")),T=n(y("togglericon")),z=b?a.expandIcon||l.createElement(wt,T):a.collapseIcon||l.createElement(Xe,T),V=qe.getJSXIcon(z,T,{props:a,collapsed:b});return l.createElement("button",A,V,l.createElement(Ue,null))}return null},I=function(){var C=M.getJSXElement(a.header,a),A=M.getJSXElement(a.icons,a),T=v(),z=n({id:E,className:j("title")},y("title")),V=l.createElement("span",z,C),Z=n({className:j("icons")},y("icons")),X=l.createElement("div",Z,A,T),fe=n({className:j("header")},y("header")),ee=l.createElement("div",fe,V,X);if(a.headerTemplate){var be={className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",onTogglerClick:k,titleElement:V,iconsElement:X,togglerElement:T,element:ee,id:o+"_header",props:a,collapsed:b};return M.getJSXElement(a.headerTemplate,be)}else if(a.header||a.toggleable)return ee;return null},$=function(){var C=M.getJSXElement(a.footer,a),A=n({className:j("footer")},y("footer")),T=l.createElement("div",A,C);if(a.footerTemplate){var z={className:j("footer"),element:T,props:a};return M.getJSXElement(a.footerTemplate,z)}else if(a.footer)return T;return null},F=function(){var C=n({ref:u,className:j("toggleableContent"),"aria-hidden":b,role:"region",id:p,"aria-labelledby":E},y("toggleablecontent")),A=n({className:j("content")},y("content")),T=n({classNames:j("transition"),timeout:{enter:1e3,exit:450},in:!b,unmountOnExit:!0,options:a.transitionOptions},y("transition"));return l.createElement(je,Se({nodeRef:u},T),l.createElement("div",C,l.createElement("div",A,a.children)))},pe=n({id:o,ref:f,style:a.style,className:q(a.className,j("root"))},ne.getOtherProps(a),y("root")),U=I(),ue=F(),me=$();return l.createElement("div",pe,U,ue,me)});Te.displayName="Panel";const se=({header:t,children:s,className:n,maximize:r=H.noop,description:a="",tools:x="",ref:c})=>e.jsx(Te,{ref:c,className:de("ux-collapsible-panel",n),collapseIcon:le.ANGLE_DOWN,expandIcon:le.ANGLE_UP,header:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h3",{className:"text-xl",children:t}),e.jsx(B,{severity:"secondary",size:"small",icon:"pi pi-arrow-up-right",onClick:r,rounded:!0,text:!0})]}),e.jsx("p",{className:"text-sm font-normal expanded-info",children:a})]}),x]}),toggleable:!0,children:s}),Bt=({data:t,ref:s,onNavigate:n=oe})=>{const r=(a=[])=>a.length;return e.jsx(Te,{ref:s,collapseIcon:le.ANGLE_DOWN,expandIcon:le.ANGLE_UP,className:"ux-request-card",header:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"ux-bg-blue rounded-full text-white",children:e.jsx("span",{className:"w-8 h-8  flex justify-center items-center",children:t.icon})}),e.jsxs("div",{className:"flex-1 flex items-center justify-between pr-2",children:[e.jsxs("span",{className:"ml-2",children:[" ",t.header]}),e.jsxs("div",{className:"flex items-center collapsed-info",children:[e.jsx("span",{className:"mr-2",children:t.count}),e.jsx(B,{icon:"pi pi-plus",rounded:!0,outlined:!0,className:"ux-plus-button",onClick:()=>n(t)})]})]})]}),toggleable:!0,children:e.jsxs("div",{className:"-mx-1",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"text-5xl font-semibold",children:t.count}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-sm",children:"Total Requests "}),e.jsx(B,{severity:"secondary",size:"small",icon:"pi pi-arrow-up-right",rounded:!0,text:!0})]})]}),e.jsx("div",{className:"flex items-end",children:e.jsx(B,{label:"Add",size:"small",outlined:!0,className:"size-sm",onClick:()=>n(t)})})]}),e.jsx("div",{className:"bg-white rounded",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"border border-gray-200 rounded px-2 py-1",children:[e.jsx("p",{className:"font-semibold",children:r(t.value.Completed)})," ",e.jsx("p",{className:"text-sm",children:"Request Resolved"})]}),e.jsxs("div",{className:"border border-gray-200 rounded px-2 py-1",children:[e.jsx("p",{className:"font-semibold",children:r(t.value.Draft)})," ",e.jsx("p",{className:"text-sm",children:"Request Draft"})]}),e.jsxs("div",{className:"border border-gray-200 rounded px-2 py-1",children:[e.jsxs("p",{className:"font-semibold",children:[r(t.value["Review In Progress"])," "]}),e.jsx("p",{className:"text-sm",children:"Request Pending"})]}),e.jsxs("div",{className:"border border-gray-200 rounded px-2 py-1",children:[e.jsxs("p",{className:"font-semibold",children:[r(t.value.Issued)," "]}),e.jsx("p",{className:"text-sm",children:" Request In-Progress"})]})]})})]})})},$t=({items:t=[],selected:s,setSelected:n=H.noop})=>e.jsx("div",{className:"w-[8.75rem] flex border-1 border-gray-300 rounded-lg p-1 mr-2",children:t.map(r=>e.jsx(B,{label:r,className:de("ux-tabs size-sm",{"ux-tabs--active":s===r}),text:s!==r,onClick:()=>n(r)},r))}),Lt=({actionItems:t=[],itemClick:s=noop})=>e.jsxs(Re,{value:t.slice(0,5),size:"small",className:"text-xs -mb-2",children:[e.jsx(O,{className:"text-sm",field:"action",header:"Record Name"}),e.jsx(O,{className:"text-sm",header:"Status",body:n=>e.jsx(Et,{value:n.status,severity:"secondary",className:"text-xs"})}),e.jsx(O,{className:"text-sm",header:"Due",body:n=>e.jsx("span",{children:K(n.dueDate).format("MMM DD, YYYY")})}),e.jsx(O,{className:"text-sm",header:"Action",body:n=>e.jsx(B,{icon:"pi pi-plus",rounded:!0,outlined:!0,className:"ux-plus-button",onClick:()=>s(n),disabled:!/Evaluation/.test(n.action)})})]}),qt=({events:t=[],maximize:s=oe})=>e.jsx("div",{className:"w-full",children:(t??[]).slice(0,3).map(n=>e.jsx("div",{className:"text-sm border-b border-gray-100 hover:bg-gray-50 cursor-pointer",onClick:()=>s(n),children:e.jsxs("div",{className:"flex items-center px-4 py-3",children:[e.jsx("div",{className:"w-12 h-12 rounded bg-blue-100 flex items-center justify-center",children:e.jsx("span",{className:"text-lg text-center leading-none text-gray-700",children:K(n.moveDate).format("MMM YY")})}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"font-semibold",children:n.moveReason.value}),e.jsxs("p",{children:["For: ",n.requestedFor.value]})]})]})},n._id))});function J(){return J=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},J.apply(null,arguments)}function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Q(t)}function Ut(t,s){if(Q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,s);if(Q(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}function zt(t){var s=Ut(t,"string");return Q(s)=="symbol"?s:s+""}function Ht(t,s,n){return(s=zt(s))in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}function Vt(t){if(Array.isArray(t))return t}function Yt(t,s){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,a,x,c,o=[],d=!0,m=!1;try{if(x=(n=n.call(t)).next,s!==0)for(;!(d=(r=x.call(n)).done)&&(o.push(r.value),o.length!==s);d=!0);}catch(S){m=!0,a=S}finally{try{if(!d&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(m)throw a}}return o}}function Ae(t,s){(s==null||s>t.length)&&(s=t.length);for(var n=0,r=Array(s);n<s;n++)r[n]=t[n];return r}function Jt(t,s){if(t){if(typeof t=="string")return Ae(t,s);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ae(t,s):void 0}}function Kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(t,s){return Vt(t)||Yt(t,s)||Jt(t,s)||Kt()}var Xt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(s){var n=s.props,r=s.maskVisibleState,a=["left","right","top","bottom"],x=a.find(function(c){return c===n.position});return q("p-sidebar-mask",x&&!n.fullScreen?"p-sidebar-".concat(x):"",{"p-component-overlay p-component-overlay-enter":n.modal,"p-sidebar-mask-scrollblocker":n.blockScroll,"p-sidebar-visible":r,"p-sidebar-full":n.fullScreen},n.maskClassName)},header:function(s){var n=s.props;return q("p-sidebar-header",{"p-sidebar-custom-header":n.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(s){s.props;var n=s.context;return q("p-sidebar p-component",{"p-input-filled":n&&n.inputStyle==="filled"||ie.inputStyle==="filled","p-ripple-disabled":n&&n.ripple===!1||ie.ripple===!1})},transition:"p-sidebar"},Gt=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,Qt={mask:function(s){var n=s.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n.position==="left"?"flex-start":n.position==="right"?"flex-end":"center",alignItems:n.position==="top"?"flex-start":n.position==="bottom"?"flex-end":"center"}}},ae=Ce.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:Xt,styles:Gt,inlineStyles:Qt}});function Be(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);s&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Wt(t){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?Be(Object(n),!0).forEach(function(r){Ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var Ge=l.forwardRef(function(t,s){var n=Ee(),r=l.useContext(Ie),a=ae.getProps(t,r),x=l.useState(!1),c=ye(x,2),o=c[0],d=c[1],m=l.useState(!1),S=ye(m,2),P=S[0],h=S[1],f=ae.setMetaData({props:a,state:{containerVisible:o}}),u=f.ptm,b=f.cx,E=f.sx,p=f.isUnstyled;Pe(ae.css.styles,p,{name:"sidebar"});var g=l.useRef(null),y=l.useRef(null),j=l.useRef(null),D=P&&a.closeOnEscape,k=it("sidebar",D);ot({callback:function(w){U(w)},when:D&&k,priority:[ft.SIDEBAR,k]});var N=ct({type:"click",listener:function(w){w.button===0&&$(w)&&U(w)}}),i=ye(N,2),v=i[0],I=i[1],$=function(w){return g&&g.current&&!g.current.contains(w.target)},F=function(){var w=document.activeElement,Y=w&&g&&g.current.contains(w);!Y&&a.showCloseIcon&&j.current&&j.current.focus()},pe=function(w){a.dismissable&&a.modal&&y.current===w.target&&U(w)},U=function(w){a.onHide(),w.preventDefault()},ue=function(){a.onShow&&a.onShow(),F(),C()},me=function(){a.modal&&!p()&&ge.addClass(y.current,"p-component-overlay-leave")},_=function(){he.clear(y.current),d(!1),A()},C=function(){a.dismissable&&!a.modal&&v(),a.blockScroll&&ge.blockBodyScroll()},A=function(){I(),a.blockScroll&&ge.unblockBodyScroll()};l.useImperativeHandle(s,function(){return{props:a,getElement:function(){return g.current},getMask:function(){return y.current},getCloseIcon:function(){return j.current}}}),Le(function(){a.visible&&d(!0)}),xe(function(){a.visible&&!o&&d(!0),a.visible!==P&&o&&h(a.visible)},[a.visible,o,P]),xe(function(){o&&(he.set("modal",y.current,r&&r.autoZIndex||ie.autoZIndex,a.baseZIndex||r&&r.zIndex.modal||ie.zIndex.modal),h(!0))},[o]),xe(function(){P&&(I(),a.dismissable&&!a.modal&&v())},[a.dismissable,a.modal,P]),dt(function(){A(),y.current&&he.clear(y.current)});var T=function(){var w=n({type:"button",ref:j,className:b("closeButton"),onClick:function(at){return U(at)},"aria-label":a.ariaCloseLabel||ut("close")},u("closeButton")),Y=n({className:b("closeIcon")},u("closeIcon")),ve=a.closeIcon||l.createElement(mt,Y),st=qe.getJSXIcon(ve,Wt({},Y),{props:a});return a.showCloseIcon?l.createElement("button",w,st,l.createElement(Ue,null)):null},z=function(){return a.header?M.getJSXElement(a.header,a):null},V=function(){return a.icons?M.getJSXElement(a.icons,a):null},Z=n({ref:y,style:E("mask"),className:b("mask",{maskVisibleState:o}),onMouseDown:function(w){return pe(w)}},u("mask")),X=n({id:a.id,className:q(a.className,b("root",{context:r})),style:a.style,role:"complementary"},ae.getOtherProps(a),u("root")),fe=n({className:b("header")},u("header")),ee=n({className:b("content")},u("content")),be=n({className:b("icons")},u("icons")),Ze={enter:a.fullScreen?150:300,exit:a.fullScreen?150:300},Me=n({classNames:b("transition"),in:P,timeout:Ze,options:a.transitionOptions,unmountOnExit:!0,onEntered:ue,onExiting:me,onExited:_},u("transition")),et=function(){var w={closeIconRef:j,hide:U};return l.createElement("div",Z,l.createElement(je,J({nodeRef:g},Me),l.createElement("div",J({ref:g},X),M.getJSXElement(t.content,w))))},tt=function(){var w=T(),Y=V(),ve=z();return l.createElement("div",Z,l.createElement(je,J({nodeRef:g},Me),l.createElement("div",J({ref:g},X),l.createElement("div",fe,ve,l.createElement("div",be,Y,w)),l.createElement("div",ee,a.children))))},nt=function(){var w=t!=null&&t.content?et():tt();return l.createElement(pt,{element:w,appendTo:a.appendTo,visible:!0})};return o&&nt()});Ge.displayName="Sidebar";const Qe=()=>window.innerWidth<=768,Zt=({header:t,onToggle:s=oe,homeClick:n=oe})=>{const[r,a]=l.useState(!0),[x,c]=l.useState(!1),[o,d]=l.useState(kt),m=new Date().getHours(),S=m<12?"Good Morning":m<17?"Good Afternoon":"Good Evening",P=f=>{a(f.value),s(f)},h={dashboard:e.jsx(Nt,{}),comments:e.jsx(jt,{}),notifications:e.jsx(yt,{}),personalization:e.jsx(gt,{}),servery:e.jsx(ht,{})};return l.useEffect(()=>{function f(b,E){for(let p of b){if(p.icon=h[Mt(p.label)]||p.icon,p.id===E)return p;if(p.items){const g=f(p.items,E);if(g)return g}}}const u=f(o,"userName");u.label=t.name,d([...o])},[t.name]),l.useEffect(()=>{a(!Qe())},[]),e.jsxs("div",{className:"w-full flex",children:[e.jsx("div",{className:"mb-4 md:hidden mr-4",children:e.jsx(B,{icon:"pi pi-bars",style:{width:"3rem"},onClick:()=>c(!0)})}),e.jsxs("div",{className:"w-full flex flex-col md:flex-row justify-between mb-4",children:[e.jsxs("div",{className:"",children:[e.jsx("p",{children:t.parentOrg}),e.jsxs("h3",{className:"text-xl",children:[S,", ",t.name]})]}),e.jsxs("span",{className:"flex-1 md:flex-none flex items-center",children:[e.jsx("span",{className:"mr-4 text-xs text-gray-500 flex-1 md:inline",children:K().format("DD MMM, YYYY")}),e.jsx(It,{checked:r,onChange:P}),e.jsxs("span",{className:"ml-2 text-sm",children:[r?"Expanded":"Collapsed"," View"]})]})]}),e.jsx(Ge,{style:{width:"15rem"},header:()=>e.jsxs("a",{className:"flex justify-center items-center py-2",onClick:n,children:[e.jsx("img",{src:Tt,className:"h-8 w-8"}),e.jsx("span",{className:"font-semibold ml-2 text-sm",children:"QAWM UX App"})]}),className:"ux-mobile-sidebar",visible:x,onHide:()=>c(!1),children:e.jsx(Ct,{model:o,breakpoint:"767px"})})]})},en=({items:t,value:s,onChange:n})=>e.jsx(Pt,{value:s,onChange:n,options:t,optionLabel:"name",itemTemplate:r=>e.jsxs("div",{className:"flex align-center",children:[e.jsx("div",{className:"rounded mr-2 bg-blue-400",children:e.jsx("div",{className:"w-10 h-10 flex justify-center items-center",children:e.jsx("i",{className:de(["text-white",r.icon])})})}),e.jsxs("div",{className:"flex flex-col pl-2",children:[e.jsx("span",{className:"text-sm",children:r.name}),e.jsx("span",{className:"text-xs",children:r.desc})]})]}),className:"ux-find-listbox",listStyle:{maxHeight:"250px"}}),tn=[{type:"dropdown",label:"Seach By Building Name or City",placeholder:"Select Building",id:"selectBuilding",className:"w-full md:w-1/2",filter:!0,required:!0},{type:"dropdown",placeholder:"Select",label:"Select Floor",id:"selectFloor",filter:!0},{type:"dropdown",placeholder:"Select",label:"Room Name Or Number",id:"selectRoom",filter:!0}],nn=()=>{const[t,s]=l.useState(tn),[n,r]=l.useState(),[a,x]=l.useState([]),[c,o]=l.useState(),[d,m]=l.useState(),[S,P]=l.useState([]),[h,f]=l.useState(),[u,b]=l.useState({global:{value:null,matchMode:ze.CONTAINS}}),E=async N=>{m(N?await TriFloorPlanAPI.getFloorplanId(N):null)},p=async()=>{const N=await appModel.getRecord("peopleRecords");x(N.data)},g=N=>{const i=N.target.value;u.global.value=i,f(i),b({...u})},y=async N=>{const{value:i,target:v}=N;if(t.find(I=>I.id===v.id).value=i,v.id==="selectBuilding"){const I=await D(i._id);t.find($=>$.id==="selectFloor").values=I,o(i)}if(v.id==="selectFloor"){const I=t.find(F=>F.id==="selectBuilding").value,$=await k(I._id,i._id);t.find(F=>F.id==="selectRoom").values=$,E(i._id),r(a.filter(F=>F.building===I.building&&i.floor===F.floor.value))}s([...t])};async function j(){try{const i=((await appModel.getRecord("lookupBuilding")).data??[]).map(I=>({...I,name:`${I.building} (${I.property})`})),v=t.find(I=>I.id==="selectBuilding");v.values=i,s([...t])}catch(N){console.error("Error fetching buildings:",N)}}l.useEffect(()=>{j(),p()},[]);const D=async N=>{try{return(await appModel.getRecord(`lookupBuilding/${N}/buildingFloors`)).data.map(v=>({...v,name:`Floor ${v.level}: ${v.floor}`}))}catch(i){console.error("Error fetching floors:",i)}},k=async(N,i)=>{try{return(await appModel.getRecord(`lookupBuilding/${N}/buildingFloors/${i}/floorRooms`)).data.map(I=>({...I,name:I.space}))}catch(v){console.error("Error fetching rooms:",v)}};return l.useEffect(()=>{c&&P([{icon:"pi pi-building"},{label:"Building Name",desc:c.building},{label:"Building ID",desc:c.buildingId}])},[c]),e.jsxs("div",{children:[e.jsx(G,{...t[0],onChange:y}),c&&e.jsx(Ve,{items:S}),e.jsx("div",{className:"grid grid-cols-2 gap-4",hidden:!c,children:t.slice(1).map(N=>l.createElement(G,{...N,key:N.id,onChange:y}))}),e.jsxs(Je,{hidden:!c,children:[e.jsx(ce,{header:"Location",children:d?e.jsx(Ke,{floorPlanId:d}):e.jsx("h3",{children:"Floor plan is not available."})}),e.jsxs(ce,{header:"Floor Directory",children:[e.jsx(G,{type:"text",value:h,className:"mb-4 w-84",placeholder:"Search by Employee, Room, Job Title",onChange:g}),e.jsxs(Re,{value:n,className:"ux-table-sm",size:"small",paginator:!0,rows:5,dataKey:"id",filters:u,rowsPerPageOptions:[5,10,25,50],globalFilterFields:["name","space","title"],children:[e.jsx(O,{field:"recordId",header:"ID"}),e.jsx(O,{field:"name",header:"Name of the Employee"}),e.jsx(O,{field:"space",header:"Room"}),e.jsx(O,{field:"title",header:"Job Title"})]})]})]})]})},sn=()=>{const[t,s]=l.useState([]),[n,r]=l.useState(),[a,x]=l.useState([]),[c,o]=l.useState(),[d,m]=l.useState(),[S,P]=l.useState(),[h,f]=l.useState({global:{value:null,matchMode:ze.CONTAINS}}),u=async()=>{const p=await appModel.getRecord("peopleRecords");s(p.data)},b=async p=>{o(p?await TriFloorPlanAPI.getFloorplanId(p):null)},E=p=>{const g=p.target.value;h.global.value=g,P(g),f({...h})};return l.useEffect(()=>{u()},[]),l.useEffect(()=>{var p;n&&(x([{label:n.name,desc:n.organization,icon:"pi pi-user"},{label:`Phone: ${n.workPhone}`,desc:`Email ID: ${n.email}`,icon:"pi pi-id-card"},{label:n.building,desc:n.space,icon:"pi pi-building"}]),b((p=n.floor)==null?void 0:p.id),m(t.filter(g=>{var y,j;return g.building===n.building&&((y=n.floor)==null?void 0:y.value)&&((j=n.floor)==null?void 0:j.value)})))},[n]),e.jsxs("div",{children:[e.jsx(G,{required:!0,filter:!0,value:n,type:"dropdown",values:t,className:"max-w-96",onChange:p=>r(p.value),label:"Search by Person's Name",placeholder:"Select Person"}),n&&e.jsx(Ve,{items:a}),e.jsxs(Je,{hidden:!n,children:[e.jsx(ce,{header:"Location",children:c?e.jsx(Ke,{floorPlanId:c}):e.jsx("h3",{children:"Floor plan is not available."})}),e.jsxs(ce,{header:"Floor Directory",children:[e.jsx(G,{type:"text",value:S,className:"mb-4 w-84",placeholder:"Search by Employee, Room, Job Title",onChange:E}),e.jsxs(Re,{value:d,className:"ux-table-sm",size:"small",paginator:!0,rows:5,dataKey:"id",filters:h,rowsPerPageOptions:[5,10,25,50],globalFilterFields:["name","space","title"],children:[e.jsx(O,{field:"recordId",header:"ID"}),e.jsx(O,{field:"name",header:"Name of the Employee"}),e.jsx(O,{field:"space",header:"Room"}),e.jsx(O,{field:"title",header:"Job Title"})]})]})]})]})},an=({visible:t,onHide:s=H.noop,onSubmit:n=H.noop,activeTab:r="Person"})=>{const[a,x]=l.useState({label:r}),c=(m,S)=>e.jsx(B,{className:"ux-find-tabs",icon:m.icon,label:m.label,onClick:S.onClick,outlined:m.label!==a.label}),o=l.useCallback(m=>{console.log("Menu clicked",m.item),x(m.item)},[]),d=[{label:"Person",icon:"pi pi-user",template:c,command:o},{label:"Room",icon:"pi pi-home",template:c,command:o}];return e.jsx(ke,{header:e.jsx(Ye,{header:"Find",description:"Person & Room"}),visible:t,position:"right",className:"h-screen w-full max-w-[64rem]",onHide:s,draggable:!1,resizable:!1,children:e.jsxs("div",{className:"flex h-full",children:[e.jsx("div",{className:"bg-gray-100 p-2",children:e.jsx(Rt,{className:"ux-find-menu",model:d})}),e.jsx("div",{className:"flex-1 p-4",children:e.jsxs(St,{test:a.label,children:[e.jsx(sn,{type:"Person"}),e.jsx(nn,{type:"Room"})]})})]})})},rn=({visible:t,onHide:s=H.noop,onChange:n=H.noop})=>{const r=()=>Array.from({length:5}).map((h,f)=>({rating:++f,active:!1})),[a,x]=l.useState([]),[c,o]=l.useState(!1),d=He(),m=async(h="145336150")=>{const f=await appModel.getRecord(`qsGeneralEvaluationSurveyTemplateData/${h}/surveyResponseQuestionAssociated`);console.log(f.data),x(f.data.map(u=>({...u,ratings:r(),selectedRating:null})))},S=(h,f)=>()=>{x(a.map(u=>(u.recordId===h.recordId&&(u.selectedRating=f.rating,u.ratings=u.ratings.map(b=>(b.active=b.rating===f.rating,b))),u)))},P=async()=>{o(!0);for await(let h of a){const f=await appModel.getRecord(`qsSurveyResponseData/${h.recordId}`);f.data.surveyResponse=h.selectedRating,await appModel.updateRecord("qsSurveyResponseData",f.data,null,!0,"surveyResponseGroup","captureResponse")}o(!1),d.setToast("success","Survey submitted successfully!")};return l.useEffect(()=>{var h,f,u,b;(f=(h=d.activeSurvey)==null?void 0:h.record)!=null&&f.id&&m((b=(u=d.activeSurvey)==null?void 0:u.record)==null?void 0:b.id)},[d.activeSurvey]),e.jsxs(ke,{header:e.jsx(Ye,{header:"Survey Question"}),visible:t,position:"right",className:"h-screen w-full max-w-[40rem] ux-modal",onHide:s,draggable:!1,resizable:!1,blockScroll:!0,footer:e.jsx("div",{className:"flex justify-end items-center pt-6 border-t border-gray-200",children:e.jsx(B,{label:"Submit",onClick:P,loading:c})}),children:[e.jsxs("div",{className:"py-4",children:[e.jsx("h3",{children:"Survey Name"}),e.jsx("p",{className:"text-xs text-gray-400 font-normal",children:"Survey Number 1"})]}),a.map((h,f)=>e.jsxs("div",{className:"border-b border-gray-100 mb-4",children:[e.jsxs("p",{className:"text-xs text-gray-400 font-normal mb-2",children:["Question No. ",f+1]}),e.jsx("h3",{className:"font-semibold mb-4",children:h.question}),e.jsxs("div",{className:"max-w-[30rem]",children:[e.jsx("div",{className:"grid grid-cols-5 gap-4",children:h.ratings.map(u=>e.jsx(B,{label:u.rating,outlined:!u.active,className:"!py-3 !rounded-lg",onClick:S(h,u)},u.rating))}),e.jsxs("div",{className:"flex justify-between text-xs my-4",children:[e.jsx("span",{children:"Not Satisfied"}),e.jsx("span",{children:"Very Satisfied"})]})]})]},h.recordId))]})};function we(){return we=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},we.apply(null,arguments)}function W(t){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},W(t)}function ln(t,s){if(W(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,s);if(W(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}function on(t){var s=ln(t,"string");return W(s)=="symbol"?s:s+""}function $e(t,s,n){return(s=on(s))in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}var re=Ce.extend({defaultProps:{__TYPE:"Timeline",align:"left",className:null,content:null,dataKey:null,layout:"vertical",marker:null,opposite:null,value:null,children:void 0},css:{classes:{marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",content:"p-timeline-event-content",root:function(s){var n=s.props;return q("p-timeline p-component",$e($e({},"p-timeline-".concat(n.align),!0),"p-timeline-".concat(n.layout),!0),n.className)}},styles:`
        @layer primereact {
            .p-timeline {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
            }
        
            .p-timeline-left .p-timeline-event-opposite {
                text-align: right;
            }
        
            .p-timeline-left .p-timeline-event-content {
                text-align: left;
            }
        
            .p-timeline-right .p-timeline-event {
                flex-direction: row-reverse;
            }
        
            .p-timeline-right .p-timeline-event-opposite {
                text-align: left;
            }
        
            .p-timeline-right .p-timeline-event-content {
                text-align: right;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
                flex-direction: row-reverse;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
                text-align: right;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
                text-align: left;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
                text-align: left;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
                text-align: right;
            }
        
            .p-timeline-event {
                display: flex;
                position: relative;
                min-height: 70px;
            }
        
            .p-timeline-event:last-child {
                min-height: 0;
            }
        
            .p-timeline-event-opposite {
                flex: 1;
                padding: 0 1rem;
            }
        
            .p-timeline-event-content {
                flex: 1;
                padding: 0 1rem;
            }
        
            .p-timeline-event-separator {
                flex: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        
            .p-timeline-event-marker {
                display: flex;
                align-self: baseline;
            }
        
            .p-timeline-event-connector {
                flex-grow: 1;
            }
        
            .p-timeline-horizontal {
                flex-direction: row;
            }
        
            .p-timeline-horizontal .p-timeline-event {
                flex-direction: column;
                flex: 1;
            }
        
            .p-timeline-horizontal .p-timeline-event:last-child {
                flex: 0;
            }
        
            .p-timeline-horizontal .p-timeline-event-separator {
                flex-direction: row;
            }
        
            .p-timeline-horizontal .p-timeline-event-connector  {
                width: 100%;
            }
        
            .p-timeline-bottom .p-timeline-event {
                flex-direction: column-reverse;
            }
        
            .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
                flex-direction: column-reverse;
            }
        }
    `}}),We=l.memo(l.forwardRef(function(t,s){var n=Ee(),r=l.useContext(Ie),a=re.getProps(t,r),x=re.setMetaData({props:a}),c=x.ptm,o=x.cx,d=x.isUnstyled;Pe(re.css.styles,d,{name:"timeline"});var m=function(E,p){return c(E,{context:{index:p}})},S=l.useRef(null),P=function(E,p){return a.dataKey?M.resolveFieldData(E,a.dataKey):"pr_id__".concat(p)},h=function(){return a.value&&a.value.map(function(E,p){var g=M.getJSXElement(a.opposite,E,p),y=n({className:o("marker")},m("marker",p)),j=M.getJSXElement(a.marker,E,p)||l.createElement("div",y),D=n({className:o("connector")},m("connector",p)),k=p!==a.value.length-1&&l.createElement("div",D),N=M.getJSXElement(a.content,E,p),i=n({className:o("event")},m("event",p)),v=n({className:o("opposite")},m("opposite",p)),I=n({className:o("separator")},m("separator",p)),$=n({className:o("content")},m("content",p));return l.createElement("div",we({key:P(E,p)},i),l.createElement("div",v,g),l.createElement("div",I,j,k),l.createElement("div",$,N))})};l.useImperativeHandle(s,function(){return{props:a,getElement:function(){return S.current}}});var f=h(),u=n({ref:S,className:q(a.className,o("root"))},re.getOtherProps(a),c("root"));return l.createElement("div",u,f)}));We.displayName="Timeline";const cn=({header:t,visible:s,requestId:n,onHide:r=H.noop})=>{const[a,x]=l.useState({}),c=async d=>{const m=await appModel.getRecord(`qsServiceRequest/${d}`);x(m.data)};l.useEffect(()=>{c(n)},[n]);const o=[{status:"Issue Raised",date:"01/14/2025 11:36:40",icon:"pi pi-file",color:"#0096FF",desc:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"font-semibold",children:"Raised by : You (Business User)"}),e.jsx("p",{className:"text-xs text-gray-700 mt-1",children:"This Request Is Raised For The Lighting Outlet In 8th Floor, C Block"})]})},{status:"Approved",date:"01/14/2025 13:36:40",icon:"pi pi-check-square",color:"#0C7453",desc:e.jsx(e.Fragment,{children:e.jsx("p",{className:"font-semibold",children:"Approved by : Kevin Karan (Service Manager)"})})},{status:"In Progress",date:"01/14/2025 16:36:40",icon:"pi pi-cog",color:"#D88C0C",desc:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"font-semibold",children:"Person In charge : Joe Smith (Service Technician)"}),e.jsxs("button",{className:"bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 mt-3 rounded",children:[e.jsx("i",{className:"pi pi-bell mr-1"}),"Notify"]})]})}];return e.jsxs(ke,{header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-sm font-semibold",children:["Request ID : ",a.requestId]}),e.jsxs("div",{className:"text-xs text-gray-500",children:["Created On: ",K(a.createdOn).format("MM/DD/YYYY")]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("i",{className:"pi pi-download text-sm cursor-pointer"}),e.jsxs("span",{className:"text-xs text-orange-500 bg-orange-100 px-2 py-1 rounded-md",children:["Request issued - ",a.status]})]})]}),position:"right",visible:s,className:"ux-timeline-modal",onHide:r,draggable:!1,resizable:!1,children:[e.jsx("div",{className:"border-b border-gray-200 mb-4"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"Request classification"}),e.jsx("p",{className:"text-xs font-semibold",children:a.requestClassification})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"Request for"}),e.jsx("p",{className:"text-xs font-semibold",children:a.requestedFor})]})]}),e.jsx("div",{className:"border-b border-gray-200 my-2"}),e.jsxs("div",{className:"p-5 mt-6",children:[e.jsx(We,{align:"left",className:"custom-timeline !dotted-timeline",value:o,opposite:d=>e.jsx("div",{className:"font-medium text-sm text-gray-600",children:d.status}),marker:d=>e.jsx("span",{className:"text-white w-10 h-10 rounded-full flex justify-center items-center",style:{backgroundColor:d.color},children:e.jsx("i",{className:d.icon})}),content:d=>e.jsxs("div",{className:"rounded-xl px-4 py-3 mb-8 w-[37vh]",children:[e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("h3",{className:"font-semibold text-sm",children:d.status}),e.jsx("span",{className:"text-xs text-gray-500",children:d.date})]}),e.jsx("div",{className:"text-xs text-gray-700",children:d.desc})]})}),e.jsx("div",{className:"text-center mt-6 text-xs text-gray-500",children:"End Of The Line"})]})]})},Tn=()=>{var D,k,N;const t=He(),s=bt(),[n,r]=l.useState([]),[a,x]=l.useState([]),[c,o]=l.useState("All"),d=Array.from({length:4}).map(()=>l.useRef(null)),m=i=>{d.forEach(v=>i.value?v.current.expand():v.current.collapse())},S=(i,v)=>()=>{t.setStateValue(i,v)},P=async()=>{const i=t.actionItems??await L.getActionItems();t.setStateValue("actionItems",i)},h=async()=>{x([De.person(await L.getPersonCount()),De.room(await L.getRoomCount())])},f=async()=>{const i=t.currentUser??await L.getCurrentUser(),v=t.userInfo??await L.getUserInfo(i.recordId);t.setCurrentUser(i),t.setUserInfo(v)},u=i=>{var v;t.setState({findPersonModal:!0,activeFindTab:(v=i==null?void 0:i.value)==null?void 0:v.name})},b=async i=>{r(await Ot(i))},E=async()=>{const i=t.calendarEvents??await L.getCalendarEvents();t.setCalendarEvents(i)},p=i=>{t.setStateValue("activeRequest",i.key),s(i.url)},g=i=>t.activeWidgets[i],y=i=>{t.setState({surveyModal:!0,activeSurvey:i})};l.useEffect(()=>{f(),P(),h(),E()},[]),l.useEffect(()=>{var i,v;(i=t.currentUser)!=null&&i.recordId&&b((v=t.currentUser)==null?void 0:v.recordId)},[t.currentUser]),l.useEffect(()=>{m({value:!Qe()})},[]);const j=l.useMemo(()=>{const i=t.actionItems??[];return c==="All"?i:c==="Today"?i.filter(v=>K(v.dueDate).isSame(K(),"day")):i},[t.actionItems,c]);return e.jsxs("div",{className:"p-4 lg:py-8 lg:px-12",children:[e.jsx(Zt,{header:{parentOrg:(D=t.userInfo)==null?void 0:D.parentOrg,name:(k=t.currentUser)==null?void 0:k.name},onToggle:m}),e.jsx(se,{header:"Request Types",className:de("mb-4",{hidden:!g(te.REQUEST_TYPES)}),ref:d[0],children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-4",children:n.filter(i=>i.enabled).map(i=>e.jsx(Bt,{data:i,ref:i.ref,onNavigate:p},i.key))})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-4",children:[e.jsx("div",{className:"md:col-span-3 lg:col-span-4",hidden:!g(te.ACTIION_ITEMS),children:e.jsx(se,{ref:d[1],maximize:console.log,header:`Action items(${j==null?void 0:j.length})`,tools:e.jsx($t,{items:["All","Today"],selected:c,setSelected:o}),children:e.jsx(Lt,{actionItems:j,itemClick:y})})}),e.jsx("div",{className:"md:col-span-3 lg:col-span-3 md:order-1 lg:order-0",hidden:!g(te.CALENDAR),children:e.jsx(se,{ref:d[2],maximize:()=>s("calendar"),header:"Calendar",description:`Upcoming Requests (${(N=t.calendarEvents)==null?void 0:N.length})`,children:e.jsx(qt,{events:t.calendarEvents,maximize:()=>s("calendar")})})}),e.jsx("div",{className:"md:col-span-2  lg:col-span-2",hidden:!g(te.FIND),children:e.jsxs(se,{maximize:S("findPersonModal",!0),ref:d[3],header:"Find",children:[e.jsx(en,{items:a,onChange:u}),e.jsx("div",{className:"h-30"})]})})]}),e.jsx(an,{items:[],onChange:console.log,visible:t.findPersonModal,onHide:S("findPersonModal",!1),activeTab:t.activeFindTab}),e.jsx(cn,{visible:t.timelineModal,onHide:S("timelineModal",!1),requestId:145307411}),e.jsx(rn,{onChange:console.log,visible:t.surveyModal,onHide:S("surveyModal",!1)})]})};export{Tn as default};
