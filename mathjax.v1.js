{
function loadScript(src,onSuccess,onFailure){const s=document.createElement('script');s.src=src;s.async=true;s.onload=onSuccess;s.onerror=onFailure;document.head.appendChild(s);}

loadScript("https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js",()=>console.log("MathJax loaded from jsDelivr."),()=>{console.warn("jsDelivr failed. Trying cdnjs.");loadScript("https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js",()=>console.log("MathJax loaded from cdnjs."),()=>console.error("Both CDNs failed."));});

window.addEventListener("load",()=>{
document.querySelectorAll("mjx-container").forEach(el=>el.removeAttribute("tabindex"));
document.querySelectorAll(".math-container").forEach(el=>{el.setAttribute("tabindex","0");el.setAttribute("aria-label","scrollable content")});
});
}