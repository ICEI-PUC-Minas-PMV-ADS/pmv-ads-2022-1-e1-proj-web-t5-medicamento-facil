import { MedicamentoControlador } from "./controladoras/MedicamentoControlador";
import { MedicamentoRepositorio } from "./repositorios/MedicamentoRepositorio";

const controle = new MedicamentoControlador();
controle.buscarMedicamento('dipiroN');