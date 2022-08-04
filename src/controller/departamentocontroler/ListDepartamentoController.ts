import { Request, Response } from "express";
import { ListDepartamentoervice } from "../../services/departamentoservice/ListDepartamentoService";



export class ListDepartamentoController {
    async list (req: Request, res: Response) {
			const listDepartamentoController = new ListDepartamentoervice();

            const Departamento =  await listDepartamentoController.execute();
			return res.json(Departamento);
    }	
  }