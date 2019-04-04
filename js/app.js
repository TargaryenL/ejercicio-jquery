/**
*
* La pagina debe calcular la segunda potencia del numero ingresado
* al hacer clic en el boton.
*
* 1.Recuperar la referencia del boton
* 2.Asignar el evento click
* 3.Crear una funcion que se ejecute con el evento
* 4.Dentro de la funcion hacer los calculos y mostrar
*
*/

$("#btn1").click(function(ev){
	ev.preventDefault(); /*evita que el formulario se envie al servidor
	/**
	*4.1 Recuperar el valor ingresado por el usuario y guardar en una variable
	*4.2 realizar el calculo y guardar en una variable2
	*4.3 Mostrar resultados
	*/
	let ingresado = $("#n1").val();
	let result = ingresado * ingresado;

	console.log(result);

	/* Carga el resultado en el parrafo*/
	$(".res1").html(ingresado+"<sup>2</sup> ="+ result);

	$(".res1").css("border", "solid 5px red")

});