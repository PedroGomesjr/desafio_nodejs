import { Request, Response } from "express";
import { ListColaboradorService } from "../../services/colaboradorservice/ListColaboradorService";



export class ListColaboradorController {
    async list (req: Request, res: Response) {
			const listColaboradorController = new ListColaboradorService();

            const colaborador =  await listColaboradorController.execute();
			return res.json(colaborador);
    }	
  }