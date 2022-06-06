function logar ()
{  
    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');

    let listaUser = [];

    let userValid = {
        nome: '',
        sobrenome: '',
        celular: '',
        email: '',
        senha: '',
        medicamento:''

    }


    listaUser = JSON.parse(localStorage.getItem('listaUser'))


    listaUser.forEach((item) =>{

         if(usuario.value === item.emailCad && senha.value === item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                sobrenome: item.sobrenomeCad,
                celular: item.celularCad,
                email: item.emailCad,
                senha: item.senhaCad,
                medicamento: item.medCad
            }
        }

    })

    if (!usuario.value && !senha.value) {
        alert('Preencha todos os campos');
        location.reload(true);
  
    }
    else if(usuario.value === userValid.email && senha.value === userValid.senha){
        localStorage.setItem('userLogado', JSON.stringify(userValid)) 
       // document.location.href = 'area-usuario.html'; 
        window.open ('area-usuario.html')
        
        
    } 
    
     if  (usuario.value != userValid.email || senha.value != userValid.senha){
        alert ('Usuário ou senha incorretos');
        location.reload(true);
    }

     
    
}

