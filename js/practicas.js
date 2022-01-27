let space = `<br>`;
let space2 = `<br><br>`;
let devolverPaginaAnterior = `<a href="pagina3.html">
                                <img src="css/img/382.jpg" alt="">
                              </a>`;
document.write(devolverPaginaAnterior);
//*se usa para pedir un dato al usuario
let nombreE = prompt ("¿Cual es tu nombre?");
//*un mensaje de alerta
//alert ("Bienvenido " + nombre);
// *---------------------------------------------------
// *@@@@@@@ Operaciones de asignacion @@@@@@@@@@@@@@@@@
// *---------------------------------------------------
//* asignacion
let numero = 10;
//* adicion
numero += 11;
//* sustraccion
numero -= 5;
//* multiplicacion
numero *= 2;
//* division
numero /= 2;
//* el numero es dividido por el valor que le demos y si es divisible marca 0 si no es divisible te dice cuanto sobro
//* resto 10 / 3 = 1 | porque 10 no lo podes dividir entre 3 el mas cercano es 9 asi que sobra 1
numero %= 7;
//*exponentiation
numero **= 20;
document.write(space + "Resultado = " + numero);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
let numero1 = 25;
let numero2 = 30;
//*dependiendo de lo que queramos hacer se lo ponen los simbolos antes mostrados
let resultado = (numero1 += numero2);
document.write(space + " Resultado= " + resultado);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@ Concatenar @@@@@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
let nombre = "Jhin";
let saludo = "Hola";
let pregunta = `¿Como estas? ${nombre}`;
let frase = saludo + " " + pregunta;
document.write(space + frase);
//*para hacer que no se resuelvan matematicamente en caso de poner numeros solo que que poner ""
//*al inicio, ya que si detecta texto va a suponer que todo es texto
document.write(
  space + "los numero a sumar son: " + numero1 + "+" + numero2 + "="
);
document.write(numero1 + numero2);
//*esta forma te ayuda ha evitar errores ${}
//*importante solo funciona con ``
//*con consulta
// let css1 = prompt ("¿Cual es tu nombre de la publicidad?");
// let css2 = prompt ("¿Cual es la imagen?");
// let css3 = prompt ("¿Cual es la ciudad?");
// let css4 = prompt ("¿Cual es rublo?");
// let css5 = prompt ("¿Cual es categoria?");
//*auo llenado
let css1 = "sushi";
let css2 = 1;
let css3 = "caracas";
let css4 = "sushi";
let css5 = "comida";
let html5 = `<section class="p3-grid">
<div class="p3-contenedor">
  <div class="p3-box">
    <a href="a1.html">
      <picture class="p3-imagen">
        <img src="${`css/img/`}${css2}${".jpg"}" alt="">
      </picture>
    </a>
    <div class="p3-categoria">
      <span>
        <h2>${css1}</h2>
      </span>
      <span>
        <a href="">${css3}s&nbsp;-&nbsp;</a>
        <a href="">${css4}&nbsp;-&nbsp;</a>
        <a href="">${css5}</a>
      </span>
    </div>
  </div>
</div>
</section>`;
// *se puede usar "" o '' pero al usar estas `` te da mas libertad y evita errores
document.write(space + html5);

let html =
  `<h4 class="locas">Hola</h4>` + ` Bienvenido ${nombre} como estas?<br><br>`;
document.write(html);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@ Operadores  de comparacion @@@@@@@@@
// *---------------------------------------------------
let n1 = 3;
let n2 = 33;
var n3 = 34;
var n4 = 50;
var n5 = 91;
let t1 = "23";
document.write(`<h6>n1 = ${n1}</h6>
<h6>n2 = ${n2}</h6>
<h6>n3 = ${n3}</h6>
<h6>n4 = ${n4}</h6>
<h6>n5 = ${n5}</h6>
<h6>t1 = ${t1}</h6>`);
// *---------------------------------------------------
// *@@@@@@@@@@ Operadores Aritmeticos @@@@@@@@@@@@@@@@@
// *---------------------------------------------------
document.write("n1 == n2 =");
document.write(n1 == n2);
document.write(space);
document.write("n1 != n2 = ");
document.write(n1 != n2);
document.write(space);

document.write("t1 == n1 =");
//*este compara si son iguales sin importar el tipo de dato
document.write(t1 == n1);
document.write(space);
//*mientras que este tienen que ser exactamente iguales para ser true
document.write("t2 === n1 =");
document.write(t1 === n1);
document.write(space);
//*en caso de que no sean iguales marca true(no reconoce tipo de dato)
document.write("t1 != n1 =");
document.write(t1 != n1);
//*en caso de que no sean estrictamente iguales
document.write(space);
//*marca que no son iguales porque a un que el numero sea el mismo no son el mismo tipo de dato(reconoce tipo de dato)
document.write("t1 !== n1 =");
document.write(t1 !== n1);
//*mayor que menor que
document.write(space);
document.write("n1 < n2 =");
document.write(n1 < n2);
document.write(space);
document.write("n1 > n2 =");
document.write(n1 > n2);
document.write(space);
document.write("n1 >= n2 =");
document.write(n1 >= n2);
document.write(space);
document.write("n1 <= n2 =");
document.write(n1 <= n2);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@ operadores  de Logicos @@@@@@@@@@@@
// *---------------------------------------------------
let v1 = true;
let v2 = true;
//*trabajan con true false
//* el resultado es true solo si los dos valores son true de lo contraria es false
let r1 = v1 && v2;
//*si alguna es true el resultado es true
let r2 = v1 || v2;
//* el ! invierte el valor de true a false y viceversa
let r3 = !v1;
document.write(space + r3 + space);
//*una operacion larga
var n3 = 34;
var n4 = 50;
var n5 = 91;
//*         true       true    false      false       true
let op1 = (n1 < n2 || n2 < n3) && !(n1 != n2) && n5 != n3;
//*        true       true     true         true        false
let op2 = (n5 > n2 && n4 < n3) || !(n1 === n2) || n3 != n3;
//*n1 es menor que n2 o si n1 es igual a n2 el resultado es true
document.write(n1 < n2 || n1 == n2);
document.write(space + "op1 =" + op1);
document.write(space + "op2 =" + op2);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@ Condicionales @@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
// if
// else if
// else if
// else
// var pregunta1 = prompt("un numero menor a 30");
// if (pregunta1 < 30) {
//     alert("pasaste");
// }
// else if (30 < pregunta1) {
//     alert("reprobaste");
// }
// else {
//     alert("inserte un valor valido")
// }
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@ Ejercicios @@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
//* 1)validar con if - else que te dice que helado puedes comprar con tu saldo
// //*respuesta larga
// var saldoCofla = prompt("Cuanto diner tienes Cofla");
// var saldoPrometeo = prompt("Cuanto diner tienes Prometeo");
// var saldoPolar = prompt("Cuanto diner tienes Polar");
//  saldoCofla = parseInt(saldoCofla);
//  saldoPrometeo = parseInt(saldoPrometeo);
//  saldoPolar = parseInt(saldoPolar);
// if (saldoCofla >= 0.6 && saldoCofla < 1) {
//     alert(`comprate el helado de piña`);
//     alert("vuelto: " + (saldoCofla - 0.6) + "Bs.S");
// }
// else if (saldoCofla >= 1 && saldoCofla < 1.6) {
//     alert("Cofla comprate el helado de crema");
//     alert("vuelto: " + (saldoCofla - 1) + "Bs.S");
// }
// else if (saldoCofla >= 1.6 && saldoCofla < 1.7) {
//     alert("Cofla comprate el helado de heladix");
//     alert("vuelto: " + (saldoCofla - 1.6) + "Bs.S");
// }
// else if (saldoCofla >= 1.7 && saldoCofla < 1.8) {
//     alert("Cofla comprate el helado de heladovich");
//     alert("vuelto: " + (saldoCofla - 1.7) + "Bs.S");
// }
// else if (saldoCofla >= 1.8 && saldoCofla < 2.9) {
//     alert("Cofla comprate el helado de helado");
//     alert("vuelto: " + (saldoCofla - 1.8) + "Bs.S");
// }
// else if (saldoCofla >= 2.9) {
//     alert("Cofla comprate el helado de conflei o pote de 1/4 kg");
//     alert("vuelto: " + (saldoCofla - 2.9) + "Bs.S");
// }
// else {
//     alert("Cofla no tenes dinero");
// }
// //*--------------------------------------------------
// if (saldoPrometeo >= 0.6 && saldoPrometeo < 1) {
//     alert("Prometeo comprate el helado de mango");
// }
// else if (saldoPrometeo >= 1 && saldoPrometeo < 1.6) {
//     alert("Prometeo comprate el helado de crema");
// }
// else if (saldoPrometeo >= 1.6 && saldoPrometeo < 1.7) {
//     alert("Prometeo comprate el helado de heladix");
// }
// else if (saldoPrometeo >= 1.7 && saldoPrometeo < 1.8) {
//     alert("Prometeo comprate el helado de heladovich");
// }
// else if (saldoPrometeo >= 1.8 && saldoPrometeo < 2.9) {
//     alert("Prometeo comprate el helado de helado");
// }
// else if (saldoPrometeo >= 2.9) {
//     alert("Prometeo comprate el helado de conflei o pote de 1/4 kg");
// }
// else {
//     alert("Prometeo no tenes dinero");
// }
// //*--------------------------------------------------
// if (saldoPolar >= 0.6 && saldoPolar < 1) {
//     alert("Polar comprate el helado de coco");
// }
// else if (saldoPolar >= 1 && saldoPolar < 1.6) {
//     alert("Polar comprate el helado de crema");
// }
// else if (saldoPolar >= 1.6 && saldoPolar < 1.7) {
//     alert("Polar comprate el helado de heladix");
// }
// else if (saldoPolar >= 1.7 && saldoPolar < 1.8) {
//     alert("Polar comprate el helado de heladovich");
// }
// else if (saldoPolar >= 1.8 && saldoPolar < 2.9) {
//     alert("Polar comprate el helado de helado");
// }
// else if (saldoPolar >= 2.9) {
//     alert("Polar comprate el helado de conflei o pote de 1/4 kg");
// }
// else {
//     alert("Polar no tenes dinero");
// }
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 1 @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Comprar helado @@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//*respuesta corta

