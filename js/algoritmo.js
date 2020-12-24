function analizar(){
    var fecha_inicio = document.getElementById('fecha_inicial').value;
    var fecha_final = document.getElementById('fecha_final').value;
    let fecha1 = new Date(fecha_inicio);
    let fecha2 = new Date(fecha_final);
    let milisegundosdia = 24 * 60 * 60 * 1000;
    let milisegundostranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
    let diastranscurridos = Math.round(milisegundostranscurridos / milisegundosdia)+1;
    let diasfaltantes = 180 - Number(diastranscurridos);
    if(diastranscurridos === 180){
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: `Dias faltantes: ${diasfaltantes}`,
            width: 350,
            showConfirmButton: false,
            timer: 5000
        })
    }else if(diastranscurridos < 180){
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: `Dias faltantes: ${diasfaltantes}`,
            width: 350,
            showConfirmButton: false,
            timer: 5000
        })
    }
}

function calcular(){
    var fecha_inicio = document.getElementById('fecha_inicial').value;
    var fecha_final = document.getElementById('fecha_final').value;
    var renumeracion_basica = document.getElementById('renumeracion_basica').value;
    var asignacion_familiar = document.getElementById('asignacion_familiar').value;
    var gratificacion = document.getElementById('gratificacion').value;
    var faltas_justificadas = document.getElementById('faltas_justificadas').value;
    var faltas_injustificadas = document.getElementById('faltas_injustificadas').value;
    var licencia_con = document.getElementById('licencia_con').value;
    var licencia_sin = document.getElementById('licencia_sin').value;
    var comision_1 = document.getElementById('comision_1').value;
    var comision_2 = document.getElementById('comision_2').value;
    var comision_3 = document.getElementById('comision_3').value;
    var comision_4 = document.getElementById('comision_4').value;
    var comision_5 = document.getElementById('comision_5').value;
    var comision_6 = document.getElementById('comision_6').value;
    let fecha1 = new Date(fecha_inicio);
    let fecha2 = new Date(fecha_final);
    let milisegundosdia = 24 * 60 * 60 * 1000;
    let milisegundostranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
    let diastranscurridos = Math.round(milisegundostranscurridos / milisegundosdia)+1;
    let diasCTS = 180;
    var ganado = Number(faltas_justificadas) + Number(licencia_con);
    var perdida = Number(faltas_injustificadas) + Number(licencia_sin);
    if(diastranscurridos === 180){
        var trabajados = (Number(diastranscurridos) + Number(ganado)) - perdida; 
    }else{
        var trabajados = (Number(diasCTS) + Number(ganado)) - perdida; 
    }
    var Gratificacion = gratificacion / 6;
    var Suma_comisiones = Number(comision_1) + Number(comision_2) + Number(comision_3) + Number(comision_4) + Number(comision_5) + Number(comision_6); 
    if(Suma_comisiones > 0){
        var Total_comisiones = Suma_comisiones / 6;
        var Renumeracion_computable = Number(renumeracion_basica) + Number(asignacion_familiar) + Number(Gratificacion) + Number(Total_comisiones);
        document.getElementById('Total_comisiones-').innerText = 'Promedio comisiones: S/';
        document.getElementById('Total_comisiones').innerText = Total_comisiones.toFixed(2);
        document.getElementById('Renumeracion_computable').innerText = Renumeracion_computable.toFixed(2);
    }else{
        var Renumeracion_computable = Number(renumeracion_basica) + Number(asignacion_familiar) + Number(Gratificacion);
        document.getElementById('Total_comisiones-').innerText = 'Promedio comisiones:';
        document.getElementById('Total_comisiones').innerText = 'No';
        document.getElementById('Renumeracion_computable').innerText = Renumeracion_computable.toFixed(2);
    }
    var Total_CTS = (Renumeracion_computable / 360) * trabajados;
    document.getElementById('Renumeracion_basica').innerText = renumeracion_basica;
    document.getElementById('Asignacion_familiar').innerText = asignacion_familiar;
    document.getElementById('Gratificacion').innerText = Gratificacion.toFixed(2); 
    document.getElementById('Renumeracion_computable+').innerText = Renumeracion_computable.toFixed(2);
    document.getElementById('Total_dias').innerText = trabajados;
    document.getElementById('Total_CTS').innerText = Total_CTS.toFixed(2);
}
function borrar(){
    document.getElementById('renumeracion_basica').value = 0;
    document.getElementById('asignacion_familiar').value = 0;
    document.getElementById('gratificacion').value = 0;
    document.getElementById('faltas_justificadas').value = 0;
    document.getElementById('faltas_injustificadas').value = 0;
    document.getElementById('licencia_con').value = 0;
    document.getElementById('licencia_sin').value = 0;
    document.getElementById('comision_1').value = 0;
    document.getElementById('comision_2').value = 0;
    document.getElementById('comision_3').value = 0;
    document.getElementById('comision_4').value = 0;
    document.getElementById('comision_5').value = 0;
    document.getElementById('comision_6').value = 0;
}
document.getElementById('fecha_final').addEventListener('input', analizar)
document.getElementById('calcular').addEventListener('click', calcular)
document.getElementById('borrar').addEventListener('click', borrar)
