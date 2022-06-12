function notificar (){
    let nomeMedicamento = document.getElementById("nomeMedicamento");

    let dados = JSON.parse(localStorage.getItem("dadosMedicamento"));

    if(dados == null){
         localStorage.setItem("dadosMedicamento", "[]");
         dados = [];
    }

    let notificado = [];
    notificado = JSON.parse(localStorage.getItem('notificado'))

    let auxRegistro = {
        nome: nomeMedicamento.value
    
    }


    dados.push(auxRegistro);

    localStorage.setItem("dadosMedicamento", JSON.stringify(dados));
    localStorage.setItem('notificado', JSON.stringify(auxRegistro));
    alert("Requisição de medicamento enviada!")

    nomeMedicamento.value = "";
}