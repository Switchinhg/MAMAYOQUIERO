//traidos de HTML
let iconoSubir = document.getElementById('clickarriba')
let botonRojo = document.getElementById("botonCopiarRojo")
let footer = document.getElementsByClassName("footer")[0]
const select = document.getElementById("select")
/* acordion */
const acordion = document.getElementsByClassName('acordion')
const icons = document.getElementsByClassName("icono");

//event listeners y onClick

/* Chevron Up */
iconoSubir.addEventListener('click', () =>{
    window.scrollTo(0, 0)
})

botonRojo.addEventListener('click', () =>{
    botonRojo.innerHTML = `<button id="select" class="boton botonDescuentoClickeadoFijo"><img src="./imgs/iconos/IconCheckNegro.svg" alt="icono de copiar texto"> Código de descuento copiado</button>`
    ClipboardJS.copy('MAMAYOQUIERO')
    setTimeout(() => {
        botonRojo.innerHTML =   `<button id="select" class="boton botonDescuentoFijo"><img src="./imgs/iconos/IconCopyBlanco.svg" alt="icono de copiar texto"> <span> Cod. 10% descuento <b>MAMAYOQUIERO</b></span></button>`  
    }, 2000);
})

window.onscroll = function(){scrollFixed()}

function scrollFixed(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        footer.classList.add("fixed")
    } else {
        footer.classList.remove("fixed")
    }
}

//api Observer (se fije si intersecciona con el viewport)
const Observador = new IntersectionObserver(entrada =>{
    entrada.forEach(entro=>{

        //selecciona 
        const Box = entro.target.querySelector('#select')
        //si intersecciona le pone la animacion del meneo
        if(entro.isIntersecting){
            Box.classList.add('animacionWiggle')
            return
        }
        //si no esta intersecctando se saca la animacion 
        Box.classList.remove('animacionWiggle')
    })
})
//se le dice al observador que tiene que observar 
Observador.observe(document.querySelector('#botonCopiarRojo'))


/* Acordeon */

for(let i = 0 ;i< acordion.length; i++ ){
    acordion[i].addEventListener('click', ()=>{
        acordion[i].nextElementSibling.classList.toggle('activo')
        /* para que la pregunta final quede bien el border-bottom */
        if(acordion[i].classList.contains('last')){
            acordion[i].nextElementSibling.classList.toggle('borderR')
            acordion[i].classList.toggle('borderR')
        }

        icons[i].src = acordion[i].nextElementSibling.classList.contains('activo') ? "./imgs/imagenes/chevronDown.png" : "./imgs/imagenes/chevronRight.png";
        acordion[i].nextElementSibling.classList.contains('activo')? icons[i].style.height = '18px' : icons[i].style.height = '30px'
    })
}