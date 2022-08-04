import { getRepository } from "typeorm";
import { Departamento } from "../entities/Departamento";

export const departamentoRepository =  () => {
    return getRepository(Departamento);
}
