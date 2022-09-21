let botonRojo = document.getElementById("botonCopiarRojo");
let botonCopiar = document.getElementsByClassName("desc-code-boton")[0];
let footer = document.getElementsByClassName("footer-container")[0];

const select = document.getElementById("select");
//traidos de HTML
let iconoSubir = document.getElementById('clickarriba')

/* Chevron Up */
iconoSubir.addEventListener('click', () =>{
    window.scrollTo(0, 0)
})

botonCopiar.addEventListener('click', () =>{
    botonCopiar.innerHTML = `<button class="boton botonDescuentoClickeado"><img src="./imgs/iconos/IconCheckBlanco.svg" alt="Icono de texto copiado"> Código de descuento copiado</button>`
    ClipboardJS.copy('MAMAYOQUIERO')
    setTimeout(() => {
        botonCopiar.innerHTML =   `<button class="boton botonDescuento"><img src="./imgs/iconos/IconCopyNegro.svg" alt="Icono de copiar texto"> <span> Cod. 10% descuento <b>MAMAYOQUIERO</b></span></button>`  
    }, 2000);
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
        iconoSubir.classList.add('fixed2')

    } else {
        footer.classList.remove("fixed")
        iconoSubir.classList.remove('fixed2')
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
