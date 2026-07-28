
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
// ===============================
// LIGHTBOX DA GALERIA
// ===============================

const imagensGaleria = document.querySelectorAll(".galeria-grid img");
const lightbox = document.getElementById("lightbox");
const imagemAmpliada = document.getElementById("imagem-ampliada");
const fecharLightbox = document.querySelector(".fechar-lightbox");

if (imagensGaleria.length && lightbox && imagemAmpliada && fecharLightbox) {

    imagensGaleria.forEach((img) => {

        img.addEventListener("click", () => {

            imagemAmpliada.src = img.src;
            imagemAmpliada.alt = img.alt;

            lightbox.classList.add("ativo");

        });

    });

    fecharLightbox.addEventListener("click", () => {

        lightbox.classList.remove("ativo");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("ativo");

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            lightbox.classList.remove("ativo");

        }

    });

}


