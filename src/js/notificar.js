function notificar (){
    let nomeMedicamento = document.getElementById("nomeMedicamento");

    let dados = JSON.parse(localStorage.getItem("dadosMedicamento"));

    if(dados == null){
         localStorage.setItem("dadosMedicamento", "[]");
         dados = [];
    }

    let auxRegistro = {
        nome: nomeMedicamento.value
    
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosMedicamento", JSON.stringify(dados));
    alert("Requisição de medicamento enviada!")

    nomeMedicamento.value = "";
}