//ubicamos elementos dentro del DOM
let txtDias = document.getElementById('txtDias');
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');

// declaramos funcion de control
function countDown() {
    // objetos de fecha
    let ahora = new Date();
    let final = new Date(2023, 0, 11);
    //convertimos a timestamp
    let actual = ahora.getTime();
    let evento = final.getTime();

    //calculamos tiempo restante en milisegundos
    let restante = evento - actual;
    //avergiuamos los segundos
    let segundos = Math.floor(restante / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);



    console.log(segundos);
    console.log(minutos);
    console.log(horas);
    console.log(dias);

    //sobrantes de hora, minutos y segundos
    horas = horas % 24;
    if (horas < 10) {
        horas = '0' + horas;
    }
    minutos = minutos % 60;
    if (minutos < 10) {
        minutos = '0' + minutos;

    }
    segundos = segundos % 60;
    if (segundos < 10) {
        segundos = '0' + segundos;
    }
    console.log(horas);
    console.log(minutos);
    console.log(segundos);
    //imprimimos en las cajas de texto
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

countDown();
setInterval(countDown, 1000);