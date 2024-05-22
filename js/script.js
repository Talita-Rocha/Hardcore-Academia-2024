//alert('JS carregado');

//Manipulação de DOM
//querySelector é uma ação que será realizada dentro do document da classe indicada!
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var bgPopup = document.querySelector('.bg-popup');
var btnClose = document.querySelector('.close');

//Exibindo no console do navegador (para visualizar as variáveis no console em inspecionar)
//console.log(btnMenu);
//console.log(menu);

//Associando eventos aos elementos selecionados

btnMenu.addEventListener('click', function(){
    //menu.style.display='block;'
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
    
})

menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
})


btnClose.addEventListener('click', function(){
    bgPopup.classList.add('bg-popup-close');
})

