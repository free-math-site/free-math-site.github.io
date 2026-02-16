{
const a=document.querySelector('.menu-button');
const b=document.querySelector('.menu-links');
if(a&&b){
a.addEventListener('click',function(c){
c.stopPropagation();
const d=a.getAttribute('aria-expanded')==='true'||false;
a.setAttribute('aria-expanded',!d);
b.classList.toggle('active');
});
document.addEventListener('click',function(c){
if(!a.contains(c.target)&&!b.contains(c.target)){
a.setAttribute('aria-expanded',false);
b.classList.remove('active');
}
});
}
}