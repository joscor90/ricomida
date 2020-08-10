/*Este código es de Jquery y ejecuta la función una vez cargada la página. Es necesario para que los tooltip funcionen*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip() // Aqui buscamos la etiqueta data-toggle="tooltip" y la activa
  })


/*Como nota para un tooltip personalizado podemos ver las opciones en Bootstrap, específicamente template*/