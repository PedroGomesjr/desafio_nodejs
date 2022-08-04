import { colaboradorRepositoy } from "../../repository/colaboradorRepository";



export class ListColaboradorService {
    async execute() {
        const colaborador = await colaboradorRepositoy().find({
            relations: ['departamentos', 'grupo']
        });
        return colaborador;
    }

}
