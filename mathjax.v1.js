// Menu

const button=document.querySelector('.menu-button');
const menu=document.querySelector('.menu-links');
if(button&&menu){
button.addEventListener('click',function(){
const expanded=button.getAttribute('aria-expanded')==='true'||false;
button.setAttribute('aria-expanded',!expanded);
menu.classList.toggle('active');
});
}

//Back to top button:

const backToTopButton=document.getElementById("back-to-top");
const main=document.querySelector("main");
const footer=document.querySelector("footer");
function updateBackToTopVisibility(){
const footerTop=footer.getBoundingClientRect().top;
const windowHeight=window.innerHeight;
const mainTop=main.getBoundingClientRect().top;
if (mainTop>=0 || footerTop<=windowHeight){backToTopButton.classList.add("hidden");}
else {backToTopButton.classList.remove("hidden");}
};
window.addEventListener("scroll",updateBackToTopVisibility);
updateBackToTopVisibility();

//Accessibility

document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".math-container").forEach(el=>{el.setAttribute("aria-label","Scrollable content");el.setAttribute("tabindex","0");});});

//Mathjax:

let script=document.createElement('script');
script.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
script.async=true;
script.onload=function(){console.log("MathJax loaded successfully from jsDelivr.");};
script.onerror=function(){
console.warn("jsDelivr CDN failed. Trying cdnjs.");
let fallbackScript=document.createElement('script');
fallbackScript.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js";
fallbackScript.async=true;
fallbackScript.onload=function(){console.log("MathJax loaded successfully from cdnjs.");};
fallbackScript.onerror=function(){console.error("Both CDNs failed. MathJax could not be loaded.");};
document.head.appendChild(fallbackScript);
};
document.head.appendChild(script);