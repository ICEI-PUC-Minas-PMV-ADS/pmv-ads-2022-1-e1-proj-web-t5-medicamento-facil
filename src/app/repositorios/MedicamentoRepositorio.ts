import { Medicamento } from '../entidades/Medicamento';
import { medicamentos } from '../mocks/medicamentos.mock.min';
import { Texto } from '../utils/Texto';

export class MedicamentoRepositorio {

    public buscarMedicamentoPorNome(nome: string): Array<any> {
        const busca: string = Texto.tirarAcentos(nome.toUpperCase());
        const medicamentosFiltrados = medicamentos.filter(item => Texto.tirarAcentos(item.nome).search(busca) > -1);
        return medicamentosFiltrados;
    }

    public buscarMedicamentoDosagem(dosagem: string) {

    }

    public reduzirTamanhoDoMock(): void {


        const medicamentosReduzidos = medicamentos.map(item => {
            const medicamento = new Medicamento();
            medicamento.apresentacao = item.apresentacao;
            medicamento.laboratorioNome = item.laboratorioNome;
            medicamento.nome = item.nome;
            medicamento.principioAtivo = item.principioAtivo;
            medicamento.tarja = item.tarja;

            return medicamento;
        });

        const medicamentosJSON = JSON.stringify(medicamentosReduzidos);
        fs.writeFileSync('medicamentos.json', medicamentosJSON);
    }

}