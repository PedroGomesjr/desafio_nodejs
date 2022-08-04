import { Departamento } from "../../entities/Departamento";
import { departamentoRepository } from "../../repository/departamentoRepository";

type DepartamentoRequest= {

    id: string;
    name: string;
  
}



export class UpdateDepartamentoService{
    
    async execute({id, name}: DepartamentoRequest ): Promise<Departamento | Error> {
        
        const repo =  departamentoRepository();
        const departamento = await repo.findOne(id);
    
        if(!departamento){
            return new Error("O Departamneto não existe");
        };
        departamento.name = name ? name : departamento.name;

        await repo.save(departamento);

        return departamento;
    }

}