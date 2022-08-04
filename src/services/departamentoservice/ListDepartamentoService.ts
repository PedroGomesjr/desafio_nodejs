import { departamentoRepository } from "../../repository/departamentoRepository";


export class ListDepartamentoervice {
    async execute() {
        const departamento = await departamentoRepository().find();
        return departamento;
    }

}
