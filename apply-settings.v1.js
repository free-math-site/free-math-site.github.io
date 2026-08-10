{
if(localStorage.getItem("settingsChanged")){
let cFs=localStorage.getItem("changedFontSize");
let cLh=localStorage.getItem("changedLineHeight");
let cSb=localStorage.getItem("changedScrollBehavior");
let cLs=localStorage.getItem("changedSpacing");
let changes=0;

const html=document.documentElement;
const body=document.body;

window.addEventListener("DOMContentLoaded",function(){
if(localStorage.getItem("underlineLinks")){document.querySelectorAll('a').forEach(el=>{if(el.id!=='customMode'){el.style.textDecoration='underline'}});changes++;}
if(localStorage.getItem("boldLinks")){document.querySelectorAll('a').forEach(el=>el.style.fontWeight='bold');changes++;}
if(localStorage.getItem("borders")){document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(el=>el.style.border="none");changes++;}
if(cFs){html.style.fontSize=cFs+"px";changes++;}
if(cLh){body.style.lineHeight=cLh;changes++;}
if(cSb){html.style.scrollBehavior=cSb;changes++;}
if(cLs){body.style.letterSpacing=cLs;changes++;}
if(changes===0){localStorage.removeItem("settingsChanged");}
});
}
}