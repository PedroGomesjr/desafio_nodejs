import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Colaborador } from "./Colaborador";



@Entity('departamentos')
export class Departamento {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@ManyToMany(() => Colaborador, (colaborador) => colaborador.departamentos)
	colaboradores: Colaborador[];

	
}
