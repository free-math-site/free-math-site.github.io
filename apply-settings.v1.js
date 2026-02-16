if(localStorage.getItem("settingsChanged")){
let sC=0;
let cFs=localStorage.getItem("changedFontSize");
let cLh=localStorage.getItem("changedLineHeight");
let sB=localStorage.getItem("changedScrollBehavior");
let lS=localStorage.getItem("changedSpacing");

window.addEventListener("DOMContentLoaded",function(){
if(localStorage.getItem("underlineLinks")){document.querySelectorAll('a').forEach(el=>{if(el&&el.id!=='customMode'){el.style.textDecoration='underline'}});}else{sC++;}
if(localStorage.getItem("boldLinks")){document.querySelectorAll('a').forEach(el=>{if(el){el.style.fontWeight='bold'}});}else{sC++;}
if(localStorage.getItem("borders")){document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(el=>el.style.border="none");}else{sC++;}
if(cFs){html.style.fontSize=cFs+"px";}else{sC++;}
if(cLh){body.style.lineHeight=cLh;}else{sC++;}
if(sB){html.style.scrollBehavior=sB;}else{sC++;}
if(lS){body.style.letterSpacing=lS;}else{sC++;}
if(sC===7){localStorage.removeItem("settingsChanged");}
});
}