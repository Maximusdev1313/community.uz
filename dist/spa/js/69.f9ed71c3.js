(globalThis["webpackChunkcommunityuz"]=globalThis["webpackChunkcommunityuz"]||[]).push([[69],{7343:(s,e,t)=>{"use strict";t.d(e,{Z:()=>b});var a=t(9835),n=t(6970),l=t(499),i=t(3053);const r={class:"container"},o={class:""},j={class:"q-mt-md"},u={__name:"inputForWriteMassage",props:{id:String},setup(s){const e=s,t=(0,i.K)();let u=(0,l.iH)(""),m=(0,l.iH)(""),c=(0,l.iH)(""),d=(0,l.iH)(null);const p=s=>{if("INPUT"===s.target.nodeName)return;let e,t;s.preventDefault(),s.stopPropagation(),s.originalEvent&&s.originalEvent.clipboardData.getData?(e=s.originalEvent.clipboardData.getData("text/plain"),d.value.runCmd("insertText",e)):s.clipboardData&&s.clipboardData.getData?(e=s.clipboardData.getData("text/plain"),d.value.runCmd("insertText",e)):window.clipboardData&&window.clipboardData.getData&&(t||(t=!0,d.value.runCmd("ms-pasteTextOnly",e)),t=!1)},{id:h}=(0,l.BK)(e),g=(new Date).getTime(),k=Math.floor(1e4*Math.random()),b=k.toString()+g+k.toString(),v=async()=>{try{await fetch("http://maxmaximusdev.pythonanywhere.com/questions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({special_id:b,name:u.value,title:m.value,question:c.value,questions:h.value})})}catch(s){console.log(s.message)}m.value="",c.value="",t.clicker=!1,t.GetApiById(h.value)};return(s,e)=>{const i=(0,a.up)("q-input"),h=(0,a.up)("q-editor"),g=(0,a.up)("q-btn"),k=(0,a.up)("q-separator");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Uk)((0,n.zw)((0,l.SU)(t).clicker)+" ",1),(0,a._)("form",o,[(0,a._)("div",null,[(0,a.Wm)(i,{label:"Your name",class:"q-py-sm",modelValue:(0,l.SU)(u),"onUpdate:modelValue":e[0]||(e[0]=s=>(0,l.dq)(u)?u.value=s:u=s)},null,8,["modelValue"]),(0,a.Wm)(i,{label:"Title for question",modelValue:(0,l.SU)(m),"onUpdate:modelValue":e[1]||(e[1]=s=>(0,l.dq)(m)?m.value=s:m=s)},null,8,["modelValue"])]),(0,a._)("div",j,[(0,a.Wm)(h,{modelValue:(0,l.SU)(c),"onUpdate:modelValue":e[2]||(e[2]=s=>(0,l.dq)(c)?c.value=s:c=s),onPaste:p,ref_key:"editorRef",ref:d},null,8,["modelValue"])]),(0,a.Wm)(g,{class:"q-my-md",onClick:v,color:"primary",size:"sm"},{default:(0,a.w5)((()=>[(0,a.Uk)("Tayyor")])),_:1})]),(0,a.Wm)(k)])}}};var m=t(9316),c=t(5613),d=t(8879),p=t(2218),h=t(9984),g=t.n(h);const k=u,b=k;g()(u,"components",{QInput:m.Z,QEditor:c.Z,QBtn:d.Z,QSeparator:p.Z})},7528:(s,e,t)=>{"use strict";t.d(e,{Z:()=>v});var a=t(9835),n=t(6970),l=t(499),i=t(3878),r=t.n(i);const o={class:"container"},j={__name:"questionList",props:{questions:Array,height:Number},setup(s){const e=s,{questions:t}=(0,l.BK)(e);return(e,i)=>{const j=(0,a.up)("q-item-label"),u=(0,a.up)("q-item-section"),m=(0,a.up)("q-item"),c=(0,a.up)("q-separator"),d=(0,a.up)("q-list");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",{style:(0,n.j5)({height:s.height+"px"})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(t),(s=>((0,a.wg)(),(0,a.j4)(d,{class:"q-mt-sm",key:s},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{clickable:"",to:"/comment/"+s.id},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(j,{class:"item-label",lines:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(s.title),1)])),_:2},1024),(0,a.Wm)(j,{caption:"",lines:"2",innerHTML:s.question},null,8,["innerHTML"])])),_:2},1024),(0,a.Wm)(u,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)((0,l.SU)(r())(s.timestamp).format("lll")),1)])),_:2},1024),s.answer.length?((0,a.wg)(),(0,a.j4)(j,{key:0,caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(s.answer.length)+" answers ",1)])),_:2},1024)):(0,a.kq)("",!0),s.answer.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(j,{key:1,caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" No answers yet ")])),_:1}))])),_:2},1024)])),_:2},1032,["to"]),(0,a.Wm)(c,{spaced:"",inset:""})])),_:2},1024)))),128))],4)])}}};var u=t(1639),m=t(3246),c=t(490),d=t(1233),p=t(3115),h=t(2218),g=t(9984),k=t.n(g);const b=(0,u.Z)(j,[["__scopeId","data-v-2762b656"]]),v=b;k()(j,"components",{QList:m.Z,QItem:c.Z,QItemSection:d.Z,QItemLabel:p.Z,QSeparator:h.Z})},2071:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var a=t(9835),n=t(499),l=t(7343),i=t(7528),r=t(3053),o=(t(9981),t(8339));const j={class:"container q-pt-md title row justify-between"},u={__name:"Questions",setup(s){(0,n.iH)(!1);const e=(0,o.yj)(),t=(0,r.K)();t.GetCategoryApi();(0,n.iH)(t.lists);(0,a.bv)((()=>{t.GetApiById(e.params.id)}));let u=t.categoryApi.length;(0,a.YP)((()=>e.params.id),(s=>s<=u?t.GetApiById(s):s));const m=(0,n.iH)(500);return(s,r)=>{const o=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",j,[(0,a.Uk)(" Questions List "),(0,a.Wm)(o,{color:"primary",label:(0,n.SU)(t).clicker?"bekor qilish":"Savol berish ","icon-right":(0,n.SU)(t).clicker?"cancel":"comment",onClick:r[0]||(r[0]=s=>(0,n.SU)(t).clicker=!(0,n.SU)(t).clicker),size:"sm"},null,8,["label","icon-right"])]),(0,n.SU)(t).clicker?((0,a.wg)(),(0,a.j4)(l.Z,{key:0,id:(0,n.SU)(e).params.id},null,8,["id"])):(0,a.kq)("",!0),((0,a.wg)(),(0,a.j4)(a.n4,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i.Z,{questions:(0,n.SU)(t).reverseLists,height:m.value},null,8,["questions","height"])])),_:1}))])}}};var m=t(8879),c=t(9984),d=t.n(c);const p=u,h=p;d()(u,"components",{QBtn:m.Z})},6700:(s,e,t)=>{var a={"./af":3902,"./af.js":3902,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":6916,"./ar-tn.js":6916,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":3706,"./bs.js":3706,"./ca":112,"./ca.js":112,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":6741,"./ja.js":6741,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":6611,"./mk.js":6611,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":8812,"./ss.js":8812,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":926,"./th.js":926,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function n(s){var e=l(s);return t(e)}function l(s){if(!t.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=l,s.exports=n,n.id=6700}}]);