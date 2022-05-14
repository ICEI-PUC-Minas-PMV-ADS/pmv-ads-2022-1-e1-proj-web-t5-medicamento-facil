function recuperar ()
{
    var email = document.getElementById('login').value;
    if (email == "tauangon@gmail.com"){
        location.href = "codigo-recuperacao.html";
    } else {
        alert ('Usuário ou senha incorretos. Tente novamente!');
    }
}
