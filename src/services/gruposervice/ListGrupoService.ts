import { grupoRepository } from "../../repository/grupoRepository";


export class ListGrupoService {
    async execute() {
        const grupo = await grupoRepository().find();
        return grupo;
    }

}
