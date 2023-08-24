// Función para retrasar carga del script
setTimeout(() => {
  // Funcion asincrona para ejecucion continua y mostrar resultados
  async function solicitarDatos() {
    let mensajes = ["Prohibido!", "2 Horas", "Indefinido"];
    let continuar = true;
    while (continuar) {
      // Solicitud de datos
      let nombre = prompt("Ingresa tu Nombre: ");
      let apellido = prompt("Ingresa tu Apellido: ");
      let edad = prompt("Ingresa tu edad: ");

      // Valido edad
      while (isNaN(edad) || edad.trim() === "") {
        edad = prompt("Edad no Válida!\nIngresa Tu Edad de nuevo: ");
      }

      // Convierto edad en numero
      edad = Number(edad);

      // selecciono mensaje de acuerdo a edad
      let ingreso =
        edad < 18 ? mensajes[0] : edad === 18 ? mensajes[1] : mensajes[2];
      document.getElementById("nombre").innerHTML = `Nombre: ${nombre}`;
      document.getElementById("apellido").innerHTML = `Apellido: ${apellido}`;
      document.getElementById("edad").innerHTML = `Edad: ${edad} Años`;
      document.getElementById("ingreso").innerHTML = `Ingreso: ${ingreso}`;

      // se pregunta si desea continuar sin bloquer la impresion de los datos
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

// CORRECCIONES
// 1- El programa se debe ejecutar idefinidamente hasta que lo quiera el usuario
// 2- validar que edad sea tipo numero y que no se deje en blanco
// 3- Imprimir tiquete en pantalla y preguntar si quiere continuar
