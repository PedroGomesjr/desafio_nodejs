import { Request, Response } from "express";
import { CreateDepartamentoService } from "../../services/departamentoservice/CreateDepartamentoService";


export class CreateDepartamentoController{
 
   async create(request: Request, response: Response){
    const { id, name} = request.body

    const service = new CreateDepartamentoService();

    const result = await service.execute({id, name});

    if(result instanceof Error){
        return response.status(400).json(result.message);
    }
    return response.json(result);
   }
    
}
