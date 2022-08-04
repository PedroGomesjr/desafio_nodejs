import { Colaborador } from "../../entities/Colaborador";
import { Grupo } from "../../entities/Grupo";
import { colaboradorRepositoy } from "../../repository/colaboradorRepository";
import { departamentoRepository } from "../../repository/departamentoRepository";
import { grupoRepository } from "../../repository/grupoRepository";

type ColaboradorResquest = {
    id: string, 
    name: string, 
    email: string, 
    idade: string, 
    senha: string,
    status: string, 
    departamentos: [], 
    grupo: number,
    paginas_r_sociais: string,
    description: string;

}



export class UpdateColaboradorService{
    
    async execute({id, name, email, idade, senha,status, departamentos, grupo,
            paginas_r_sociais ,description}: ColaboradorResquest): Promise<Colaborador | Error>{
            
                const repo =  colaboradorRepositoy();
                let colaborador = await repo.findOne(id);
                if(!colaborador){
                    return new Error("Colaborador não existe!");
                }
              
                
            
                colaborador.name = name ? name : colaborador.name;
                colaborador.email = email ? email : colaborador.email;
                colaborador.idade = idade ? idade : colaborador.idade;
                colaborador.senha = senha ? senha : colaborador.senha;
                colaborador.status = status ? status : colaborador.status;
                colaborador.departamentos = departamentos ? departamentos : colaborador.departamentos;
                colaborador.grupo.id = grupo ? grupo : colaborador.grupo.id;
                colaborador.paginas_r_sociais = paginas_r_sociais;
                colaborador.description = description ? description : colaborador.description;


                //const colaborador = repo.create({id, name, email, idade, senha, status, departamentos:existsDepartamento, grupo:existsgrupo, paginas_r_sociais, description });
                
                await repo.save(colaborador);
                
                return colaborador;
    }
}
                
    

 
   
