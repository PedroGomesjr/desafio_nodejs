import { Grupo } from "../entities/Grupo";
import { getRepository } from "typeorm";



export const grupoRepository = () => {
    return getRepository(Grupo);
}