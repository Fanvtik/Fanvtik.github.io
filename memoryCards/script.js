'use strict'
document.body.addEventListener('click',e=>{
    let el=e.target.closest('.grid-item');
    if (e.target.closest('.carousel')) {
        return;
    }
    if(el){
       el.classList.toggle('clicked');
    }
})