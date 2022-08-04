import { Request, Response } from "express";
import { DeleteColaboradorService } from "../../services/colaboradorservice/DeleteColaboradorService";



export class DeleteColaboradorController {
    async delete (req: Request, res: Response) {
      const { id } = req.params;
  
      const service = new DeleteColaboradorService();
  
      const result = await service.execute(id);
  
      if (result instanceof Error) {
        return res.status(400).json(result.message);
      }  
  
      return res.status(204).end();
    }
  }