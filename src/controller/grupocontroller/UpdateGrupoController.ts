import { Request, Response } from "express";
import { UpdateGrupoService } from "../../services/gruposervice/UpdateGrupoService";

export class UpdateGrupoController{
 
    async update(request: Request, response: Response){
     const {id} = request.params;
     const {name} = request.body
 
     const service = new UpdateGrupoService();
 
     const result = await service.execute({id, name});
 
     if(result instanceof Error){
         return response.status(400).json(result.message);
     }
     return response.json(result);
    }
     
 }