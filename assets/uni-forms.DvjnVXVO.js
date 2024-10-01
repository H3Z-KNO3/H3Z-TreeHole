import{ac as e,o as t,c as r,w as a,b as n,D as i,ad as l,i as s}from"./index-C-XsXVfx.js";import{_ as u}from"./_plugin-vue_export-helper.BCo6x5W8.js";var o={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")};const m={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function d(e,t=""){["label"].forEach((t=>{void 0===e[t]&&(e[t]="")}));let r=t;for(let a in e){let t=new RegExp("{"+a+"}");r=r.replace(t,e[a])}return r}const f={integer:e=>f.number(e)&&parseInt(e,10)===e,string:e=>"string"==typeof e,number:e=>!isNaN(e)&&"number"==typeof e,boolean:function(e){return"boolean"==typeof e},float:function(e){return f.number(e)&&!f.integer(e)},array:e=>Array.isArray(e),object:e=>"object"==typeof e&&!f.array(e),date:e=>e instanceof Date,timestamp(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:e=>"string"==typeof e.url,email:e=>"string"==typeof e&&!!e.match(o.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(o.url),pattern(e,t){try{return new RegExp(e).test(t)}catch(r){return!1}},method:e=>"function"==typeof e,idcard:e=>"string"==typeof e&&!!e.match(o.idcard),"url-https"(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":e=>e.startsWith("://"),"url-web":e=>!1};const c={required:(e,t,r)=>e.required&&function(e,t){return null==e||"string"==typeof e&&!e||!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length}(t,e.format||typeof t)?d(e,e.errorMessage||r.required):null,range(e,t,r){const{range:a,errorMessage:n}=e;let i=new Array(a.length);for(let s=0;s<a.length;s++){const e=a[s];f.object(e)&&void 0!==e.value?i[s]=e.value:i[s]=e}let l=!1;return Array.isArray(t)?l=new Set(t.concat(i)).size===i.length:i.indexOf(t)>-1&&(l=!0),l?null:d(e,n||r.enum)},rangeNumber(e,t,r){if(!f.number(t))return d(e,e.errorMessage||r.pattern.mismatch);let{minimum:a,maximum:n,exclusiveMinimum:i,exclusiveMaximum:l}=e,s=i?t<=a:t<a,u=l?t>=n:t>n;return void 0!==a&&s?d(e,e.errorMessage||r.number[i?"exclusiveMinimum":"minimum"]):void 0!==n&&u?d(e,e.errorMessage||r.number[l?"exclusiveMaximum":"maximum"]):void 0!==a&&void 0!==n&&(s||u)?d(e,e.errorMessage||r.number.range):null},rangeLength(e,t,r){if(!f.string(t)&&!f.array(t))return d(e,e.errorMessage||r.pattern.mismatch);let a=e.minLength,n=e.maxLength,i=t.length;return void 0!==a&&i<a?d(e,e.errorMessage||r.length.minLength):void 0!==n&&i>n?d(e,e.errorMessage||r.length.maxLength):void 0!==a&&void 0!==n&&(i<a||i>n)?d(e,e.errorMessage||r.length.range):null},pattern:(e,t,r)=>f.pattern(e.pattern,t)?null:d(e,e.errorMessage||r.pattern.mismatch),format(e,t,r){var a=Object.keys(f),n=m[e.format]?m[e.format]:e.format||e.arrayType;return a.indexOf(n)>-1&&!f[n](t)?d(e,e.errorMessage||r.typeError):null},arrayTypeFormat(e,t,r){if(!Array.isArray(t))return d(e,e.errorMessage||r.typeError);for(let a=0;a<t.length;a++){const n=t[a];let i=this.format(e,n,r);if(null!==i)return i}return null}};class h extends class{constructor(e){this._message=e}async validateRule(e,t,r,a,n){var i=null;let l=t.rules;if(l.findIndex((e=>e.required))<0){if(null==r)return i;if("string"==typeof r&&!r.length)return i}var s=this._message;if(void 0===l)return s.default;for(var u=0;u<l.length;u++){let o=l[u],m=this._getValidateType(o);if(Object.assign(o,{label:t.label||`["${e}"]`}),c[m]&&null!=(i=c[m](o,r,s)))break;if(o.validateExpr){let e=Date.now();if(!1===o.validateExpr(r,n,e)){i=this._getMessage(o,o.errorMessage||this._message.default);break}}if(o.validateFunction&&null!==(i=await this.validateFunction(o,r,a,n,m)))break}return null!==i&&(i=s.TAG+i),i}async validateFunction(e,t,r,a,n){let i=null;try{let l=null;const s=await e.validateFunction(e,t,a||r,(e=>{l=e}));(l||"string"==typeof s&&s||!1===s)&&(i=this._getMessage(e,l||s,n))}catch(l){i=this._getMessage(e,l.message,n)}return i}_getMessage(e,t,r){return d(e,t||e.errorMessage||this._message[r]||t.default)}_getValidateType(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}{constructor(e,t){super(h.message),this._schema=e,this._options=t||null}updateSchema(e){this._schema=e}async validate(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidate(e,!1,t)),r.length?r[0]:null}async validateAll(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidate(e,!0,t)),r}async validateUpdate(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidateUpdate(e,!1,t)),r.length?r[0]:null}async invokeValidate(e,t,r){let a=[],n=this._schema;for(let i in n){let l=n[i],s=await this.validateRule(i,l,e[i],e,r);if(null!=s&&(a.push({key:i,errorMessage:s}),!t))break}return a}async invokeValidateUpdate(e,t,r){let a=[];for(let n in e){let i=await this.validateRule(n,this._schema[n],e[n],e,r);if(null!=i&&(a.push({key:n,errorMessage:i}),!t))break}return a}_checkFieldInSchema(e){var t=Object.keys(e),r=Object.keys(this._schema);if(new Set(t.concat(r)).size===r.length)return"";var a=t.filter((e=>r.indexOf(e)<0));return[{key:"invalid",errorMessage:d({field:JSON.stringify(a)},h.message.TAG+h.message.defaultInvalid)}]}}h.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};const g=(e,t,r)=>{const a=r.find((e=>{return e.format&&("int"===(t=e.format)||"double"===t||"number"===t||"timestamp"===t);var t})),n=r.find((e=>e.format&&"boolean"===e.format||"bool"===e.format));return a&&(t=t||0===t?S(Number(t))?Number(t):t:null),n&&(t=!!M(t)&&t),t},p=(e,t)=>_(t,e),b=(e,t={})=>{const r=x(e);if("object"==typeof r&&Array.isArray(r)&&r.length>1){return r.reduce(((e,t)=>e+`#${t}`),"_formdata_")}return r[0]||e},v=e=>{let t=e.replace("_formdata_#","");return t=t.split("#").map((e=>S(e)?Number(e):e)),t},y=(e,t,r)=>("object"!=typeof e||x(t).reduce(((e,t,a,n)=>a===n.length-1?(e[t]=r,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(n[a+1])?[]:{}),e[t])),e),e);function x(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}const _=(e,t,r="undefined")=>{let a=x(t).reduce(((e,t)=>(e||{})[t]),e);return a&&void 0===a?r:a},S=e=>!isNaN(Number(e)),M=e=>"boolean"==typeof e;const w=u({name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:()=>null},modelValue:{type:Object,default:()=>null},model:{type:Object,default:()=>null},rules:{type:Object,default:()=>({})},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide(){return{uniForm:this}},data:()=>({formData:{},formRules:{}}),computed:{localData(){const e=this.model||this.modelValue||this.value;return e?(t=e,JSON.parse(JSON.stringify(t))):{};var t}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created(){e().$vm.$.appContext.config.globalProperties.binddata||(e().$vm.$.appContext.config.globalProperties.binddata=function(e,t,r){if(r)this.$refs[r].setValue(e,t);else{let r;for(let e in this.$refs){const t=this.$refs[e];if(t&&t.$options&&"uniForms"===t.$options.name){r=t;break}}if(!r)return console.error("当前 uni-froms 组件缺少 ref 属性");r.model&&(r.model[e]=t),r.modelValue&&(r.modelValue[e]=t),r.value&&(r.value[e]=t)}}),this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new h(e)},setValue(e,t){let r=this.childrens.find((t=>t.name===e));return r?(this.formData[e]=g(0,t,this.formRules[e]&&this.formRules[e].rules||[]),r.onFieldChange(this.formData[e])):null},validate(e,t){return this.checkAll(this.formData,e,t)},validateField(e=[],t){e=[].concat(e);let r={};return this.childrens.forEach((t=>{const a=b(t.name);-1!==e.indexOf(a)&&(r=Object.assign({},r,{[a]:this.formData[a]}))})),this.checkAll(r,[],t)},clearValidate(e=[]){e=[].concat(e),this.childrens.forEach((t=>{if(0===e.length)t.errMsg="";else{const r=b(t.name);-1!==e.indexOf(r)&&(t.errMsg="")}}))},submit(e,t,r){for(let a in this.dataValue){this.childrens.find((e=>e.name===a))&&void 0===this.formData[a]&&(this.formData[a]=this._getValue(a,this.dataValue[a]))}return r||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},async checkAll(e,t,r,a){if(!this.validator)return;let n,i=[];for(let o in e){const e=this.childrens.find((e=>b(e.name)===o));e&&i.push(e)}r||"function"!=typeof t||(r=t),!r&&"function"!=typeof r&&Promise&&(n=new Promise(((e,t)=>{r=function(r,a){r?t(r):e(a)}})));let l=[],s=JSON.parse(JSON.stringify(e));for(let o in i){const e=i[o];let t=b(e.name);const r=await e.onFieldChange(s[t]);if(r&&(l.push(r),"toast"===this.errShowType||"modal"===this.errShowType))break}Array.isArray(l)&&0===l.length&&(l=null),Array.isArray(t)&&t.forEach((e=>{let t=b(e),r=p(e,this.localData);void 0!==r&&(s[t]=r)})),"submit"===a?this.$emit("submit",{detail:{value:s,errors:l}}):this.$emit("validate",l);let u={};return u=((e={},t)=>{let r=JSON.parse(JSON.stringify(e)),a={};for(let n in r){let e=v(n);y(a,e,r[n])}return a})(s,this.name),r&&"function"==typeof r&&r(l,u),n&&r?n:null},validateCheck(e){this.$emit("validate",e)},_getValue:g,_isRequiredField:e=>{let t=!1;for(let r=0;r<e.length;r++){if(e[r].required){t=!0;break}}return t},_setDataValue:(e,t,r)=>(t[e]=r,r||""),_getDataValue:p,_realName:b,_isRealName:e=>/^_formdata_#*/.test(e),_isEqual:(e,t)=>{if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var r=toString.call(e);if(r!==toString.call(t))return!1;switch(r){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("[object Object]"==r){var a=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(a.length!=n.length)return!1;for(var i=0;i<a.length;i++){var l=a[i];if(e[l]!==t[l])return!1}return!0}return"[object Array]"==r?e.toString()==t.toString():void 0}}},[["render",function(e,u,o,m,d,f){const c=l,h=s;return t(),r(h,{class:"uni-forms"},{default:a((()=>[n(c,null,{default:a((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-898b6e97"]]);export{w as _};
