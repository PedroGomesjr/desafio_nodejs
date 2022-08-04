import { Request, Response } from "express";
import { ListGrupoService } from "../../services/gruposervice/ListGrupoService";


export class ListGrupoController {
    async list (req: Request, res: Response) {
			const listGrupoController = new ListGrupoService();

            const grupos =  await listGrupoController.execute();
			return res.json(grupos);
    }	
  }