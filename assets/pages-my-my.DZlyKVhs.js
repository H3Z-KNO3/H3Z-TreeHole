import{r as e,l as a,J as s,c as l,w as t,i,o as u,b as n,f as o,t as m,u as f,n as d,K as c,C as r,h as _,k as p,m as v,L as y,I as g,M as b}from"./index-CHMtd8Q1.js";import{o as I}from"./uni-app.es.BJJPZxZ3.js";import{s as C,m as k}from"./store.BSHOeR6v.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";const F=x({__name:"my",setup(x){const F=e({uname:"匿名用户",gender:"保密",admissionYear:2024,campus:"保密"});I((()=>{a("tempUserInfo")?F.value=a("tempUserInfo"):s("tempUserInfo",F.value)}));const U=e(!1);return(e,a)=>{const I=i,x=g,V=b;return u(),l(I,{class:"container"},{default:t((()=>[n(I,{class:"my-info-page-title"},{default:t((()=>[o(" 我的信息 ")])),_:1}),n(I,{class:"my-info-form"},{default:t((()=>[n(I,{class:"my-info-item login-status"},{default:t((()=>[n(I,{class:"my-info-item-label"},{default:t((()=>[o("状态")])),_:1}),n(I,{class:"my-info-item-value",onClick:a[0]||(a[0]=e=>{C.userInfo._id?r({title:"确定退出登录吗？",confirmColor:"#BF5AF2",success:e=>{e.confirm&&k.logout()}}):c({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})},{default:t((()=>[o(m(f(C).userInfo._id?"已登录（点击登出）":"未登录（点击登录）"),1)])),_:1})])),_:1}),n(I,{class:"my-info-item"},{default:t((()=>[n(I,{class:"my-info-item-label"},{default:t((()=>[o("用户ID")])),_:1}),n(I,{class:"my-info-item-value",style:{overflow:"hidden"}},{default:t((()=>[o(m(f(C).userInfo._id?f(C).userInfo._id.substr(10):"Null"),1)])),_:1})])),_:1}),n(I,{class:"my-info-item"},{default:t((()=>[n(I,{class:"my-info-item-label"},{default:t((()=>[o("昵称")])),_:1}),n(x,{class:d(["my-info-item-value input",{editting:U.value}]),modelValue:F.value.uname,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value.uname=e),disabled:!U.value,type:"text"},null,8,["class","modelValue","disabled"])])),_:1}),n(I,{class:"my-info-item"},{default:t((()=>[n(I,{class:"my-info-item-label"},{default:t((()=>[o("性别")])),_:1}),n(I,{class:d(["my-info-item-value",{editting:U.value}]),onClick:a[2]||(a[2]=e=>function(){if(!U.value)return;const e=["保密","男","女","其他"];y({itemList:e,itemColor:"#BF5AF2",success:a=>{F.value.gender=e[a.tapIndex]}})}())},{default:t((()=>[o(m(F.value.gender),1)])),_:1},8,["class"])])),_:1}),n(I,{class:"my-info-item"},{default:t((()=>[n(I,{class:"my-info-item-label"},{default:t((()=>[o("入学年份")])),_:1}),n(x,{class:d(["my-info-item-value input",{editting:U.value}]),modelValue:F.value.admissionYear,"onUpdate:modelValue":a[3]||(a[3]=e=>F.value.admissionYear=e),disabled:!U.value,type:"number"},null,8,["class","modelValue","disabled"])])),_:1}),n(I,{class:"my-info-item"},{default:t((()=>[n(I,{class:"my-info-item-label"},{default:t((()=>[o("校区")])),_:1}),n(I,{class:d(["my-info-item-value",{editting:U.value}]),onClick:a[4]||(a[4]=e=>function(){if(!U.value)return;const e=["保密","群力校区","南岗校区","其他学校"];y({itemList:e,itemColor:"#BF5AF2",success:a=>{F.value.campus=e[a.tapIndex]}})}())},{default:t((()=>[o(m(F.value.campus),1)])),_:1},8,["class"])])),_:1}),n(I,{class:"my-info-tips"},{default:t((()=>[o(" 个人信息为本地临时存储，不与账号绑定 ")])),_:1})])),_:1}),n(V,{class:"my-info-button",onClick:a[5]||(a[5]=e=>{C.userInfo._id?(U.value&&(p({title:"正在保存",mask:!0}),s("tempUserInfo",F.value),v(),_({title:"保存成功",duration:500})),U.value=!U.value):_({title:"尚未登录",icon:"none",duration:500})})},{default:t((()=>[o(m(U.value?"保存信息":"修改信息"),1)])),_:1})])),_:1})}}},[["__scopeId","data-v-cc0037cc"]]);export{F as default};
