import{N as p}from"./chunks/NetaGraph.CM9VVIdA.js";import{y as k,o as e,c as E,a3 as r}from"./chunks/framework.D0qf0Iz9.js";const d=r("",8),o=[d],u=JSON.parse('{"title":"且或节点","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"nodes/reg-andOr.md","filePath":"nodes/reg-andOr.md"}'),g={name:"nodes/reg-andOr.md"},C=Object.assign(g,{setup(y){return k(()=>{const s=new p({rendererType:"canvas",el:document.getElementById("canvans"),backgroundColor:"#ffe"}),i={nodes:[{id:"node1",label:"andOr",type:"andOr",data:{cate:"and"},x:50,y:50}]};s.read(i),s.render(),s.on("graphics:pointerdown",a=>{var n,t,h;const l=((h=(t=(n=a.container)==null?void 0:n._data)==null?void 0:t.data)==null?void 0:h.cate)=="and";s.updateNodeData({id:a.container.id,data:{cate:l?"or":"and"}})})}),(s,i)=>(e(),E("div",null,o))}});export{u as __pageData,C as default};
