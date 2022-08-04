import { Request, Response } from "express";
import { CreateGrupoService } from "../../services/gruposervice/CreateGrupoService";


export class CreateGrupoController{
 
   async create(request: Request, response: Response){
        const { id, name} = request.body;

        const createGrupoService = new CreateGrupoService();

        const result = await createGrupoService.execute({id, name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
         }
        return response.json(result);
    }
    
}
