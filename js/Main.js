// Filtro

function animadas(){

    // Declarar contenedores
    let contAnimadas = document.getElementById("animadas");
    let contAventuras  = document.getElementById("aventuras");
    let contDrama  = document.getElementById("drama");

    // Declarar botones
    let botonAnimadas = document.getElementById("btn-animadas");
    let botonAventuras  = document.getElementById("btn-aventuras");
    let botonDrama  = document.getElementById("btn-drama");

    // Añadir o remover clase

    // Contenedores
    contAnimadas.classList.add("active");
    contAventuras.classList.remove("active");
    contDrama.classList.remove("active");

    // Botones
    botonAnimadas.classList.add("active");
    botonAventuras.classList.remove("active");
    botonDrama.classList.remove("active");

}

function aventuras(){

    // Declarar contenedores
    let contAnimadas = document.getElementById("animadas");
    let contAventuras  = document.getElementById("aventuras");
    let contDrama  = document.getElementById("drama");

    // Declarar botones
    let botonAnimadas = document.getElementById("btn-animadas");
    let botonAventuras  = document.getElementById("btn-aventuras");
    let botonDrama  = document.getElementById("btn-drama");

    // Añadir o remover clase

    // Contenedores
    contAnimadas.classList.remove("active");
    contAventuras.classList.add("active");
    contDrama.classList.remove("active");

    // Botones
    botonAnimadas.classList.remove("active");
    botonAventuras.classList.add("active");
    botonDrama.classList.remove("active");

}

function drama(){

    // Declarar contenedores
    let contAnimadas = document.getElementById("animadas");
    let contAventuras  = document.getElementById("aventuras");
    let contDrama  = document.getElementById("drama");

    // Declarar botones
    let botonAnimadas = document.getElementById("btn-animadas");
    let botonAventuras  = document.getElementById("btn-aventuras");
    let botonDrama  = document.getElementById("btn-drama");

    // Añadir o remover clase

    // Contenedores
    contAnimadas.classList.remove("active");
    contAventuras.classList.remove("active");
    contDrama.classList.add("active");

    // Botones
    botonAnimadas.classList.remove("active");
    botonAventuras.classList.remove("active");
    botonDrama.classList.add("active");

}

function modal(){
    let contModal = document.getElementById("modal");
    contModal.classList.add("active");
}

function cerrarM(){
    let contModal = document.getElementById("modal");
    contModal.classList.remove("active");
}

function Menu(){
    let contMenu = document.getElementById("menu");
    contMenu.classList.toggle("active");
}