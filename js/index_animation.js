window.addEventListener('scroll', ()=>{

    //posts

    let posts= document.getElementsByClassName('recentPost');
  
    posicionPost1= posts[0].getBoundingClientRect().top;
  
    let windowSize= window.innerHeight;
  
    if(windowSize > posicionPost1){
        posts[0].classList.add('fadeInLeft');
    }

    //proyectos

    let proyectos= document.getElementsByClassName('recentProject');

    posicionProyecto1= proyectos[0].getBoundingClientRect().top;
    posicionProyecto2= proyectos[1].getBoundingClientRect().top;
    posicionProyecto3= proyectos[2].getBoundingClientRect().top;

    if(windowSize > posicionProyecto1){
        proyectos[0].classList.add('fadeInUp');
    }
    if(windowSize > posicionProyecto2){
        proyectos[1].classList.add('fadeInUp');
    }
    if(windowSize > posicionProyecto3){
        proyectos[2].classList.add('fadeInUp');
    }

    //message

    let frase= document.querySelector('.weeklyMessage');

    posicionfrase= frase.getBoundingClientRect().top;

    if(windowSize > posicionfrase){
        frase.classList.add('fadeIn');
    }
})