const btnNombre = document.getElementById('btnNombre')
const btnBorrar = document.getElementById('btnBorrar')
const alertValidaciones = document.getElementById('alertValidaciones');
const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
const nombreGuardado = document.getElementById('nombreGuardado');
const nombreGuardadoTexto = document.getElementById('nombreGuardadoTexto');
const txtNombre = document.getElementById('inputNombre')
let isValid = true;
let nombrteStorage = '';


btnNombre.addEventListener('click',function(event){
    event.preventDefault();
    txtNombre.style.border='';
    alertValidacionesTexto.innerHTML='';
    alertValidaciones.style.display='none';
    isValid= true

//Validar el nombre de la personita mayor a 2 letras
if (txtNombre.value.trim().length<3) {
    txtNombre.style.border='solid red medium';
    alertValidacionesTexto.innerHTML='El <strong>Nombre</strong> es invalido aiuraaa. <br/>'
    alertValidaciones.style.display='block'
    isValid = false
}

if(isValid){
    nombreStorage = txtNombre.value
    localStorage.setItem('nombre',nombreStorage)
    nombreGuardadoTexto.innerHTML='El <strong>Nombre</strong> se ha guardado. <br/>'
    nombreGuardado.style.display='block';
}
})

