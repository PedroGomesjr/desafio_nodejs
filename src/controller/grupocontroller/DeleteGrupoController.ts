import { Request, Response } from "express";
import { DeleteGrupoService } from "../../services/gruposervice/DeleteGrupoService";


export class DeleteGrupoController {
    async delete (req: Request, res: Response) {
      const { id } = req.params;
  
      const service = new DeleteGrupoService();
  
      const result = await service.execute(id);
  
      if (result instanceof Error) {
        return res.status(400).json(result.message);
      }  
  
      return res.status(204).end();
    }
  }