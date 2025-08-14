window.addEventListener("DOMContentLoaded",function(){
let bg=localStorage.getItem("backgroundColor");
let tc=localStorage.getItem("textColor");
let bc=localStorage.getItem("borderColor");
let lc=localStorage.getItem("linkColor");
let bttbc=localStorage.getItem("backToTopBackgroundColor");
let bttlc=localStorage.getItem("backToTopLinkColor");
if(bg){document.body.style.backgroundColor=bg;}
if(tc){document.body.style.color=tc;}
if(bc){styleBorders(bc);}
if(lc){styleLinks(lc);}
if(bttbc && bttlc){styleBackToTopButton(bttbc,bttlc);}
});

function styleBorders(x){
const elements=[
document.getElementById("settings_box1"),
document.getElementById("settings_box2"),
document.getElementById("customMode"),
document.getElementById("copyButton"),
document.getElementById("applyCustom"),
document.getElementById("reset"),
document.getElementById("submitButton"),
...document.getElementsByClassName("courses"),
...document.getElementsByClassName("course_set"),
...document.getElementsByClassName("borderVisible"),
...document.getElementsByTagName("h1"),
...document.getElementsByTagName("h2"),
...document.getElementsByTagName("h3"),
...document.getElementsByTagName("h4"),
...document.getElementsByTagName("h5"),
...document.getElementsByTagName("img"),
...document.getElementsByTagName("table"),
...document.getElementsByTagName("td"),
...document.getElementsByTagName("th"),
...document.getElementsByTagName("pre")];
elements.forEach(el=>{if(el){el.style.borderColor=x;}});
}
function styleLinks(x){
const elements=[...document.getElementsByTagName("a")];
elements.forEach(el=>{if(el && el.id!=="back-to-top"){el.style.color=x;}});
}
function styleBackToTopButton(x,y){
z=document.getElementById("back-to-top");
z.style.backgroundColor=x;
z.style.color=y;
}
function setMode(a,b,c,d,e,f){
document.body.style.backgroundColor=a;
document.body.style.color=b;
localStorage.setItem("backgroundColor",a);
localStorage.setItem("textColor",b);
styleBorders(c);
localStorage.setItem("borderColor",c);
styleLinks(d);
localStorage.setItem("linkColor",d);
styleBackToTopButton(e,f);
localStorage.setItem("backToTopBackgroundColor",e);
localStorage.setItem("backToTopLinkColor",f);
}

document.getElementById("defaultMode").addEventListener("click",function(){
setMode("#d3d3d3","black","#cc0000","#9d1b9d","black","#c922c9");
});
document.getElementById("lightMode").addEventListener("click",function(){
setMode("white","black","red","#3333ff","black","#c922c9");
});
document.getElementById("darkMode").addEventListener("click",function(){
setMode("#121212","#e0e0e0","#82b1ff","#82b1ff","#d3d3d3","#9d1b9d");
});
document.getElementById("darkMode2").addEventListener("click",function(){
setMode("black","#00cc00","blue","#c922c9","#d3d3d3","#9d1b9d");
});