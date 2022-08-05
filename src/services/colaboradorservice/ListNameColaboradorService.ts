import { Request, response } from "express"
import { colaboradorRepositoy } from "../../repository/colaboradorRepository";



export class ListNameColaboradorService {
    async execute(resquest: Request) {
        const {name} = resquest.params;

        const namecolaborador = await colaboradorRepositoy().find({
            where:{ name: name },
            relations: ['departamentos', 'grupo']
        });
        if(namecolaborador.length>0){
            return namecolaborador[0]
        }else{
            return response.status(404).json({'error': 'Colaborador não existe'})
        }

    }

}
