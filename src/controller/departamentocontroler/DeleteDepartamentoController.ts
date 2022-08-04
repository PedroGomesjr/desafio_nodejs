import { Request, Response } from "express";
import { DeleteDepartamentoService } from "../../services/departamentoservice/DeleteDepartamentoService";



export class DeleteDepartamentoController {
    async delete (req: Request, res: Response) {
      const { id } = req.params;
  
      const service = new DeleteDepartamentoService;
  
      const result = await service.execute(id);
  
      if (result instanceof Error) {
        return res.status(400).json(result.message);
      }  
  
      return res.status(204).end();
    }
  }