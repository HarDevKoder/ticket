// Función para retrasar carga del script
setTimeout(() => {

  // Función que valida la información ingresada por el usuario
  function validarEntrada(mensaje, validacion) {
    let entrada = prompt(mensaje);
    while (!validacion(entrada)) {
      entrada = prompt("Entrada no válida!\n" + mensaje);
    }
    return entrada;
  }

  // Funcion asincrona para ejecucion continua y mostrar resultados
  async function solicitarDatos() {
    let mensajes = ["Prohibido!", "2 Horas", "Indefinido"];
    let continuar = true;

    while (continuar) {

      // Validación de los datos de entrada
      let nombre = validarEntrada("Ingresa tu Nombre: ",(entrada) => entrada.trim() !== "");
      let apellido = validarEntrada("Ingresa tu Apellido: ", (entrada) => entrada.trim() !== "");
      let edad = validarEntrada("Ingresa tu edad: ", (entrada) => !isNaN(entrada) && entrada.trim() !== "");

      // Convierto edad en numero
      edad = Number(edad);

      // selecciono mensaje de acuerdo a edad
      let ingreso = edad < 18 ? mensajes[0] : edad === 18 ? mensajes[1] : mensajes[2];

      // Escribo valores en el Ticket 
      document.getElementById("nombre").innerHTML = `Nombre: ${nombre}`;
      document.getElementById("apellido").innerHTML = `Apellido: ${apellido}`;
      document.getElementById("edad").innerHTML = `Edad: ${edad} Años`;
      document.getElementById("ingreso").innerHTML = `Ingreso: ${ingreso}`;

      // se pregunta si desea continuar sin bloquear la impresion de los datos
      continuar = await new Promise((resolve) =>
        setTimeout(() => resolve(confirm("Deseas Continuar? ")), 500)
      );
    }

    // Mensaje de despedida
    alert("Hasta la vista Baby! 😢");
  }

  // llamada a la funcion
  solicitarDatos();
  
}, 500);