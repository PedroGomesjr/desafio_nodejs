import { hash } from "bcryptjs";
import { Colaborador } from "../../entities/Colaborador";
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
    departamentos: string[], 
    grupo: number,
    paginas_r_sociais: string,
    description: string;

}



export class CreateColaboradorService{
    
    async execute({id, name, email, idade, senha,status, departamentos, grupo,
            paginas_r_sociais ,description}: ColaboradorResquest): Promise<Colaborador | Error>{
            
                const repo =  colaboradorRepositoy()

               // Ifs de verificação, para não criar um colaborador que já exista e nem adcione um departamento e colaborador que não existam:
                if(await repo.findOne({name})){
                    return new Error("Colaborador já existe!");
                }
                const existsDepartamento = await departamentoRepository().findByIds(departamentos);
                if(!existsDepartamento){
                    return new Error("Departamento Não existe!");
                }
                const existsgrupo =  await grupoRepository().findOne(grupo);
                if(!existsgrupo){
                    return new Error("Grupo Não existe!");
                }

                const passwordHash = await hash(senha, 8);// Encripitar senha
                const colaborador = repo.create({id, name, email, idade, senha:passwordHash, status, departamentos:existsDepartamento, grupo:existsgrupo, paginas_r_sociais, description });
                
                await repo.save(colaborador);

                

                return colaborador;
    }
}
                
    

 
   
