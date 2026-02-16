{
let a=document.createElement('script');
a.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
a.async=true;
a.onload=function(){console.log("MathJax loaded successfully from jsDelivr.");};
a.onerror=function(){
console.warn("jsDelivr CDN failed. Trying cdnjs.");
let b=document.createElement('script');
b.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js";
b.async=true;
b.onload=function(){console.log("MathJax loaded successfully from cdnjs.");};
b.onerror=function(){console.error("Both CDNs failed. MathJax could not be loaded.");};
document.head.appendChild(b);
};
document.head.appendChild(a);

window.addEventListener("load",function(){
document.querySelectorAll("mjx-container").forEach(el=>el.removeAttribute("tabindex"));
document.querySelectorAll(".math-container").forEach(el=>{el.setAttribute("tabindex","0");el.setAttribute("aria-label","scrollable content")});
});
}