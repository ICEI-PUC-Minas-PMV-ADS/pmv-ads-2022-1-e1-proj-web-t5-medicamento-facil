import { MedicamentoRepositorio } from '../repositorios/MedicamentoRepositorio.js';
export class MedicamentoControlador {
    buscarMedicamento(termoBusca) {
        const repositorio = new MedicamentoRepositorio();
        return repositorio.buscarMedicamentoPorNome(termoBusca);
    }
}
