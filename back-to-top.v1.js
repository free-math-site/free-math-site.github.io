{
const a=document.getElementById("back-to-top");
function updateBackToTopVisibility(){
if(document.querySelector("main").getBoundingClientRect().top>=0 || document.querySelector("footer").getBoundingClientRect().top<=window.innerHeight){a.classList.add("hidden");}
else{a.classList.remove("hidden");}
};
window.addEventListener("scroll",updateBackToTopVisibility);
updateBackToTopVisibility();
}