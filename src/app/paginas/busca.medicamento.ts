import { MedicamentoControlador } from "../controladoras/MedicamentoControlador";

const btnBusca = document.getElementById('buscar-medicamento');
btnBusca.addEventListener('click', () => {
    const input = document.getElementById('input-medicamento') as HTMLInputElement;
    
    const controle = new MedicamentoControlador();
    controle.buscarMedicamento(input.value);
});