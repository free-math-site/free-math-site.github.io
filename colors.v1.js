function styleBorders(x){document.querySelectorAll("#settings_box1,#settings_box2,#customMode,.courses,.course_set,.borderVisible,.homepage_box,h1,h2,h3,h4,h5,h6,img,table,td,th,pre").forEach(el=>el.style.borderColor=x);}
function styleLinks(x){document.querySelectorAll("a").forEach(el=>{if(el.id!=="back-to-top"&&el.className!=="doNotStyle"){el.style.color=x;}});}
function setMode(a,b,c,d){document.body.style.backgroundColor=a;document.body.style.color=b;styleBorders(c);styleLinks(d);localStorage.setItem("backgroundColor",a);localStorage.setItem("textColor",b);localStorage.setItem("borderColor",c);localStorage.setItem("linkColor",d);}
{
const bg=localStorage.getItem("backgroundColor");
const tc=localStorage.getItem("textColor");
const bc=localStorage.getItem("borderColor");
const lc=localStorage.getItem("linkColor");
if(bg){document.body.style.backgroundColor=bg;}
if(tc){document.body.style.color=tc;}
if(bc){styleBorders(bc);}
if(lc){styleLinks(lc);}
document.getElementById("defaultMode").addEventListener("click",()=>{setMode("#d3d3d3","black","#cc0000","#9d1b9d");});
document.getElementById("lightMode").addEventListener("click",()=>{setMode("white","black","red","#3333ff");});
document.getElementById("darkMode").addEventListener("click",()=>{setMode("#202020","#bbbbbb","green","#e359e3");});
document.getElementById("darkMode2").addEventListener("click",()=>{setMode("black","#00c000","#0000aa","#c922c9");});
}