// const definirCompra = (n)=>{
//     let din = prompt(`Dinero de ${n}`);
//     if (din >= 0.6 && din < 1) return (`${n}: helado de mango`);
//     if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
//     if (din >= 1.6 && din < 1.7) return (`${n}: helado de chocolate`);
//     if (din >= 1.7 && din < 1.8) return (`${n}: helado de ron con pasas`);
//     if (din >= 1.8 && din < 2.9) return (`${n}: helado de fresa`);
//     if (din >= 2.9) return (`${n}: helado de almendras o pote de 1/4kg de mantecado`);
//     else return (`${n}: no te alcanza`);
// }
// //*impremir los datos en la consola
// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Prometeo"));
// console.log(definirCompra("Polar"));
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@ Fin Bloque 1 @@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
// *--------------------------------------------------
// *@@@@@@@@@@@@@@ Arreglo @@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
//*arreglo normal para llamarlo comenzamos en 0
let frutas = ["coco", "pera", "fresa", 5, 4, 6];
document.write(space + "fruta = " + frutas[2]);
// *arreglos asociativos los llamamos por un nombre pre-establecido por nosotros
let pc = {
  usuario: "Elio",
  procesador: "Intel Core i7",
  ram: "8GB",
  espacio: "1TB",
};
document.write(space + `Usuario = ` + pc["usuario"]);
document.write(space + `Ram = ` + pc["ram"]);

let procesador = pc["procesador"];
let espacio = pc["espacio"];
let laptop = `<br>Procesador = ${procesador}<br>
<p class="pc">Espacio =${espacio}</p> 
`;
document.write(laptop);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@@@ Bucles e iteracion @@@@@@@@@@@@@@
// *---------------------------------------------------
numeroParaSumar = 0;
if (numeroParaSumar < 10) {
  document.write("es menor que 10");
  document.write(space + numeroParaSumar);
}
//* en caso de usar do primero se ejecuta y luego pregunta
do {
  numeroParaSumar++;
  document.write(numeroParaSumar + ", ");
} while (numeroParaSumar <= 10);
//* con el while pregunta y si es cumple se ejecuta
while (n1 > 0) {
  document.write(`<br>📣📢 Impacto en  = ` + n1);
  n1--;
}
if (n1 == 0) {
  document.write(
    space +
    `Impacto 💥💥🔥💫🎇🎆<br> <img class="parto" src="css/img/390.jpg" alt="">`
  );
}
//*break --------------cerrar un ciclo
while (n1 < 20) {
  n1++;
  document.write(n1);
  if (n1 == 10) {
    break;
  }
}
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@@@ For @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
//* creamos la variable interna del for
//* le damos una condicion
//* luego le decimos si es en incremento o decremento
//* por ultimo lo que queramos que haga
for (let i = 0; i < 6; i++) {
  document.write(space + i);
}
for (let i = 5; i !== 0; i--) {
  document.write(space + i);
}
//*  o la declaramos por fuera
let i = 0;
for (i; i < 20; i++) {
  if (i == 6) {
    document.write(`<br><p class="locas">CI: 2.798.260</p>`);
  }
  //*con continue puedes saltarte pasos
  if (i == 6) {
    continue;
  }

  if (i == 12) {
    break;
  }
  document.write(space + `<i style="color: red;">${i}</i>`);
}
document.write(i);
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@@@ For - in @@@@@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
let comidas = ["pasta", "arroz", "cochino", "sopa", "pasticho"];
comidas.bebidas = ["mango", "pera", "piña", "cocada"];
//* si lo dejas solo te muestra el indice
//* y el nombre de alguna propiedad vinculada
document.write(space + `<b class="locas">For In Indice</b>`);
for (comida in comidas) {
  document.write(space + comida);
}
//*si le especificas te muestra el contenido
//*tanto del elemento que seleccionamos como de sus propiedades
document.write(space + `<b class="locas">For In Contenido</b>`);
for (comida in comidas) {
  document.write(space + comidas[comida]);
}
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@@@ For - Of @@@@@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
//*muestra el  valor
//*como of te muestra el contenido podes bloquear cosas que no quieras
document.write(space + `<b class="locas">For Of</b>`);
for (comida of comidas) {
  if (comida == "cochino") {
    continue;
  }
  document.write(space + comida);
}
document.write(space + `<b class="locas">For Of propiedades</b>`);
for (comida of comidas.bebidas) {
  document.write(space + comida);
}
// document.write(space + comidas.bebidas + space);
let array1 = ["marta", "jhancarla", "natali", "fabiola"];
let array2 = ["alexander", "alejandro", "jelkfrieths", "miguel", array1];
document.write(space + `<b class="locas">Hombres</b>` + space);
let nameM = 0;
let nameH = 0;
//*para detener el bucle se puede
//*1
// donas:
for (array in array2) {
  if (array == 4) {
    // break donas;
    document.write(space + `<b class="locas">Hembras</b>`);
    for (let array of array1) {
      nameM++;
      //*para saltarte algun contenido
      // if (array == "natali"){
      // continue;
      //*si queremos cerra el ciclo for cuando llegue a un contenido
      // continue donas;
      // }
      document.write(space + nameM + "-" + array);
    }
  } else {
    nameH++;
    document.write(nameH + "-" + array2[array] + space);
    //* o 2 con break solo o con condicional
    // break;
    // if (array == 1){
    //   break;
    // }
  }
}
// *---------------------------------------------------
// *@@@@@@@@@@@@@@@@@ Funciones @@@@@@@@@@@@@@@@@@@@@@@
// *---------------------------------------------------
function hacerCaja(/*se pueden poner las variables aqui y llenarlas cuando se llame la funcion */) {
  let box1 = prompt("¿Cual es tu nombre de la publicidad?");
  let box2 = prompt("¿Cual es la imagen?");
  let box3 = prompt("¿Cual es la ciudad?");
  let box4 = prompt("¿Cual es rublo?");
  let box5 = prompt("¿Cual es categoria?");
  let box = `
  <section class="p3-grid">
    <div class="p3-contenedor">
      <div class="p3-box">
        <a href="a1.html">
          <picture class="p3-imagen">
            <img src="${`css/img/`}${box2}${".jpg"}" alt="">
          </picture>
        </a>
        <div class="p3-categoria">
          <span>
            <h2>${box1}</h2>
          </span>
          <span>
            <a href="">${box3}s&nbsp;-&nbsp;</a>
            <a href="">${box4}&nbsp;-&nbsp;</a>
            <a href="">${box5}</a>
          </span>
        </div>
      </div>
    </div>
  </section>`;
  document.write(space + box);
}
// hacerCaja(/*se tienen que poner los valores de las variables */);
//* en base de datos
// function saludar(name) {
//   let saludo = space + `hola ${name} como te va?`;
//   document.write(saludo);
// }
// saludar("Aatrox");
//*con consulta
// function saludar(){
//   let name = prompt("cual es tu nombre")
//   let saludo = space+`hola ${name} como te va?`;
//   document.write(saludo);
// }
// saludar();
//*guardando la funcion en una variable
// const saldo = function(){
//     let name = prompt("cual es tu nombre")
//     let saludo = space+`hola ${name} como te va?`;
//     document.write(saludo);
//   }
//   saldo();
//*funciones flecha el function se convierte en  "=>" de hay su nombre
//* si solo usamos un parametro podemos quitar los parentesis
//*y si solo se ejecuta una linea de codigo podemos quitar los corchetes
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@ Ejemplos Funcion en fecha @@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let com = 2;
let com2 = 24;
let res = com + com2;
//* nombreFuncion  = parametro y la linea de codigo asta el primer ; solo funciona de esta manera si es una linea de codigo
//*-------------------------------------------------------------------------------------------
const nombreFuncion = (parametro) => (variable = com * com2 - res);
//*si no hay parametro---------------------------------------------------------------------------
const mas = () => (nombre1 = com * com2);
//*o la pones normal ---------------------------------------------------------------------------
const functionFecha = () => {
  menos = com - com2 / res;
  document.write(space + `${com}-${com2}/${res}=${menos}`);
};
document.write(space + com + "*" + com2 + "-" + res + "= " + nombreFuncion());
document.write(space + com + "*" + com2 + "= " + mas());
functionFecha();
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@ Ejercicios @@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
// * 1)hacer un sistema de validacion por edad y el primero que llega despues de las 2:00am tienes pase gratis
// let free = false;
// const validarPases = (time) => {
//   let edad = prompt("cual es tu edad?");
//   if (edad >= 18) {
//     if (time === 2 && time < 7 && free == false) {
//       alert(`puedes pasar gratis porque son las Hora: ${time}:00AM`);
//       free = true;
//     }   else {
//       alert(`paga la entrada Hora: ${time}`);
//     }
// }
// else {
//   alert("no pasas por menor de edad");
// }
// }
// validarPases(2);
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 1 @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@ validar la entrada a una fiesta de mayores @@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// * 2)registrar la lista de asistencia de un mes y decir quienes reprobaron por inasistencia
// let cantidad = prompt(`cuantos alumnos son?`);
// //*asi se crea un array(arreglo)sin poner valores
// let alumnosTotales = [];
// for (i = 0; i < cantidad; i++) {
//   alumnosTotales[i] = [prompt(`nombre del alumno = ` + (i + 1)), 0];
// }
// const tomarAsistencia = (nombre, a) => {
//   let presentes = prompt(nombre + ` (A)Asistio || (I)Inasistente  dia  = ` + (i + 1));
//   if (presentes == "A" || presentes == "a") {
//     alumnosTotales[a][1]++;
//   }
//  }
// for (i = 0; i < 30; i++) {
//   for (alumnos in alumnosTotales) {
//     tomarAsistencia(alumnosTotales[alumnos][0], alumnos);
//   }
// }
// for (alumnos in alumnosTotales) {
//   // *1) variable  =  numero de alumnos [nombre del alumnos][asistencias]
//   // *2) numero de alumnos [nombre del alumno][asistencias]
//   // *3) dias del mes menos las asistencias 30 - alumnos totales[nombre del alumno][asistencias]
//   let asistenciaAlMes = `${space}<strong class="nombre">${alumnosTotales[alumnos][0]}</strong> Asistencias del mes:${space}
//   (A)Asistencia: ${alumnosTotales[alumnos][1]}${space}
//   (i)Inasistencias: ${30 - alumnosTotales[alumnos][1]}`;

