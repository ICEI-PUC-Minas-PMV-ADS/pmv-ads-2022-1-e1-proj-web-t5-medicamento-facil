import { MedicamentoControlador } from "../controladoras/MedicamentoControlador.js";
///// FUNCIONALIDADES
const iniciaSelect2 = () => {
    const seletor = document.getElementById('seletor-medicamento');
    $(seletor).select2({
        placeholder: "Buscar medicamentos",
        multiple: true
    });
};
let timer = null;
const buscaMedicamento = () => {
    const area = document.getElementById('area-busca');
    const input = area.getElementsByTagName('input')[0];
    const texto = input.value;
    if (texto.length < 3) {
        return;
    }
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        const controle = new MedicamentoControlador();
        const medicamentos = controle.buscarMedicamento(texto);
        medicamentos.forEach((item, id) => {
            const opcao = new Option(item.nome, id.toString(), false, false);
            const seletor = document.getElementById('seletor-medicamento');
            $(seletor).select2().append(opcao).trigger('change');
        });
    }, 1000);
};
///// EVENTOS
$(document).ready(iniciaSelect2);
$('body').on('keyup', '.select2-search__field', buscaMedicamento);
