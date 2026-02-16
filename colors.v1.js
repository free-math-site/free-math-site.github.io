const html=document.documentElement;
const body=document.body;

window.addEventListener("DOMContentLoaded",function(){
let bg=localStorage.getItem("backgroundColor");
let tc=localStorage.getItem("textColor");
let bc=localStorage.getItem("borderColor");
let lc=localStorage.getItem("linkColor");
if(bg){body.style.backgroundColor=bg;}
if(tc){body.style.color=tc;}
if(bc){styleBorders(bc);}
if(lc){styleLinks(lc);}
});

function styleBorders(x){document.querySelectorAll("#settings_box1,#settings_box2,#customMode,#copyButton,#applyCustom,#reset,#submitButton,.courses,.course_set,.borderVisible,.homepage_box,.generalButton,h1,h2,h3,h4,h5,h6,img,table,td,th,pre").forEach(el=>el.style.borderColor=x);}
function styleLinks(x){document.querySelectorAll("a").forEach(el=>{if(el&&el.id!=="back-to-top"&&el.className!=="doNotStyle"){el.style.color=x;}});}
function setMode(a,b,c,d){
body.style.backgroundColor=a;
body.style.color=b;
localStorage.setItem("backgroundColor",a);
localStorage.setItem("textColor",b);
styleBorders(c);
localStorage.setItem("borderColor",c);
styleLinks(d);
localStorage.setItem("linkColor",d);
}

document.getElementById("defaultMode").addEventListener("click",function(){
setMode("#d3d3d3","black","#cc0000","#9d1b9d");
});
document.getElementById("lightMode").addEventListener("click",function(){
setMode("white","black","red","#3333ff");
});
document.getElementById("darkMode").addEventListener("click",function(){
setMode("#121212","#e0e0e0","#82b1ff","#82b1ff");
});
document.getElementById("darkMode2").addEventListener("click",function(){
setMode("black","#00cc00","blue","#c922c9");
});