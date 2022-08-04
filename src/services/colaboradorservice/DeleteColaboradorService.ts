import { colaboradorRepositoy } from "../../repository/colaboradorRepository";





export class DeleteColaboradorService {
    async execute(id: string){
        
        const repo = colaboradorRepositoy();
        if(!(await repo.findOne(id))){
            return new Error("Colaborador não exite!");
        }
        await repo.delete(id);
    
    }

}
