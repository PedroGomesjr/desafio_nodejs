import { Request, Response } from "express";
import { UpdateDepartamentoService } from "../../services/departamentoservice/UpdateDepartamentoService";


export class UpdateDepartamentoController{
 
   async update(request: Request, response: Response){
    const {id} = request.params;
    const {name} = request.body

    const service = new UpdateDepartamentoService();

    const result = await service.execute({id, name});

    if(result instanceof Error){
        return response.status(400).json(result.message);
    }
    return response.json(result);
   }
    
}