//   if (30 - alumnosTotales[alumnos][1] > 18) {
//     asistenciaAlMes += `<b class="ausencias">${space}${alumnosTotales[alumnos][0]} Reprobaste por Inasistencia</b>`;
//   }
//   else {

//     asistenciaAlMes += space + space;
//   } document.write(asistenciaAlMes);
// }
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 2 @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@ Revisar las asistencias de clase @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// * 3)Calculadora (del asco por que es por prompt)
// const suma = (numero01, numero02) => {
//   return parseInt(numero01) + parseInt(numero02);
// }
// const resta = (numero03, numero04) => {
//   return parseInt(numero03) - parseInt(numero04);
// }
// const multiplicar = (numero05, numero06) => {
//   return parseInt(numero05) * parseInt(numero06);
// }
// const dividir = (numero07, numero08) => {
//   return parseInt(numero07) / parseInt(numero08);
// }

// alert("que operacion desea realizar?");
// let operacion01 = prompt(`1:Suma, 2:Resta, 3:Multiplicacion, 4:Division`);
// if (operacion01 == 1) {
//   let numero01 = prompt(`Primer Valor`);
//   let numero02 = prompt(`${numero01} + Segundo Valor`);
//   resultadoSuma = suma(numero01,numero02);
//   alert(`${numero01} + ${numero02} = ${resultadoSuma}`);
// }
// else if (operacion01 == 2) {
//   let numero03 = prompt(`Primer Valor`);
//   let numero04 = prompt(`${numero03} - Segundo Valor`);
//   resultadoResta = resta(numero03,numero04);
//   alert(`${numero03} - ${numero04} = ${resultadoResta}`);
// }
// else if (operacion01 == 3) {
//   let numero05 = prompt(`Primer Valor`);
//   let numero06 = prompt(`${numero05} * Segundo Valor`);
//   resultadoMultiplicacion = multiplicar(numero05,numero06);
//   alert(`${numero05} * ${numero06} = ${resultadoMultiplicacion}`);
// }
// else if (operacion01 == 4) {
//   let numero07 = prompt(`Primer Valor`);
//   let numero08 = prompt(`${numero07} / Segundo Valor`);
//   resultadoDivision = dividir(numero07,numero08);
//   alert(`${numero07} / ${numero08} = ${resultadoDivision}`);
// }
// else {
//   alert("No ha ingresado un parametro valido");
// }

