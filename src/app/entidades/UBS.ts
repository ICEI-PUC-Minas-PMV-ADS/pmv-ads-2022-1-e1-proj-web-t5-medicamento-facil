import { Localizacao } from "./Localizacao";
import { Medicamento } from "./Medicamento";

export class UBS {
    public nome: string = null;
    public localizacao: Localizacao = null;
    public medicamentos: Array<Medicamento> = [];
}