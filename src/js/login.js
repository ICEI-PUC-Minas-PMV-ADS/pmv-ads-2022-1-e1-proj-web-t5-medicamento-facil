function logar ()
{
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "carolina@hotmail.com" && senha == "1234"){
        location.href = "area-usuario.html";
    } else {
        alert ('Usuário ou senha incorretos. Tente novamente!');
    }
}
