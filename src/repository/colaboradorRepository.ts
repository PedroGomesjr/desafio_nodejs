import { getRepository} from "typeorm"
import { Colaborador } from "../entities/Colaborador"


export const colaboradorRepositoy = () => {
    return getRepository(Colaborador);
}
