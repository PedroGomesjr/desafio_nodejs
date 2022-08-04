import {MigrationInterface, QueryRunner} from "typeorm";

export class defull1659577188427 implements MigrationInterface {
    name = 'defull1659577188427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "departamentos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6d34dc0415358a018818c683c1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "grupos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_34de64ec8a5ecd99afb23b2bd62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "colaboradores" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "idade" character varying NOT NULL, "senha" character varying NOT NULL, "status" character varying NOT NULL, "paginas_r_sociais" character varying, "description" character varying NOT NULL, "grupo_id" integer, CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Departamento_id" ("colaboradoresId" integer NOT NULL, "departamentosId" integer NOT NULL, CONSTRAINT "PK_c98c3d4dd13c211f4fd07f7ada6" PRIMARY KEY ("colaboradoresId", "departamentosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2a0644567513144b078941f6f3" ON "Departamento_id" ("colaboradoresId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a3346866851773dd6c6a85506b" ON "Departamento_id" ("departamentosId") `);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD CONSTRAINT "FK_c669ee080585988dc7dfcb7ec37" FOREIGN KEY ("grupo_id") REFERENCES "grupos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "FK_2a0644567513144b078941f6f38" FOREIGN KEY ("colaboradoresId") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "FK_a3346866851773dd6c6a85506b3" FOREIGN KEY ("departamentosId") REFERENCES "departamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "FK_a3346866851773dd6c6a85506b3"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "FK_2a0644567513144b078941f6f38"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP CONSTRAINT "FK_c669ee080585988dc7dfcb7ec37"`);
        await queryRunner.query(`DROP INDEX "IDX_a3346866851773dd6c6a85506b"`);
        await queryRunner.query(`DROP INDEX "IDX_2a0644567513144b078941f6f3"`);
        await queryRunner.query(`DROP TABLE "Departamento_id"`);
        await queryRunner.query(`DROP TABLE "colaboradores"`);
        await queryRunner.query(`DROP TABLE "grupos"`);
        await queryRunner.query(`DROP TABLE "departamentos"`);
    }

}
