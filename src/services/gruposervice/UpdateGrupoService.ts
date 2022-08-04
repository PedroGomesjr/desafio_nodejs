import { Grupo } from "../../entities/Grupo";
import { grupoRepository } from "../../repository/grupoRepository";


type GrupoRequest= {

    id: string;
    name: string;
  
}



export class UpdateGrupoService{
    
    async execute({id, name}: GrupoRequest ): Promise<Grupo | Error> {
        
        const repo =  grupoRepository();
        const departamento = await repo.findOne(id);
    
        if(!departamento){
            return new Error("O grupo não existe");
        };
        
        departamento.name = name ? name : departamento.name;

        await repo.save(departamento);

        return departamento;
    }

}