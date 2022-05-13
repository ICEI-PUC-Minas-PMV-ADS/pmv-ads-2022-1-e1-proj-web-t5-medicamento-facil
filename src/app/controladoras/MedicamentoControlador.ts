import { MedicamentoRepositorio } from '../repositorios/MedicamentoRepositorio';

export class MedicamentoControlador {

    public buscarMedicamento(termoBusca: string) {
        const repositorio = new MedicamentoRepositorio();
        const resultado = repositorio.buscarMedicamentoPorNome(termoBusca);
        console.log(resultado);
    }
    
}