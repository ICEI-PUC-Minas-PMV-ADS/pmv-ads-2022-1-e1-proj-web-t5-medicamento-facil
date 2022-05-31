function logar ()
{  
    let usuario = document.querySelector('#login');
    let userLabel = document.querySelector('#userLabel');


    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let listaUser = [];

    let userValid = {
        nome: '',
        email: '',
        senha: '',

    }


    listaUser = JSON.parse(localStorage.getItem('listaUser'))


    listaUser.forEach((item) =>{

         if(usuario.value == item.emailCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }

    })

      if (usuario.value == null && senha.value == null){
           alert ('Preencha todos os campos')
      }

     if(usuario.value === userValid.email && senha.value === userValid.senha){
          window.location.href = 'area-usuario.html'
          localStorage.setItem('userLogado', JSON.stringify(userValid)) 

    } else {
        alert ('Usuário ou senha incorretos')
    }
    
}

