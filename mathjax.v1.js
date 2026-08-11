/*{
function loadScript(src,onSuccess,onFailure){const s=document.createElement('script');s.src=src;s.async=true;s.onload=onSuccess;s.onerror=onFailure;document.head.appendChild(s);}
loadScript("https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js",()=>console.log("MathJax loaded from jsDelivr."),()=>{console.warn("jsDelivr failed. Trying cdnjs.");loadScript("https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js",()=>console.log("MathJax loaded from cdnjs."),()=>console.error("Both CDNs failed."));});
window.addEventListener("load",()=>{
document.querySelectorAll("mjx-container").forEach(el=>el.removeAttribute("tabindex"));
document.querySelectorAll(".math-container").forEach(el=>{el.setAttribute("tabindex","0");el.setAttribute("aria-label","scrollable content")});
document.body.style.overflowX="hidden";
});
}*/
{
function loadScript(src,onSuccess,onFailure){const s=document.createElement('script');s.src=src;s.async=true;s.onload=onSuccess;s.onerror=onFailure;document.head.appendChild(s);}
function configureMathJax(){document.querySelectorAll("mjx-container").forEach(el=>el.removeAttribute("tabindex"));document.querySelectorAll(".math-container").forEach(el=>{el.setAttribute("tabindex","0");el.setAttribute("aria-label","scrollable content")});document.documentElement.style.overflowX="hidden";document.body.style.overflowX="hidden";}
function waitForMathJax(){if(window.MathJax?.startup?.promise){MathJax.startup.promise.then(()=>{configureMathJax();});}else{console.error("MathJax loaded, but startup.promise is unavailable.");}}
loadScript("https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js",()=>{console.log("MathJax loaded from jsDelivr.");waitForMathJax();},()=>{console.warn("jsDelivr failed. Trying cdnjs.");loadScript("https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js",()=>{console.log("MathJax loaded from cdnjs.");waitForMathJax();},()=>{console.error("Both CDNs failed.");});});
}