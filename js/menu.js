const $menu = document.querySelector('.navbar');
const $button = document.querySelector('.hamburguer__menu');

$button.addEventListener('click',hideshow);

function hideshow(){
    if($menu.classList.contains('is-active')){
        $menu.classList.remove('is-active');
    }else{
        $menu.classList.add('is-active');
    }
}
