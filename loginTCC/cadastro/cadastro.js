const EMAIL = document.getElementById('email');
const SENHA = document.getElementById('senha');
const USUARIO = document.getElementById('usuario');
const BOTAO = document.querySelector('.submit');
const CONFIRMA_SENHA = document.querySelector('conf_senha');

// window.localStorage.clear()

BOTAO.addEventListener('click', function(){

        window.localStorage.setItem('usuario', USUARIO.value);
        window.localStorage.setItem('senha', SENHA.value);
        window.localStorage.setItem('email', EMAIL.value);

         if(SENHA.value === CONFIRMA_SENHA.value && SENHA.value != ''){
            window.localStorage.setItem('usuario', USUARIO.value);
            window.localStorage.setItem('senha', SENHA.value);
            window.localStorage.setItem('email', EMAIL.value);

            window.location.href = 'home.html'

        }else{
            alert("Senhas não combinam");
        }
})
// BOTAO.addEventListener('click', function(event){
//     event.preventDefault()


//     window.location.href = '../home/home.html'


// })