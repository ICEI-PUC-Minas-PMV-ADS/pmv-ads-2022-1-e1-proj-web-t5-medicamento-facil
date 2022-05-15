import { MedicamentoRepositorio } from '../repositorios/MedicamentoRepositorio.js';
export class MedicamentoControlador {
    buscarMedicamento(termoBusca) {
        const repositorio = new MedicamentoRepositorio();
        const resultado = repositorio.buscarMedicamentoPorNome(termoBusca);
        console.log(resultado);
    }
}
