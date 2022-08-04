import { departamentoRepository } from "../../repository/departamentoRepository";





export class DeleteDepartamentoService {
    async execute(id: string){
        
        const repo = departamentoRepository();
        if(!(await repo.findOne(id))){
            return new Error("Departamento não exite!");
        }
        await repo.delete(id);
    
    }

}
