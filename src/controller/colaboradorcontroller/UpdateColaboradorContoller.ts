import { Request, Response } from "express";
import { UpdateColaboradorService } from "../../services/colaboradorservice/UpdateColaboradorService";



export class UpdateColaboradorController{
 
   async update(request: Request, response: Response){
    const {id} = request.params;
    const { name, email, idade, senha,status,
        departamentos,grupo, paginas_r_sociais ,description} = request.body;

    const service = new UpdateColaboradorService();

    const result = await service.execute({id, name, email, idade, senha,status,
        departamentos,grupo, paginas_r_sociais ,description});

    if(result instanceof Error){
        return response.status(400).json(result.message);
    }
    return response.json(result);
   }
    
}