// *sin funciones
// alert("que operacion desea realizar?");
// let operacion01 = prompt(`1:Suma, 2:Resta, 3:Multiplicacion, 4:Division`);
// if (operacion01 == 1) {
//   let numero01 = prompt(`Primer Valor`);
//   let numero02 = prompt(`${numero01} + Segundo Valor`);
//   resultadoSuma = parseInt(numero01) + parseInt(numero02);
//   alert(`${numero01} + ${numero02} = ${resultadoSuma}`);
// }
// else if (operacion01 == 2) {
//   let numero03 = prompt(`Primer Valor`);
//   let numero04 = prompt(`${numero03} - Segundo Valor`);
//   resultadoSuma = parseInt(numero03) - parseInt(numero04);
//   alert(`${numero03} - ${numero04} = ${resultadoSuma}`);
// }
// else if (operacion01 == 3) {
//   let numero05 = prompt(`Primer Valor`);
//   let numero06 = prompt(`${numero05} * Segundo Valor`);
//   resultadoSuma = parseInt(numero07) * parseInt(numero06);
//   alert(`${numero05} * ${numero06} = ${resultadoSuma}`);
// }
// else if (operacion01 == 4) {
//   let numero07 = prompt(`Primer Valor`);
//   let numero08 = prompt(`${numero07} / Segundo Valor`);
//   resultadoSuma = parseInt(numero07) / parseInt(numero08);
//   alert(`${numero07} / ${numero08} = ${resultadoSuma}`);
// }
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 3 @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Calculadora Basica @@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin Bloque 2 @@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@ Programacion Orientada a Objetos @@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@ Classes  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
class Animal {
  constructor(especie, edad, tiempo, color) {
    //* this.+ el nombre que queramos + variables de constructor()
    //* lo que pongamos en el this.name es el nombre por el que se reutiliza el dato;
    this.especie = especie;
    this.edad = edad;
    this.tiempo = tiempo;
    this.color = color;
    this.info = `Especie: ${this.especie}, Edad: ${this.edad} ${tiempo}, Color: ${this.color}`;
  }
  // *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // *@@@@@@@ crear un Metodo  @@@@@@@@@@@@@@@@@@@@@@@@@
  // *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //*los this solo funcionan dentro de "class/constructor"
  //* y las funcionen en flecha no pueden llevar metodos(const,let y var) en las clases
  //*un metodo es una herramienta que nos permite automatizar una tarea ejemplo una consulta de datos
  verInfo = () => {
    // document.write(perro);
    console.log(this.info);
    // console.log(perro.edad + perro.tiempo);
  };
  // ladrar =()=>{
  //   if (this.especie == "perro"){
  //     console.log("Waw");
  //   }else{
  //     console.log(`no puede ladrar por que es un ${this.especie}`);
  //   }
  // }
}
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@ crear una herencia @@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// * no se puede tener un objeto con el nombre de la clase
class Perro extends Animal {
  //*si queremos heredar algo del constructor o crear nuevos
  constructor(especie, edad, tiempo, color, raza) {
    //*hay ue usar la palabra clave super
    super(especie, edad, tiempo, color, raza);
    // this.raza = raza;
    //*ejemplo para metodo (getters, setters)
    this.raza = raza;
    this.info = ` Especie: ${this.especie}, Edad: ${this.edad} ${tiempo}, Color: ${this.color}, Raza: ${this.raza}`;
  }
  //* ahora no hace falta poner la condicional porque solo agregamos perros
  // *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // *@@@@@@@ crear un metodo estatico @@@@@@@@@@@@@@@@@
  // *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //* para crear un metodo estatico tienes no necesitas definir una clase
  //* ejemplo ladrar por que no necesitas las propiedades
  ladrar() {
    console.log("Waw");
  }
  //*se escribe como metodo pero lo toma como propiedad
  //*set modifica se recomienda poner un identificador
  set setModificarRaza(newName) {
    this.raza = newName;
  }
  //*get consulta
  get getRaza() {
    return this.raza;
  }
  //* y si algo esta mal se ejecuta y te manda valor "undefined"
  static Ladrar() {
    console.log("Waw");
  }
}
//* por ende se puede hacer esto y funciona
Perro.Ladrar();

//* perro va hacer un objeto nuevo de la clase animal
//*recomendado definir las clases con const
//* porque con let si se cambia el valor mas adelante pueden saltar errores
const perro1 = new Perro(
  "perro",
  5,
  "años",
  "blanco con manchas negras",
  "Dalmata"
);
const perro2 = new Perro("perro", 2, "meses", "marron", "Desconocida");
const perro3 = new Perro("perro", 1, "año", "blanco", "Pudel");
const perro4 = new Perro("perro", 3, "años", "negro con marron", "Desconocida");
const paloma = new Animal("paloma", 10, "meses", "verde");
// *
console.log(perro1);
console.log(perro2.edad);
console.log(perro3.edad + perro3.tiempo);
perro4.verInfo();

//*informacion
// console.log(perro.info);
// console.log(paloma.info);
// * el metodo abreviado que creamos||variable del constructor.verInfo();
// * hereda el metodo pero hay que modificarlo para ajustarlo a las nuevas categorias
perro1.verInfo();
//* pero estos dejan de funcionar
perro1.ladrar();
perro2.ladrar();
console.log(perro2.raza);
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@ crear un metodo metodo (getters, setters) @@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
perro2.setModificarRaza = "sambernando";
console.log(perro2.raza);
console.log(perro3.getRaza);
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@ Ejercicios @@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
// * A) crear un sistema que guarde las caracteristicas de un telefono y te las muestre
//* mas crear las funciones(metodos) para prender,apagar,tomar fotos y grabar
class Celulares {
  constructor(marca, color, peso, resolucion, tamaño, camara, ram) {
    this.marca = marca;
    this.color = color;
    this.peso = peso;
    this.rdPantalla = resolucion;
    this.tamañoDePantalla = tamaño;
    this.rdCamara = camara;
    this.ram = ram;
    this.bntApagar = false;
    this.estado = null;
  }
  infoCelular() {
    return document.write(`<p class="telefonos">${space}
    <b class="marca">${this.marca + space}</b>
    Color : ${this.color + space}
    Peso : ${this.peso + space}
    Resolucion de Pantalla : ${this.rdPantalla + space}
    Tamaño de Pantalla : ${this.tamañoDePantalla + space} Pulgadas
    Resolucion de Camara : ${this.rdCamara + space}
    Memoria Ram : ${this.ram} </p>
    `);
  }
  //* si se ejecuta el metodo estando prendido--------------------------------------------------------------
  celularEncendido() {
    if (this.bntApagar == true) {
      alert(`Su ${this.marca} esta encendido = 📱✅`);
      this.estado = `Encendido = 📱✅`;
      this.bntApagar = true;
    } else {
      alert(`Su ${this.marca} se esta apagando = 📱❌`);
      this.estado = `Apagado = 📱❌`;
      this.bntApagar = false;
    }
  }
  apagar() {
    if (this.bntApagar == true) {
      // alert("apagando");
      // this.bntApagar = false;
      let estadoCelular = prompt(`Desea apagar su ${this.marca} si o no: `);
      if (
        estadoCelular == "si" ||
        estadoCelular == "sI" ||
        estadoCelular == "Si" ||
        estadoCelular == "SI"
      ) {
        this.bntApagar = false;
        this.estado = `Apagado = 📱❌`;
      } else {
        this.bntApagar = true;
        this.estado = `Encendido = 📱❌`;
        // alert("encendiendo");
      }
    }
  }
  //* si se ejecute el metodo estando apagado--------------------------------------------------------------
  celularApagado() {
    if (this.bntApagar == false) {
      alert(`Su ${this.marca} esta Apagado = 📱❌`);
      this.estado = `Apagado= 📱❌`;
      this.bntApagar = false;
    } else {
      alert(`Su ${this.marca} se esta encendiendo = 📱✅`);
      this.estado = `Encendido = 📱✅`;
      this.bntApagar = true;
    }
  }
  encender() {
    if (this.bntApagar == false) {
      // alert("apagando");
      // this.bntApagar = false;
      let estadoCelular = prompt(`Desea encender su ${this.marca} si o no: `);
      if (
        estadoCelular == "si" ||
        estadoCelular == "sI" ||
        estadoCelular == "Si" ||
        estadoCelular == "SI"
      ) {
        this.bntApagar = true;
        this.estado = `Encendido = 📱✅`;
      } else {
        this.bntApagar = false;
        this.estado = `Apagado = 📱❌`;
        // alert("encendiendo");
      }
    }
  }

  //* metodo para abreviar comandos
  tomarFoto() {
    alert(`Foto toda con resolucion de: ${this.rdCamara}`);
  }
  grabarVideo() {
    alert(`Grabando video en ${this.rdCamara}`);
  }
  prender(telefono) {
    if (telefono.bntApagar == true) {
      telefono.celularEncendido();
      telefono.apagar();
      if (telefono.estado == `Apagado = 📱❌`) {
        telefono.celular();
      } else {
        telefono.tomarFoto();
        telefono.grabarVideo();
        telefono.apagar();
        telefono.celularEncendido();
        console.log(telefono.bntApagar);
      }
    } else {
      telefono.celularApagado();
      telefono.encender();
      if (telefono.estado == `Apagado = 📱❌`) {
        alert(`su dispositivo se mantendra apagado: 📱❌`);
      } else {
        telefono.tomarFoto();
        telefono.grabarVideo();
        telefono.apagar();
        telefono.celularEncendido();
        console.log(telefono.bntApagar);
      }
    }
  }
}
//* color, peso, resolucion de pantalla, tamaño de pantalla, resolucion de camara, ram
const nokia = new Celulares(
  "Nokia",
  "negro",
  "150gm",
  "2k",
  "5",
  "10MPx",
  "8GB"
);
const samsung = new Celulares(
  "Samsung",
  "vinotinto",
  "200gm",
  "4k",
  "5.5",
  "16MPx",
  "32GB"
);
const xiaomi = new Celulares(
  "Xiaomi",
  "azul marino",
  "300gm",
  "2k",
  "5.2",
  "10MPx",
  "8GB"
);
//*gracias al error parese que no puedo ejecutar cosas despues de usar prender
//* prender telefono
// nokia.prender(nokia);

