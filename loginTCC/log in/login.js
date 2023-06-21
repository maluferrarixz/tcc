const envio = document.getElementById('envio');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');

window.localStorage.clear()
// form.addEventListener('submit', function(e) {

//     const USUARIO = document.getElementById('usuario');
//     const SENHA = document.getElementById('senha');
//     const BOTAO = document.querySelector('.submit');

envio.addEventListener('click', function(event){

    event.preventDefault()

    // let usuarioSalvo = window.localStorage.getItem('usuario');
    // let usuarioAtual = USUARIO.value;

    // let senhaSalvo = window.localStorage.getItem('senha');
    // let senhaAtual = SENHA.value;

    // if(usuarioAtual === usuarioSalvo && senhaAtual === senhaSalvo){
    //     window.location.href = '../home/home.html'
    // }else{
    //     alert("Usuário ou Senha incorretos")
    // }
    window.location.href = '../home/home.html'

})
