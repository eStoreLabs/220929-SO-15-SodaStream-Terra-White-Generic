const info = document.getElementById('es-ctaInfo');
const btn= document.getElementById('es-cta__btn');


btn.addEventListener('click', ()=> {
    info.classList.toggle('es-toggle');
    btn.classList.toggle('es-rotate')
})


