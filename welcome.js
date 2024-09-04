const btnBorrar = document.getElementById('btnBorrar')
const alertMensaje = document.getElementById('alertMensaje')

btnBorrar.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.clear();
    location.href='welcome.html'
})


window.addEventListener('load',function(event){
    if (this.localStorage.getItem('nombre')!=null) {
        alertMensaje.innerHTML = `Hola${this.localStorage.getItem('nombre')}, bienvenido/a de nuevo`;
    }//if nombre diferente de null
})//load 