// document.write(`${space + nokia.infoCelular(nokia)}
// ${space + xiaomi.infoCelular(xiaomi)}
// ${space + samsung.infoCelular(samsung)}
// `
// );
//*usar este metodo para evitar errores
//*imprimir la info del telefono
document.write(space + space + `<p class="telefonos"><b>Gama Baja</b></p>`);
nokia.infoCelular();
xiaomi.infoCelular();
samsung.infoCelular();
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 1 @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@ Caracteristicas y funciones de un telefono @@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *2)hedera el class Celulares y modificar
class CelularesAltaGama extends Celulares {
  constructor(
    marca,
    color,
    peso,
    resolucion,
    tamaño,
    camara,
    ram,
    camaraExtra
  ) {
    super(marca, color, peso, resolucion, tamaño, camara, ram);
    this.camaraExtra = camaraExtra;
    this.bntApagar = false;
    this.estado = null;
  }
  //* mi solucion
  infoCelularAltaGama() {
    return document.write(`<p class="telefonos-gama-alta">${space}
  <b class="marca">${this.marca + space}</b>
    Color : ${this.color + space}
    Peso : ${this.peso + space}
    Resolucion de Pantalla : ${this.rdPantalla + space}
    Tamaño de Pantalla : ${this.tamañoDePantalla + space} Pulgadas
    Resolucion de Camara : ${this.rdCamara + space}
    Camara Frontal : ${this.camaraExtra + space}
    Memoria Ram : ${this.ram}</p>`);
  }
  //* ejemplo del curso pero solo me funciona si uso document y al usarlo me salta el undefined
  // infoCelularAltaGama() {
  //   return this.infoCelular() + `resolucion de camara frontal : ${this.camaraExtra}`;
  // }
  grabarEnCamaraRapida() {
    alert(`Tu ${this.marca} puede grabar en camara rapida 📱🎥🚀`);
  }
  reconocimientoFacial() {
    alert(`Tu ${this.marca} puede hacer reconocimiento facial📱🔎😀`);
  }
  opcionesAvanzadas(telefono) {
    let verOpciones = prompt(
      `Quiere ver las opciones Avanzadas del ${this.marca} 🔎 si o no`
    );
    if (
      verOpciones == "si" ||
      verOpciones == "sI" ||
      verOpciones == "Si" ||
      verOpciones == "SI"
    ) {
      telefono.grabarEnCamaraRapida();
      telefono.reconocimientoFacial();
    } else {
      alert("gracias por su visita 👋");
    }
  }
}
const Nokia = new CelularesAltaGama(
  "Nokia",
  "blanco",
  "300gm",
  "4k",
  "5.5",
  "16MPx",
  "8GB",
  "14MPx"
);
const Motorola = new CelularesAltaGama(
  "Motorola",
  "negro",
  "350gm",
  "4k",
  "6",
  "16MPx",
  "16GB",
  "16MPx"
);

document.write(
  space + space + `<p class="telefonos-gama-alta"><b>Gama Alta</b></p>`
);
Motorola.infoCelularAltaGama();
Nokia.infoCelularAltaGama();
// document.write(`${Nokia.infoCelularAltaGama()}`);
//*para ver las opciones avanzadas del telefono
// Nokia.opcionesAvanzadas(Nokia);
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 2 @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@ herera el class y modificar el ejercicio 1  @@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *3)Hacer un sistema que guarde informacion de 7 app de telefono
class App {
  constructor(nombreApp, descargas, puntuacion, peso) {
    this.nombreApp = nombreApp;
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.instalada = false;
    this.ejecutando = false;
  }
  infoApp() {
    document.write(`${space}<div class="app"><h2 class="titulo-app">Informacion de ${this.nombreApp
      }</h2>${space}
    Nombre de la App : ${this.nombreApp + space}
    Numero de descargas : ${this.descargas + space}
    Puntuacion de los Usuarios : ${this.puntuacion + space}
    Peso de la App : ${this.peso}</div>
    `);
  }
  instalarApp() {
    if (this.instalada == false) {
      let descargar = prompt(
        `Desea instalar  ${this.nombreApp} en su dispositivo?`
      );
      if (
        descargar == "si" ||
        descargar == "sI" ||
        descargar == "Si" ||
        descargar == "SI"
      ) {
        alert("Instalando ⏳");
        this.instalada = true;
        alert(`${this.nombreApp} se a instalado con exito 😀✅🌐`);
      } else {
        alert(`Se a cancelado la descarga de ${this.nombreApp} ❗😧⁉`);
      }
    }
  }
  abrirApp() {
    if (this.instalada == true) {
      this.ejecutando = true;
      alert(`${this.nombreApp} se esta abriendo 📱✅⏳ `);
    }
    if (this.instalada == false) {
      alert(`${this.nombreApp} No esta instalada ✋😵‼⛔⛔⛔‼`);
      let descargar = prompt(
        `Desea instalar  ${this.nombreApp} en su dispositivo?`
      );
      if (
        descargar == "si" ||
        descargar == "sI" ||
        descargar == "Si" ||
        descargar == "SI"
      ) {
        alert("Instalando ⏳");
        this.instalada = true;
        alert(`${this.nombreApp} se a instalado con exito 😀✅🌐`);
      } else {
        alert(`Se a cancelado la descarga de ${this.nombreApp} ❗😧⁉`);
      }
    }
  }
  cerrarApp() {
    if (this.ejecutando == true) {
      let descargar = prompt(
        `Desea cerrar la app ${this.nombreApp} en su dispositivo?`
      );
      if (
        descargar == "si" ||
        descargar == "sI" ||
        descargar == "Si" ||
        descargar == "SI"
      ) {
        alert("Cerrando⏳");
        this.ejecutando = false;
        alert(`${this.nombreApp} se cerro con exito 😀✅🌐`);
      } else {
        alert(`Se a cancelado con exito el cierre de ${this.nombreApp}😀`);
      }
    }
  }

