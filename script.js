
// Animação ao aparecer na tela

const elementos = document.querySelectorAll(
".card, .sobre p, .fotos img, .contato"
);


const observador = new IntersectionObserver((entradas)=>{


entradas.forEach((entrada)=>{


if(entrada.isIntersecting){

entrada.target.classList.add("mostrar");

}


});


},
{
threshold:0.2
});



elementos.forEach((elemento)=>{

observador.observe(elemento);

});





// Ano automático no rodapé

const ano = new Date().getFullYear();

const rodape = document.querySelector("footer p");


if(rodape){

rodape.innerHTML =
"© " + ano + " Vidrosestillo - Vidros e Esquadrias Premium";

}
const botaoMenu = document.querySelector(".menu-mobile");

const menu = document.querySelector(".menu");


botaoMenu.addEventListener("click",()=>{

menu.classList.toggle("ativo");

});
