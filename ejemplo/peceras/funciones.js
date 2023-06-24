    let large = 0;
    let width = 0;
    let high = 0;
    let result = 0;
    let altura =0;
    let radio = 0;

    fun

function rectangular(){
        large = document.getElementById('txtLarge').value;
        width = document.getElementById('txtWidth').value;
        high = document.getElementById('txtHigh').value;

        result = ((parseInt(large) * parseInt(width) * parseInt(high)) / 1000); 
        window.alert("El total de litros necesarios para tu acuario es de " + result);
        document.getElementById("txtresultado").innerHTML=result;
}

function cuadrado(){
    large = document.getElementById('txtLarge').value;
    width = document.getElementById('txtWidth').value;
    result = ((parseInt(large) * parseInt(width))/ 1000); 
    document.getElementById("txtresultado").innerHTML=result;
    window.alert("El total de litros necesarios para tu acuario es de " + result);
}

function cilindro(){
    altura = document.getElementById('txtaltura').value;
    radio = document.getElementById('txtradio').value;
    result = (parseInt(altura)*parseInt(3.1416)*((parseInt(radio)*parseInt(radio)))/ 1000); 
    document.getElementById("txtresultado").innerHTML=result;
    window.alert("El total de litros necesarios para tu acuario es de " + result +" l");
}
function semicircular(){
    altura = document.getElementById('txtaltura').value;
    radio = document.getElementById('txtradio').value;
    result = ((parseInt(altura)*parseInt(3.1416)*((parseInt(radio)*parseInt(radio)))/4)/ 1000); 
    document.getElementById("txtresultado").innerHTML=result;
    window.alert("El total de litros necesarios para tu acuario es de " + result +" l");
}
function semicircular(){
    altura = document.getElementById('txtaltura').value;
    radio = document.getElementById('txtradio').value;
    result = ((parseInt(altura)*parseInt(3.1416)*((parseInt(radio)*parseInt(radio)))/4)/ 1000); 
    document.getElementById("txtresultado").innerHTML=result;
    window.alert("El total de litros necesarios para tu acuario es de " + result +" l");
}

function esferica(){
    radio = document.getElementById('txtradio').value;
    result = ((67/16)*(parseInt(radio)*parseInt(radio)*parseInt(radio))/ 1000); 
    document.getElementById("txtresultado").innerHTML=result;
    window.alert("El total de litros necesarios para tu acuario es de " + result +" l");
}

function triangular(){
    large = document.getElementById('txtLarge').value;
    width = document.getElementById('txtWidth').value;
    high = document.getElementById('txtHigh').value;

    result = (((parseInt(large) * parseInt(width) * parseInt(high))/2) / 1000); 
    window.alert("El total de litros necesarios para tu acuario es de " + result);
}

function panoramica(){
    large = document.getElementById('txtLarge').value;
    width = document.getElementById('txtWidth').value;
    high = document.getElementById('txtHigh').value;
    semiciru=((parseInt(large)/2));
    recta=((parseInt(large) * parseInt(width) * parseInt(high)));
    volcircu=((parseInt(high) * 3.1416 * parseInt(semiciru)) / 2)
    result = (parseInt(volcircu)*parseInt(recta))/ 1000; 
    window.alert("El total de litros necesarios para tu acuario es de " + result);
}
