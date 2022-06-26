// declara um conjunto inicial de contatos

var db_medicamentos_inicial = {
    "data": [
        {
            "id": 1,
            "nomeMedicamento": "Dipirona",
            "dosagem": "500mg",
            "disponibilidade": "SIM",
        },
        {
            "id": 2,
            "nomeMedicamento": "Lasix",
            "dosagem": "500mg",
            "disponibilidade": "SIM",
        },
        {
            "id": 3,
            "nomeMedicamento": "Bricanil",
            "dosagem": "100mg",
            "disponibilidade": "NÃO",
        }

    ]
}
// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_medicamentos'));

if (!db) {
    db = db_medicamentos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
    
}

function insertMedicamento(medicamento) {
	alert(medicamento.dosagem);
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoMedicamento = {
        "id": novoId,
        "nomeMedicamento": medicamento.nomeMedicamento,
        "dosagem" : medicamento.dosagem,
        "disponibilidade": medicamento.disponibilidade
    };

    // Insere o novo objeto no array
    db.data.push(novoMedicamento);
    displayMessage("medicamento inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_medicamento', JSON.stringify(db));
}

function updateMedicamento(id, medicamento) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nomeMedicamento = medicamento.nomeMedicamento,
    db.data[index].dosagem = medicamento.dosagem,
    db.data[index].disponibilidade = medicamento.disponibilidade
   

    alert("Medicamento alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteMedicamento(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    alert("Medicamento removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}