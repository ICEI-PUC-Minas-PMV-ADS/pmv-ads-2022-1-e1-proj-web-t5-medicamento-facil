import { Medicamento } from '../entidades/Medicamento';
import { MedicamentoRepositorio } from '../repositorios/MedicamentoRepositorio';

export class MedicamentoControlador {

    public buscarMedicamento(termoBusca: string): Array<Medicamento> {
        const repositorio = new MedicamentoRepositorio();
        return repositorio.buscarMedicamentoPorNome(termoBusca);
    }

}