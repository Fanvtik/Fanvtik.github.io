'use strict'
document.body.addEventListener('click',e=>{
    let el=e.target.closest('.grid-item');
    if(el){
       el.classList.toggle('clicked');
    }
})