import { Request, Response } from "express";
import { CreateColaboradorService } from "../../services/colaboradorservice/CreateColaboradorService";



export class CreateColaboradorController{
 
   async create(request: Request, response: Response){
    const { id, name, email, idade, senha,status,
        departamentos,grupo, paginas_r_sociais ,description} = request.body

    const service = new CreateColaboradorService;

    const result = await service.execute({id, name, email, idade, senha,status,
        departamentos,grupo, paginas_r_sociais ,description});

    if(result instanceof Error){
        return response.status(400).json(result.message);
    }
    return response.json(result);
   }
    
}
