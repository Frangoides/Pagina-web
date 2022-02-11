function validarInput(){
    let mensaje = document.getElementById('mensaje');
    let a = document.getElementById('input');
    let valor = a.value;

    // 1. Comprobar si esta vacio
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    // 2. Comprobar si la longitud es menor a 8
    if(valor.length < 8){
        mensaje.innerHTML=`
            <span>Error, el mensaje debe tener minimo 8 caracteres</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    if(valor != '' && valor.length>=8){
        mensaje.innerHTML = '';
    }
}

function validar(){
    let mensaje = document.getElementById('mensaje');
    let a = document.getElementById('input');
    let valor = a.value;
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }else{
        alert("Informacion enviada con exito");
    }
    if(valor != ''){
        mensaje.innerHTML='';
    }
}

/*-----------------------------------------*/

function validarInput2(){
    let mensaje = document.getElementById('mensaje2');
    let a = document.getElementById('input2');
    let valor = a.value;

    // 1. Comprobar si esta vacio
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    // 2. Comprobar si la longitud es menor a 8
    if(valor.length < 8){
        mensaje.innerHTML=`
            <span>Error, el mensaje debe tener minimo 8 caracteres</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    if(valor != '' && valor.length>=8){
        mensaje.innerHTML = '';
    }
}

function validar2(){
    let mensaje = document.getElementById('mensaje2');
    let a = document.getElementById('input2');
    let valor = a.value;
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[1].style.color = 'red';
    }
    if(valor != ''){
        mensaje.innerHTML='';
    }
}
/*-----------------------------------------*/

function validarInput3(){
    let mensaje = document.getElementById('mensaje3');
    let a = document.getElementById('input3');
    let valor = a.value;

    // 1. Comprobar si esta vacio
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    // 2. Comprobar si la longitud es menor a 8
    if(valor.length < 8){
        mensaje.innerHTML=`
            <span>Error, el mensaje debe tener minimo 8 caracteres</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    if(valor != '' && valor.length>=8){
        mensaje.innerHTML = '';
    }
}

function validar3(){
    let mensaje = document.getElementById('mensaje3');
    let a = document.getElementById('input3');
    let valor = a.value;
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[2].style.color = 'red';
    }
    if(valor != ''){
        mensaje.innerHTML='';
    }
}

/*-----------------------------------------*/

function validarInput4(){
    let mensaje = document.getElementById('mensaje4');
    let a = document.getElementById('input4');
    let valor = a.value;

    // 1. Comprobar si esta vacio
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    // 2. Comprobar si la longitud es menor a 8
    if(valor.length < 8){
        mensaje.innerHTML=`
            <span>Error, el mensaje debe tener minimo 8 caracteres</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    if(valor != '' && valor.length>=8){
        mensaje.innerHTML = '';
    }
}

function validar4(){
    let mensaje = document.getElementById('mensaje4');
    let a = document.getElementById('input4');
    let valor = a.value;
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[3].style.color = 'red';
    }
    if(valor != ''){
        mensaje.innerHTML='';
    }
}

/*-----------------------------------------*/

function validarInput5(){
    let mensaje = document.getElementById('mensaje5');
    let a = document.getElementById('input5');
    let valor = a.value;

    // 1. Comprobar si esta vacio
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    
    
    
}

function validar5(){
    let mensaje = document.getElementById('mensaje5');
    let a = document.getElementById('input5');
    let valor = a.value;
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[4].style.color = 'red';
    }
    if(valor != ''){
        mensaje.innerHTML='';
    }
}

/*-----------------------------------------*/

function validarInput6(){
    let mensaje = document.getElementById('mensaje6');
    let a = document.getElementById('input6');
    let valor = a.value;

    // 1. Comprobar si esta vacio
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    // 2. Comprobar si la longitud es menor a 8
    if(valor.length < 100){
        mensaje.innerHTML=`
            <span>Error, el mensaje tiene un limite de 100</span>
        `;
        document.getElementsByTagName('span')[0].style.color = 'red';
    }
    if(valor != '' && valor.length>=8){
        mensaje.innerHTML = '';
    }
}

function validar6(){
    let mensaje = document.getElementById('mensaje6');
    let a = document.getElementById('input6');
    let valor = a.value;
    if(valor == ''){
        mensaje.innerHTML=`
            <span>Error, no puede estar vacio</span>
        `;
        document.getElementsByTagName('span')[5].style.color = 'red';
    }
    if(valor != ''){
        mensaje.innerHTML='';
    }
}








 
