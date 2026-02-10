//Array para guardar los datos de los usuarios
let datosUsuarios = []; 

//Tabla, input del buscador y botón para buscar
const tabla = document.getElementById("tabla");
const buscador = document.getElementById("buscador");
const botonBuscar = document.getElementById("botonBuscar");

//Cargar datos
//URL
let url = "https://jsonplaceholder.typicode.com/users";
//Petición AJAX
fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        //Guardar los datos para poder buscar después
        datosUsuarios = data;
        //Mostrar los datos de los usuarios
        mostrarDatos(data);
    });

//Función para mostrar los datos en la tabla
function mostrarDatos(lista) {
    //Limpiar la tabla
    tabla.innerHTML = "";

    //Recorrer la lista de usuarios
    for (let i in lista) {

        //Guardar en la variable usuario el usuario actual
        let usuario = lista[i];

        //Crear una nueva fila
        const fila = document.createElement("tr");
        //Rellenar la fila con las tres columnas con los datos de la tabla que se pide en el enunciado
        fila.innerHTML =
            '<td>' + usuario.name + '</td>' +
            '<td>' + usuario.address.street + '</td>' +
            '<td>' + usuario.address.city + '</td>';
        //Añadir la fila del usuario a la tabla
        tabla.appendChild(fila);
    }
}

botonBuscar.addEventListener("click", function () {
    //Variable que contiene el texto que se ha escrito en el input
    const texto = buscador.value;
    //Usar filter para encontrar los usuarios cuyo nombre incluye el texto del buscador y almacenarlo en coincidencias
    const coincidencias = datosUsuarios.filter(usuario =>
        usuario.name.includes(texto)
    );

    //Mostrar las coincidencias
    mostrarDatos(coincidencias);
});
