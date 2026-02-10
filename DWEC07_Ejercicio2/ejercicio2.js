//Elementos del HTML
const selectCategoria = document.getElementById("selectCategoria");
const bicicletas = document.getElementById("bicicletas");

//URL
const url = "http://api.raulserranoweb.es/rest.php";

function cargarBicicletas(categoria="") {
    let urlCategoria = "";
    //Si se ha seleccionado una categoria, añadir el parámetro cat
    if(categoria != "") {
        urlCategoria = url + "?cat=" + categoria;
    }
    else {
        urlCategoria = url;
    }

    //Fetch
    fetch(urlCategoria)
    .then(respuesta => respuesta.json()) 
    .then(datos => mostrarBicicletas(datos));
}

function mostrarBicicletas(lista) {
    bicicletas.innerHTML = "";

    for (let i in lista) {
        let bici = lista[i];

        let article = document.createElement("article");

        article.innerHTML = "<img src='http://api.raulserranoweb.es/imagenes_art/" + bici.cod + "'>" +
        "<p><strong>Nombre: </strong>" + bici.nom + "</p>" +
        "<p><strong>Descripción: </strong>" + bici.des + "</p>" +
        "<p><strong>Categoría: </strong>" + bici.cat + "</p>";

        bicicletas.appendChild(article);
    }
}

selectCategoria.addEventListener("change", function() {
    const categoriaSeleccionada = selectCategoria.value;
    cargarBicicletas(categoriaSeleccionada);
});

cargarBicicletas();