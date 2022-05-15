import { Medicamento } from '../entidades/Medicamento.js';
import { medicamentos } from '../mocks/medicamentos.mock.min.js';
import { Texto } from '../utils/Texto.js';
export class MedicamentoRepositorio {
    buscarMedicamentoPorNome(nome) {
        const busca = Texto.tirarAcentos(nome.toUpperCase());
        const medicamentosFiltrados = medicamentos.filter(item => Texto.tirarAcentos(item.nome).search(busca) > -1);
        return medicamentosFiltrados;
    }
    buscarMedicamentoDosagem(dosagem) {
    }
    reduzirTamanhoDoMock() {
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
