{
const a=document.getElementById("colorHighlight");
const originalOffset=a.offsetTop;

function colorHighlight(){
document.querySelectorAll("main i").forEach(el=>el.style.color="#00cc00");
document.querySelectorAll("main b").forEach(el=>el.style.color="#FF29FF");
document.querySelectorAll("main u").forEach(el=>el.style.color="#82B1FF");
document.querySelectorAll("main s").forEach(el=>el.style.color="orange");
if(document.documentElement.lang=="el"){a.textContent="Χρώματα Κώδικα: ΝΑΙ";}
else{a.textContent="Colored Code: On";}
localStorage.removeItem("colorHighlightOff");
}

function noColorHighlight(){
document.querySelectorAll("main i,main u,main b,main s").forEach(el=>el.style.color="white");
if(document.documentElement.lang=="el"){a.textContent="Χρώματα Κώδικα: ΌΧΙ";}
else{a.textContent="Colored Code: Off";}
localStorage.setItem("colorHighlightOff","true");
}

function updateColorHighlightVisibility(){
if(document.querySelector("footer").getBoundingClientRect().top<=window.innerHeight){a.classList.add("hidden");}
else{a.classList.remove("hidden");}
};

let b;
if(localStorage.getItem("colorHighlightOff")){noColorHighlight();b=false;}
else{b=true}

document.getElementById("colorHighlight").addEventListener("click",()=>{if(b){noColorHighlight();}else{colorHighlight();}b=!b;});
window.addEventListener('scroll',()=>{if(parseInt(window.scrollY)>originalOffset-window.innerHeight){a.classList.add('fixed');}else{a.classList.remove('fixed');}});
window.addEventListener("scroll",updateColorHighlightVisibility);

updateColorHighlightVisibility();
}