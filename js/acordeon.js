/* acordion */
const acordion = document.getElementsByClassName('acordion')
const icons = document.getElementsByClassName("icono");

/* Acordeon */
for(let i = 0 ;i< acordion.length; i++ ){
    acordion[i].addEventListener('click', ()=>{
        for (let e=0;e<acordion.length; e++){
            if(i ==e){
            acordion[e].nextElementSibling.classList.toggle('activo')
            icons[e].src = "./imgs/imagenes/chevronDown.png"  
            
            }else{
            acordion[e].nextElementSibling.classList.remove('activo')
            icons[e].src ="./imgs/imagenes/chevronRight.png";
        }
        /* para que la pregunta final quede bien el border-bottom */
        if(acordion[i].classList.contains('last')){
            acordion[i].nextElementSibling.classList.toggle('borderR')
            acordion[i].classList.toggle('borderR')
        }
    }
    
        icons[i].src = acordion[i].nextElementSibling.classList.contains('activo') ? "./imgs/imagenes/chevronDown.png" : "./imgs/imagenes/chevronRight.png";
    })
}