import { Grupo } from "../../entities/Grupo";
import { grupoRepository } from "../../repository/grupoRepository";


type GrupoRequest= {

    id: number;
    name: string;
   
}

export class CreateGrupoService{
    
    async execute({id, name}: GrupoRequest ): Promise<Grupo | Error> {
     
        const repo = grupoRepository();
        
        if(await repo.findOne({name})){
            return new Error("O Grupo já existe");
        }
        const grupo = repo.create({id, name});

        await repo.save(grupo);

        return grupo;
    }


}