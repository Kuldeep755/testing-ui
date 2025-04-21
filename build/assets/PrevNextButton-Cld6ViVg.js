import{r as c,f as me,P as fe,C as ve,h as de,i as ye,n as P,O as H,q as be,D as B,k as ge,j as T}from"./index-P2NOgU5f.js";import{B as M}from"./dropdown.esm-m5jmjxza.js";import{n as Ie}from"./FormControl-DyHSzjl9.js";function C(){return C=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)({}).hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},C.apply(null,arguments)}function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(t)}function Pe(t,n){if(S(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,n);if(S(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Se(t){var n=Pe(t,"string");return S(n)=="symbol"?n:n+""}function he(t,n,r){return(n=Se(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Oe(t){if(Array.isArray(t))return t}function je(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var s,o,h,f,p=[],b=!0,g=!1;try{if(h=(r=r.call(t)).next,n!==0)for(;!(b=(s=h.call(r)).done)&&(p.push(s.value),p.length!==n);b=!0);}catch(I){g=!0,o=I}finally{try{if(!b&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(g)throw o}}return p}}function L(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,s=Array(n);r<n;r++)s[r]=t[r];return s}function xe(t,n){if(t){if(typeof t=="string")return L(t,n);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,n):void 0}}function Ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(t,n){return Oe(t)||je(t,n)||xe(t,n)||Ee()}var Ne={icon:function(n){var r=n.item;return P("p-menuitem-icon",r.icon)},label:"p-steps-title",step:"p-steps-number",action:"p-menuitem-link",menuitem:function(n){var r=n.active,s=n.disabled,o=n.item;return P("p-steps-item",o.className,{"p-highlight p-steps-current":r,"p-disabled":s})},root:function(n){var r=n.props;return P("p-steps p-component",{"p-readonly":r.readOnly})}},Te=`
@layer primereact {
    .p-steps {
        position: relative;
    }

    .p-steps ol {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
    }

    .p-steps.p-readonly .p-steps-item {
        cursor: auto;
    }

    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }

    .p-steps-title {
        white-space: nowrap;
    }

    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-steps-title {
        display: block;
    }
}
`,y=ve.extend({defaultProps:{__TYPE:"Steps",id:null,model:null,activeIndex:0,readOnly:!0,style:null,className:null,onSelect:null,children:void 0},css:{classes:Ne,styles:Te},getCProp:function(n,r){return H.getComponentProp(n,r,y.defaultProps)}});function K(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,s)}return r}function U(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?K(Object(r),!0).forEach(function(s){he(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}var Ce=c.memo(c.forwardRef(function(t,n){var r=me(),s=c.useContext(fe),o=y.getProps(t,s),h=c.useState(o.id),f=we(h,2),p=f[0],b=f[1],g=c.useRef(null),I=c.useRef(null),k=c.Children.count(o.children),D={props:o,state:{id:p,activeIndex:o.activeIndex}},O=y.setMetaData(U({},D)),v=O.ptm,$=O.ptmo,d=O.cx,q=O.isUnstyled;de(y.css.styles,q,{name:"steps"});var j=function(e,a,l){var u={parent:D,context:{index:l,count:k,first:l===0,last:l===k-1,active:l===o.activeIndex,disabled:F(e,"disabled")}};return r(v("step.".concat(a),{step:u}),v("steps.".concat(a),{steps:u}),v("steps.".concat(a),u),$(F(e,"pt"),a,u))},F=function(e,a){return y.getCProp(e,a)},E=function(e,a,l){if(o.readOnly||a.disabled){e.preventDefault();return}o.onSelect&&o.onSelect({originalEvent:e,item:a,index:l}),a.command&&a.command({originalEvent:e,item:a,index:l}),a.url||(e.preventDefault(),e.stopPropagation())},J=function(e,a,l){if(!o.readOnly)switch(e.code){case"ArrowRight":X(e.target),e.preventDefault();break;case"ArrowLeft":W(e.target),e.preventDefault();break;case"Home":Y(e.target),e.preventDefault();break;case"End":z(e.target),e.preventDefault();break;case"Tab":break;case"Enter":case"NumpadEnter":case"Space":E(e,a,l),e.preventDefault();break}},X=function(e){var a=G(e);a&&x(e,a)},W=function(e){var a=Q(e);a&&x(e,a)},Y=function(e){var a=_();a&&x(e,a)},z=function(e){var a=V();a&&x(e,a)},G=function(e){var a=e.parentElement.nextElementSibling;return a?a.children[0]:null},Q=function(e){var a=e.parentElement.previousElementSibling;return a?a.children[0]:null},_=function(){var e=B.findSingle(I.current,'[data-pc-section="menuitem"]');return e?e.children[0]:null},V=function(){var e=B.find(I.current,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null},x=function(e,a){e.tabIndex="-1",a.tabIndex="0",setTimeout(function(){return a.focus()},0)},A=function(){var e=_();e.tabIndex="0",e.focus()},Z=function(e,a){if(e.visible===!1)return null;var l=e.id||p+"_"+a,u=a===o.activeIndex,R=e.disabled||a!==o.activeIndex&&o.readOnly,re=P("p-menuitem-icon",e.icon),ae=r({className:d("icon",{item:e})},j(e,"icon",a)),oe=be.getJSXIcon(e.icon,U({},ae),{props:o}),se=r({className:d("label")},j(e,"label",a)),ie=e.label&&c.createElement("span",se,e.label),le=r({className:d("step")},j(e,"step",a)),ce=r({href:e.url||"#",className:d("action"),tabIndex:"-1",onFocus:function(m){return m.stopPropagation()},target:e.target,onKeyDown:function(m){return J(m,e,a)},onClick:function(m){return E(m,e,a)}},j(e,"action",a)),w=c.createElement("a",ce,c.createElement("span",le,a+1),oe,ie);if(e.template){var ue={onClick:function(m){return E(m,e,a)},className:"p-menuitem-link",labelClassName:"p-steps-title",numberClassName:"p-steps-number",iconClassName:re,"aria-current":u,element:w,props:o,active:u,disabled:R};w=H.getJSXElement(e.template,e,ue)}var pe=r({id:l,className:d("menuitem",{active:u,disabled:R,item:e}),style:e.style},v("menuitem"));return c.createElement("li",C({},pe,{key:l}),w)},ee=function(){var e=r({ref:I,tabIndex:o.readOnly?null:"0",onFocus:function(){o.readOnly||A()},onBlur:function(){return A}},v("menu"));if(o.model){var a=o.model.map(Z);return c.createElement("ol",e,a)}return null};ye(function(){p||b(ge())}),c.useImperativeHandle(n,function(){return{props:o,getElement:function(){return g.current}}});var te=r({id:o.id,ref:g,className:P(o.className,d("root")),style:o.style},y.getOtherProps(o),v("root")),ne=ee();return c.createElement("nav",te,ne)}));Ce.displayName="Steps";const _e=({index:t=0,onChange:n=Ie,size:r=0})=>T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx(M,{label:"Previous",icon:"pi pi-chevron-left",onClick:()=>n(--t<0?0:t),disabled:t===0,size:"small",severity:"secondary"}),T.jsx(M,{label:"Next",icon:"pi pi-chevron-right",iconPos:"right",onClick:()=>n(++t<r?t:r-1),disabled:t===r-1,size:"small",severity:"secondary"})]});export{_e as P,Ce as S};
