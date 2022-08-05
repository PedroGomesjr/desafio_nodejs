import { Request, response, Response } from "express";
import { ListNameColaboradorService } from "../../services/colaboradorservice/ListNameColaboradorService";



export class ListNameColaboradorController {
    async list (request: Request, response: Response) {
			const listNameColaboradorController = new ListNameColaboradorService();

            return listNameColaboradorController.execute(request).then(
                res => {
                    return response.status(200).json(res)
                }
            ).catch(
                () =>{
                    return response.status(404).json("Colaborador não existe!")
                })
			
    }	
}