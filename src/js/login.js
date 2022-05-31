function logar() {
    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');
    let usuarioValido = {
        nome: '',
        email: '',
        senha: ''
    }

    let usuarios = JSON.parse(localStorage.getItem('listaUser'));

    usuarios.forEach((usuario) => {
        const ehValido = usuario.value === usuario.emailCad && senha.value === usuario.senhaCad;
        if (ehValido) {
            usuarioValido = {
                nome: usuario.nomeCad,
                email: usuario.emailCad,
                senha: usuario.senhaCad
            }
        }

    })

    if (!usuario.value && !senha.value) {
        alert('Preencha todos os campos')
    }

    const deuMatch = usuario.value === usuarioValido.email && senha.value === usuarioValido.senha;
    if (!deuMatch) {
        alert('Usuário ou senha incorretos')
        window.location.href = 'login.html'
        return;
    }

    localStorage.setItem('userLogado', JSON.stringify(usuarioValido))
    window.location.href = 'area-usuario.html'

}

