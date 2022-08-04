import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Colaborador } from "./Colaborador";

@Entity('grupos')
export class Grupo {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

    @OneToMany(() => Colaborador, (colaborador) => colaborador.grupo)
    colaboradores: Colaborador[]

}