
export function extraerPersonajes(array) {
    array.results.forEach(element => {
        console.log(element);
    });
}

export function ingresarDom(personajes) {
    let contenedor = document.querySelector("#tarjetas");
    contenedor.innerHTML = "";
    Character(personajes); 
}

