import { medicamentos } from "../mocks/medicamentos.mock";

export class MedicamentoRepositorio {

    public buscarMedicamentoPorNome(nome: string): Array<any> {
        const medicamentosFiltrados = medicamentos.filter(x => x.nome === nome);
        return medicamentosFiltrados;
    }

    public buscarMedicamentoDosagem(dosagem: string) {

    }

}