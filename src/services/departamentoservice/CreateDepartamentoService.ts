import { Departamento } from "../../entities/Departamento";
import { departamentoRepository } from "../../repository/departamentoRepository";

type DepartamentoRequest= {

    id: number;
    name: string;
  
}



export class CreateDepartamentoService{
    
    async execute({id, name}: DepartamentoRequest ): Promise<Departamento | Error> {
        
        const repo = departamentoRepository();
        if(await repo.findOne({name})){
            return new Error("O Departamneto já existe");
        }
        const departamento = repo.create({id,name});
        await repo.save(departamento);

        return departamento;
    }

}