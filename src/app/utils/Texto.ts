export class Texto {
    public static tirarAcentos(texto : string) : string {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
}
