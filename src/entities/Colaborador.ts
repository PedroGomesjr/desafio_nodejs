import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm"
import { Departamento } from "./Departamento"
import { Grupo } from "./Grupo"
import { v4 as uuid } from "uuid";


@Entity('colaboradores')
export class Colaborador {

	@PrimaryColumn()
	id: string

	@Column()
	name: string

	@Column()
	email: string

    @Column()
	idade: string

    @Column()
	senha: string

    @Column()
	status: string

    @ManyToMany(() => Departamento, departamento => departamento.colaboradores)
	@JoinTable({name: "Departamento_id"})
	departamentos: Departamento[]

    @ManyToOne(() => Grupo, grupo => grupo.colaboradores)
    @JoinColumn({name: "grupo_id"})
	grupo: Grupo

    @Column({ nullable: true})
	paginas_r_sociais: string

    @Column()
	description: string
    

	constructor() {
		if (!this.id) this.id = uuid();
	  }
	
}

