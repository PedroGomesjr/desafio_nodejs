import { grupoRepository } from "../../repository/grupoRepository";




export class DeleteGrupoService {
    async execute(id: string){
        
        const repo = grupoRepository();
        if(!(await repo.findOne(id))){
            return new Error("Grupo não exite!");
        }
        await repo.delete(id);
    
    }

}
