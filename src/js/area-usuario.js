
    let userLogado = JSON.parse(localStorage.getItem("userLogado"));

    if(!userLogado){        
        alert('Você precisa estar cadastrado em nossa base de dados.');
        window.location.href = 'index.html';
    }

    let logado = document.querySelector("#logado");

    
    logado.innerHTML = `Olá, ${userLogado.nome}, o que você deseja?`