  desinstalarApp() {
    if (this.instalada == true) {
      let preguntaDesinstalar = prompt(
        `Desea desinstalar ${this.nombreApp} de su dispositivo`
      );
      if (
        preguntaDesinstalar == "si" ||
        preguntaDesinstalar == "sI" ||
        preguntaDesinstalar == "Si" ||
        preguntaDesinstalar == "SI"
      ) {
        this.instalada = false;
        alert(`${this.nombreApp} se desinstalo con exito 😦👋`);
      } else {
        alert(
          `Se cancelo Satisfactoriamente la desinstalacion de ${this.nombreApp}`
        );
      }
    } else {
      alert(`‼No se encontro el archivo ${this.nombreApp}‼‼`);
      let descargar = prompt(
        `Desea instalar  ${this.nombreApp} en su dispositivo?`
      );
      if (
        descargar == "si" ||
        descargar == "sI" ||
        descargar == "Si" ||
        descargar == "SI"
      ) {
        alert("Instalando ⏳");
        this.instalada = true;
        alert(`${this.nombreApp} se a instalado con exito 😀✅🌐`);
      } else {
        alert(`Se a cancelado la descarga de ${this.nombreApp} ❗😧⁉`);
      }
    }
  }
  //* compile todos los metodos en este metodo
  cicloApp(app) {
    app.infoApp();
    if (app.instalada == false) {
      app.instalarApp();
      if (app.instalada == true) {
        app.abrirApp();
        app.cerrarApp();
        if (app.ejecutando == false) {
          app.desinstalarApp();
        }
      }
    } else {
      app.abrirApp();
      app.cerrarApp();
      if (app.iniciada == false) {
        app.desinstalarApp();
      }
    }
  }
}
const PuntoPromo = new App("Punto Promo", "30.000 mil", "🌕🌕🌕🌑🌑", "40Mb");
const Aoruz = new App("Aoruz", "300.000 mil", "🌕🌕🌕🌕🌑", "100Mb");
const LocosPorLasLaptops = new App(
  "Locos por las laptop",
  "3.000 mil",
  "🌕🌕🌕🌕🌑",
  "30Mb"
);
const Oxford = new App("Oxford", "10.000 mil", "🌕🌕🌕🌕🌑", "80Mb");
const WorldOfSleeping = new App(
  "The World Of Sleeping",
  "500.000 mil",
  "🌕🌕🌕🌕🌕",
  "50Mb"
);
const ComoSeHace = new App(
  "¿comó se hace?",
  "50.000 mil",
  "🌕🌕🌕🌕🌑",
  "60Mb"
);
const ChismeAllTime = new App(
  "Chisme 27/7",
  "3.000.000 millones",
  "🌕🌕🌕🌕🌑",
  "130Mb"
);
// PuntoPromo.cicloApp(PuntoPromo);
// Aoruz.cicloApp(Aoruz);
// LocosPorLasLaptops.cicloApp(LocosPorLasLaptops);
// Oxford.cicloApp(Oxford);
// WorldOfSleeping.cicloApp(WorldOfSleeping);
// ComoSeHace.cicloApp(ComoSeHace);
// ChismeAllTime.cicloApp(ChismeAllTime);
PuntoPromo.infoApp(PuntoPromo);
Aoruz.infoApp(Aoruz);
LocosPorLasLaptops.infoApp(LocosPorLasLaptops);
Oxford.infoApp(Oxford);
WorldOfSleeping.infoApp(WorldOfSleeping);
ComoSeHace.infoApp(ComoSeHace);
ChismeAllTime.infoApp(ChismeAllTime);
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@ Fin Bloque 3 @@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@ Metodos en cadena @@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let cadena1 = "cadena1 = hola como estas loca loca loca loca? ";
//* es igual que poner  new string javascrip lo hace automatico
let cadena2 = new String("cadena2 = bien y tu cadena1? ");
let cadena3 = "bien  hambriento voy a ir a comer";
let cadena4 = "bien  hambriento";
let cadena5 = "mer";

let Respuesta1 = cadena1.concat(" tengo sueño");
let Respuesta2 = cadena2.concat(" yo tambien ");
let Respuesta3 = cadena1.concat(space + cadena2);
let Respuesta4 = cadena1.startsWith(cadena2);
// ! el startsWith() revisa si son iguales asta donde llegue la cadena mas corta(false or true)
let Respuesta5 = cadena3.startsWith(cadena4);
// ! el endsWith() revisa que sean igual asta donde llegue la cadena mas corta
let Respuesta6 = cadena3.endsWith(cadena5);
// ! includes() busca si hay coincidencias entre cadenas con 1 ya es true
let Respuesta7 = cadena3.includes(cadena4);
//* se puede usar para buscar si alguna cadena usa un valor en especifico
let Respuesta8 = cadena1.includes("loca");
//*  si estas buscando mas de una cadena te dice cuantas de las cadenas que estas buscando hay
let Respuesta9 =
  cadena1.includes("loca") +
  cadena1.includes("hola") +
  cadena1.includes("como") +
  cadena1.includes("auto");
// ! indexOf() busca lo mismo que el anterior pero te da la posicion en caracteres si no esta marca -1
let Respuesta10 = cadena1.indexOf("loca");
let Respuesta11 = cadena1.indexOf("cocada");
// ! lastIndexOf() busca lo mismo pero te marca la ultima posicion en la que que aparece el valor a buscar en casa de que este repetido
let Respuesta12 = cadena1.lastIndexOf("loca");
document.write(
  space +
  `<b>probando metodo de cadena</b>` +
  space +
  Respuesta1 +
  space +
  Respuesta2 +
  space +
  Respuesta4 +
  space +
  `y ustedes cadena3 y cadena4 como estan?
  ${space} cadena3 = ${cadena3} 
  ${space} cadena4 = ${cadena4}
  ${space} cadena5 = ${cadena5}` +
  space +
  space +
  "StartsWith entre cadena3 y cadena4 = " +
  Respuesta5 +
  space +
  "EndsWith entre cadena3 y cadena4 = " +
  Respuesta6 +
  space +
  "Includes entre cadena3 y cadena4 = " +
  Respuesta7 +
  space +
  "Include en cadena1 esta la palabra loca = " +
  Respuesta8 +
  space +
  `buscando loca,hola,como y auto N# de cadenas true = ` +
  Respuesta9 +
  space +
  "en que posicion esta la palabra loca = " +
  Respuesta10 +
  space +
  "en que posicion esta la palabra cocada = " +
  Respuesta11 +
  space +
  "cual es la ultima posicion de la palabra loca = " +
  Respuesta12
);
//*para ver el caracter de una cadena segun su posicion
document.write(space);
document.write(cadena1[26] + cadena1[27] + cadena1[28] + cadena1[29]);
document.write(space);
document.write(
  cadena1[41] + cadena1[42] + cadena1[43] + cadena1[44] + cadena1[45]
);

