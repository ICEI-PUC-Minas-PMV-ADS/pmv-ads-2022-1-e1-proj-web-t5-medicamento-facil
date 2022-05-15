import { MedicamentoControlador } from "../controladoras/MedicamentoControlador.js";
const btnBusca = document.getElementById('buscar-medicamento');
btnBusca.addEventListener('click', () => {
    const input = document.getElementById('input-medicamento');
    const controle = new MedicamentoControlador();
    controle.buscarMedicamento(input.value);
});
