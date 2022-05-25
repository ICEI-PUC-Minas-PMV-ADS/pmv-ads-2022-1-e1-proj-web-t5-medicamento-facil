
    let userLogado = JSON.parse(localStorage.getItem("userLogado"));
    let logado = document.querySelector("#logado");

    logado.innerHTML = `Olá, ${userLogado.nome}, o que você deseja?`