let cadena6 = "ABC ";
let cadena7 = "";
//* no es estandar pero se puede usar
// ! padStart() revisa si la cadena tiene el numero que caracteres deseado y si no agrega elementos asta llegar
//*                        caracteres rellenar con ""
let Respuesta13 = cadena6.padStart(10, "0123456");
// ! padEnd() igual pero rellena despues de la cadena en caso de que la cadena tenga mas caracteres no hace nada
let Respuesta14 = cadena7.padEnd(15, "hola que haces?");
// ! repeat() repite la cadena cuantas veces marquemos
let Respuesta15 = cadena6.repeat(3);
document.write(space + Respuesta13 + space + Respuesta14 + space + Respuesta15);
// ! split() - divide la cadena como le pidamos
// * convierte la cadena en un array y el valor que pongamos en el split es el que reconoce como separacion
let cadena8 = `hola°que°haces°Veigar`;
let Respuesta16 = cadena8.split(`°`);
let Respuesta17 = cadena8.split(`haces`);
document.write(space + Respuesta16[3]);
document.write(space + Respuesta17[1]);
// ! substring() -  nos retorna un pedazo de cadena que comienza y termina donde le pidamos
let Respuesta18 = cadena8.substring(0, 21);
document.write(space + Respuesta18);
// ! toLower() - pasa las letras a minusculas
let cadena9 = `TENGO GANAS DE CAMINAR`;
let Respuesta19 = cadena9.toLowerCase();
document.write(space + cadena9 + space + Respuesta19);
// ! toUpperCace() - cambia a mayusculas 
let cadena10 = `Ekko,Oriana,Jinx,Victor,Camil`;
let Respuesta20 = cadena10.toUpperCase();
document.write(space + cadena10 + space + Respuesta20);
// ! toString() - cambiarte un numero en string(text)
let cadena11 = 53;
let cadena12 = ["Camil", "Senna", "Maestro Yi", "Shaco"]
let Respuesta21 = cadena11.toString();
// todo: si es un array lo convierte en texto normal
let Respuesta22 = cadena12.toString();
// todo: no se suma por que se cambio la cadena11 a dato string
// todo: solo funciona si usas "+" ya que es para concatenar con los otros si funciona(*/-)
document.write(space + 2 + Respuesta21);
// todo: se multiplica porque ambos son number
document.write(space + 153 + cadena11 + space);
// * array
document.write(cadena12[1] + space);
// * texto
document.write(Respuesta22[6] + Respuesta22[7] + Respuesta22[8] + Respuesta22[9] + Respuesta22[10]);
// ! La propiedad length de un objeto String representa la longitud de una cadena
document.write(space + cadena10.length);
// * en caso de array cuantos elementos tiene 
document.write(space + cadena12.length);
// ! trim() - El método trim( ) elimina los espacios en blanco en ambos extremos del string
// * no funciona con los espacios internos 
var orig = '  com  ida  ';
console.log(orig.trim());
// ! trimEnd() -  elimina los espacios en blanco al final de una cadena de caracteres. trimRight() es el alias de este método.
const greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimEnd());
// expected output: "   Hello world!";
// ! trimStars() -  elimina los espacios en blanco al principio de una cadena de caracteres. trimLeft() es el alias de este método.
console.log(greeting.trimStart());
// expected output: "Hello world!   ";
// ! valueOf() - El valor primitivo del objeto especificado.
function MyNumberType(n) {
  this.number = n;
}
MyNumberType.prototype.valueOf = function () {
  return this.number;
};
const object1 = new MyNumberType(4);
console.log(object1 + 3);
// expected output: 7
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo ----------------------Metodos de Array Transformadores----------------------
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo: los metodos transformadores modifican el elemento no lo copian y modifican la copia 
// todo: por eso lo estoy haciendo directamente con document
// ! El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
document.write(space + space + "Metodo Pop()")
let plants1 = ['broccoli', ' cauliflower', ' cabbage', ' kale', ' tomato'];
document.write(space + space + plants1 + space);
document.write(space + `<i style="color: #3f87a6;">Eliminando el ultimo elemento: </i>` + plants1.pop() + space);
document.write(space + plants1 + space);
document.write(space + `<i style="color: #3f87a6;">Eliminando el ultimo elemento: </i>` + plants1.pop() + space);
document.write(space + plants1 + space);
document.write(space + `<i style="color: #3f87a6;">Eliminando el ultimo elemento: </i>` + plants1.pop());
document.write(space + space + plants1);
// ! shift() - el elimina al primero
document.write(space + space + "Metodo shift()")
let plants2 = [space + 'broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
document.write(space + space + plants2 + space);
document.write(space + `<i style="color: #ff005e;">Eliminando el Primer elemento: </i>` + plants2.shift() + space);
document.write(space + plants2 + space);
document.write(space + `<i style="color: #ff005e;">Eliminando el Primer elemento: </i>` + plants2.shift() + space);
document.write(space + plants2 + space);
document.write(space + `<i style="color: #ff005e;">Eliminando el Primer elemento: </i>` + plants2.shift());
document.write(space + space + plants2 + space);
// ! push - agrega un elemento al final
let plants3 = plants2.push(`papa`, `zanahoria`);
document.write(space + "push te indica con  cuantos elementos quedo la cadena a modificar : " + plants3);
document.write(space + space + plants2);
// ! reverse() - invierte el orden de los array
document.write(space + space + "el reverse cambia el orden del array:" + space + plants2.reverse());
// ! unshift() - los agrega al inicio
document.write(space + space + "se modifico a : " + plants2.unshift(`patilla`, `piña`) + " elementos" + space + plants2);
// ! sort() - ordena por nombre o orden numerico 
document.write(space + plants2.sort());
// ! splice(comienza,elimina) para eliminar elementos o agregar (se pueden al mismo tiempo)
// todo: en caso de no querer eliminar poner 0 en el segundo valor 
// todo: y e caso de no querer eliminar pero se quiera agregar al final usar -1(a un que el elemento eliminado aparecera al inicio ya que te muestra que valores elimino)
document.write(space + `<i style="color: #ff005e;">Elementos Eliminados: </i>` + plants2.splice(2, 0, "mango", "fresa") + space + plants2);
document.write(space + space + "eliminado: " + plants2.splice(-1, 1, "pera", "manzana") + space + space + plants2);
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo -----------------------------Accesores--------------------------------------
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ! join() - El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
document.write(space + space + "Posicion plants[1]: " + plants2[1] + space)
let Respuesta23 = plants2.join();
document.write(space + "el metodo join lo convierte el array en texto = " + Respuesta23[1]
  + `${space}la diferencia con toString es que puedes elegir como se separan los elementos del array`);
let cambio = plants2.sort();
let Respuesta24 = plants2.join(space + `🍱 = `);
document.write(space + "🍱 = " + Respuesta24);
let Respuesta25 = plants2.join(space + ` ❎🚧❎ `);
document.write(space + "❎🚧❎ " + Respuesta25);
// ! slice() - El método slice(inicio,fin) devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
let Respuesta26 = plants2.slice(1, 2);
document.write(space + "slice(1,2)" + space + Respuesta26);
// ! includes() El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
let Respuesta27 = plants2.includes("mango");
document.write(space + "hay mango : " + Respuesta27);
let Respuesta28 = plants2.includes("zanahoria");
document.write(space + "hay zanahoria : " + Respuesta28);
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo -----------------------------Repeticion-------------------------------------
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ! filter() - El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
document.write(space2 + "")
let Respuesta29 = plants2.filter(plants2 => document.write(space + "❎" + plants2));
// todo-----------------------------------------------------------------------------
let words = ['elemento', 'limite', 'elite', 'experiencia', 'destruccion', 'presente'];
//? el length es el que hace que funcione ya que da el valor de cuantos caracteres tiene un string o un array
let result = words.filter(word => word.length > 6);
let Respuesta30 = plants2.filter(plants2 => plants2.length >= 5);
console.log(words)
console.log(result);
console.log(Respuesta30)
// todo: el filter nos permite hacer lo mismo que un forEach pero con la opcion de hacer validaciones
// ! forEach() - El método forEach() ejecuta la función indicada una vez por cada elemento del array.
let abc = ['a', 'b', 'c'];
abc.forEach(element => console.log(element));
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo --------------------------Objeto Math -Basico-------------------------------
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ! sqrt() - La  función Math.sqrt() retorna la raíz cuadrada de un número
let Operacion1 = Math.sqrt(16);
document.write(space + "Raiz Cuadrada de 16 = " + Operacion1);
// ! cbrt() - La función Math.cbrt() nos retorna la raíz del cubo del numero
let Operacion2 = Math.cbrt(64);
document.write(space + "Raiz Cubica de 64 = " + Operacion2);
// ! max() - muestra el valor mas grande de los que se les den solo funciona con numeros
let Operacion3 = Math.max(2, 43, 54, 656, 1, 0.34, 56, 496, 4985);
document.write(space2 + "max() te muestra el numero mas alto de los que le des" + space2 + "Cual es el numero mas alto de : 2,43,54,656,1,0.34,56,496,4985")
document.write(space + "el mas alto es: " + Operacion3);
// ! min()
let Operacion4 = Math.min(2, 43, 54, 656, 1, 0.34, 56, 496, 4985);
document.write(space2 + "min() te muestra el numero mas bajo de los que le des" + space2 + "Cual es el numero mas bajo de : 2,43,54,656,1,0.34,56,496,4985")
document.write(space + "el mas bajo es: " + Operacion4);
// ! random() - te da un numero al asar entre 0 y 1 sin que sea ninguno de los dos
let Operacion5 = Math.random();
document.write(space2 + "Random: " + Operacion5);
let Operacion6 = Math.random() * 100;
document.write(space2 + "para tener un numero mayor habria que multiplicarlo ejemplo por 100:" + space2 + "random: " + Operacion6);
document.write(space2 + "pero tiene decimales para quitarlos hay que hacer unos pasos mas")
Operacion6 = Operacion6.toString();
Ope1 = Operacion6[0] + Operacion6[1];
document.write(space2 + "Random: " + Ope1);
document.write(space2 + 'pero si sale un numero entre 0 y 10 le pone un "."' + space2 + "para quitarlos hay que hacer un paso mas con if")
if (Operacion6[1] == ".") {
  Ope1 = Operacion6[0];
}
document.write(space2 + "Random: " + Ope1);
// ! round() - La función Math.round() retorna el valor de un número redondeado al entero más cercano.
document.write(space2 + "para evitar todo eso existe Round() que redondea el valor que le des al entero mas cercano")
let Ope2 = Math.round(Operacion6);
document.write(space2 + "Redondeando Random :" + Ope2);
//todo: pero a un asi puede darte 0 o 100 como evitamos eso con Math.floor que redondea siempre hacia bajo
let Ope3 = Math.floor(Operacion6 + 1);
document.write(space2 + Ope3 + space2);
for (var o = 0; o < 50; o++) {
  //todo: uso numero porque es un ciclo for y las variables externas no afectan a menos que la declare con "const"
  let numero = Math.random() * 99;
  numero = Math.floor(numero + 1);
  document.write(numero + " - ");
}
document.write(Ope3 + space2 + "el ultimo numero no esta dentro del for: " + Ope3);
// ! fround() - La función Math.fround () devuelve la precisión simple de 32 bits más cercana
console.log(Math.fround(5.5));
// expected output: 5.5

console.log(Math.fround(5.05));
// expected output: 5.050000190734863

console.log(Math.fround(5));
// expected output: 5

console.log(Math.fround(-5.05));
// expected output: -5.050000190734863
// ! floor() - Devuelve el máximo entero menor o igual a un número.
// todo: en otras palabras quita lo que esta despues de la 2.59494 para el floor es solo un 2
let Operacion7 = Math.floor(2.943);
document.write(space + Operacion7);
// ! trunc() - elimina los decimales el anterior lo redondea hacia abajo este elimina
// ? para mi hacen lo mismo trunc() y floor
let Operacion8 = Math.trunc(9.9);
document.write(space + Operacion8);
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo --------------------------Propiedades----------------------------------------
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ! PI - nos da el numero PI
document.write(space2 + "PI es igual a: " + Math.PI);
// ! SQRT1_2 - La propiedad Math.SQRT1_2 representa la raiz cuadrada de 1/2
document.write(space2 + "Raiz cuadrada de 1/2: " + Math.SQRT1_2);
// ! SQRT2 - La propiedad Math.SQRT2 representa la raíz cuadrada de de 2
document.write(space2 + "Raiz cuadrada de 2: " + Math.SQRT2);
// ! E - La propiedad Math.E representa la base de los logaritmos naturales
document.write(space2 + "Base de los logaritmos naturales: " + Math.E);
// ! Ln2 - La propiedad Math.LN2 representa el logaritmo natural de 2
document.write(space2 + "logaritmos natural de 2: " + Math.LN2);
// ! Ln10La propiedad Math.LN10 representa el logaritmo natural de 10
document.write(space2 + "logaritmos natural de 10: " + Math.LN10);
// ! Log2e - El base 2 del logaritmo natural de E
document.write(space2 + "logaritmos natural de E base 2: " + Math.LOG2E);
// ! Log10e - La propiedad Math.LOG10E representa el logaritmo base 10 de e
document.write(space2 + "logaritmos natural de E base 10: " + Math.LOG10E);
// *--------------------------------------------------
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@ Ejercicios @@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *--------------------------------------------------
//todo 1) Calculadora Avanzada
// class CalculadoraA {
//   constructor() {
//   }
//   suma(numero01, numero02) {
//     return parseInt(numero01) + parseInt(numero02);
//   }
//   resta(numero01, numero02) {
//     return parseInt(numero01) - parseInt(numero02);
//   }
//   multiplicar(numero01, numero02) {
//     return parseInt(numero01) * parseInt(numero02);
//   }
//   dividir(numero01, numero02) {
//     return parseInt(numero01) / parseInt(numero02);
//   }
//   potenciar(numero01, exp) {
//     return numero01 ** exp;
//   }
//   raizCubica(numero01){
//     return Math.cbrt(numero01);
//   }
//   raizCuadrada(numero01){
//     return Math.sqrt(numero01);
//   }
// }
// const Calculadora = new CalculadoraA();
// alert("que operacion desea realizar?");
// let operacion02 = prompt(`1:Suma, 2:Resta, 3:Multiplicacion, 4:Division, 5:Potenciación, 6:Raiz Cuadrada, 7:Raiz Cubica`);
// if (operacion02 == 1) {
//   let numero01 = prompt(`Primer Valor`);
//   let numero02 = prompt(`${numero01} + Segundo Valor`);
//   resultadoSuma = Calculadora.suma(numero01, numero02);
//   alert(`${numero01} + ${numero02} = ${resultadoSuma}`);
// }
// else if (operacion02 == 2) {
//   let numero01 = prompt(`Primer Valor`);
//   let numero02 = prompt(`${numero01} - Segundo Valor`);
//   resultadoResta = Calculadora.resta(numero01, numero02);
//   alert(`${numero01} - ${numero02} = ${resultadoResta}`);
// }
// else if (operacion02 == 3) {
//   let numero01 = prompt(`Primer Valor`);
//   let numero02 = prompt(`${numero01} * Segundo Valor`);
//   resultadoMultiplicacion = Calculadora.multiplicar(numero01, numero02);
//   alert(`${numero01} * ${numero02} = ${resultadoMultiplicacion}`);
// }
// else if (operacion02 == 4) {
//   let numero01 = prompt(`Primer Valor`);
//   let numero02 = prompt(`${numero01} / Segundo Valor`);
//   resultadoDivision = Calculadora.dividir(numero01, numero02);
//   alert(`${numero01} / ${numero02} = ${resultadoDivision}`);
// }
// else if (operacion02 == 5) {
//   let numero01 = prompt(`Valor de la Base`);
//   let exp = prompt(`${numero01} Valor del exponente`)
//   resultadoPotenciacion = Calculadora.potenciar(numero01, exp);
//   alert(`${numero01} ^ {${exp}} es igual a = ${resultadoPotenciacion}`)
// }
// else if (operacion02 == 6){
//   let numero01 = prompt(`Valor que desea saber la raiz cuadrada`);
//   resultadoPotenciacion = Calculadora.raizCuadrada(numero01);
//   alert(`La raiz cuadrada de √${numero01} es = ${resultadoPotenciacion}`)
// }
// else if (operacion02 ==7){
//   let numero01 = prompt(`Valor que desea saber la raiz cubica`);
//   resultadoPotenciacion = Calculadora.raizCubica(numero01);
//   alert(`La raiz cubica de √${numero01} es = ${resultadoPotenciacion}`)
// }
// else {
//   alert("No ha ingresado un parametro valido");
// } 
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@ Fin del ejercicio 1 @@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo@ Hacer una calculadora Avanzada  @@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//? 2) funcion de materias y profesores asignados
const obtenerInformacion = (materia) => {
  materias = {
    // ! en este caso se va a usar al primer elemento como el profesor por comodidad
    ingles: ["Heimerdinger", "Jhin", "Nami", "Vi"],
    matematica: ["Fiora", "Jhin", "Ekko"],
    fisica: ["Graves", "Jhin", "Nami", "Ekko", "Aatrox"],
    logica: ["Shen", "Jhin", "Nami", "Vi", "Ekko"]
  }
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  }
  else {
    return materias;
  }
}

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);
  if (informacion !== false) {
    let profesor = informacion[0][0];
    let estudiantes = informacion[0];
    estudiantes.shift();
    document.write(space2 + `<strong style="color:yellow">${profesor}</strong> es el profesor de <strong style="color:yellow">${informacion[1]}</strong>${space2}La lista de estudiantes son: <strong style="color:lightblue">${space + estudiantes}</strong>`);
  }
}
const cantidadDeClases = (estudiantes) => {
  let informacion = obtenerInformacion();
  let total = 0;
  let presente = [];
  document.write(space);
  for (info in informacion) {
    document.write(space + "📓- " + info);
    if (informacion[info].includes(estudiantes)) {
      total++;
      presente.push(" " + info);
    }
  }
  return `el estudiante <strong style="color:orange">${estudiantes}</strong> esta inscrito en: ${total} clases
  ${space} las clases son:<strong style="color:yellow">${presente}</strong>`;
}
mostrarInformacion("ingles");
mostrarInformacion("matematica");
mostrarInformacion("fisica");
mostrarInformacion("logica");
document.write(space2 + cantidadDeClases("Jhin"));
document.write(space2 + cantidadDeClases("Vi"));
document.write(space2 + cantidadDeClases("Ekko"));
document.write(space2 + cantidadDeClases("Aatrox"));
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ?@@@@@@@@@@@@@@@@@@@@@@@@@ Fin del ejercicio 2 @@@@@@@@@@@@@@@@@@@@@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// todo@@@@@@ Dar datos de los estudiantes,profesores y asignaturas  @@@@@@@@
// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//? 3) inscribir estudiantes y en caso de haber mas de 20 en la clase negar la inscripcion  
//* 6:45:39
