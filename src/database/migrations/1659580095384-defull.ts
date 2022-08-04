import {MigrationInterface, QueryRunner} from "typeorm";

export class defull1659580095384 implements MigrationInterface {
    name = 'defull1659580095384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "FK_2a0644567513144b078941f6f38"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "PK_c98c3d4dd13c211f4fd07f7ada6"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "PK_a3346866851773dd6c6a85506b3" PRIMARY KEY ("departamentosId")`);
        await queryRunner.query(`DROP INDEX "IDX_2a0644567513144b078941f6f3"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP COLUMN "colaboradoresId"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD "colaboradoresId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "PK_a3346866851773dd6c6a85506b3"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "PK_c98c3d4dd13c211f4fd07f7ada6" PRIMARY KEY ("departamentosId", "colaboradoresId")`);
        await queryRunner.query(`CREATE INDEX "IDX_2a0644567513144b078941f6f3" ON "Departamento_id" ("colaboradoresId") `);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "FK_2a0644567513144b078941f6f38" FOREIGN KEY ("colaboradoresId") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "FK_2a0644567513144b078941f6f38"`);
        await queryRunner.query(`DROP INDEX "IDX_2a0644567513144b078941f6f3"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "PK_c98c3d4dd13c211f4fd07f7ada6"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "PK_a3346866851773dd6c6a85506b3" PRIMARY KEY ("departamentosId")`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP COLUMN "colaboradoresId"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD "colaboradoresId" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_2a0644567513144b078941f6f3" ON "Departamento_id" ("colaboradoresId") `);
        await queryRunner.query(`ALTER TABLE "Departamento_id" DROP CONSTRAINT "PK_a3346866851773dd6c6a85506b3"`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "PK_c98c3d4dd13c211f4fd07f7ada6" PRIMARY KEY ("colaboradoresId", "departamentosId")`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "Departamento_id" ADD CONSTRAINT "FK_2a0644567513144b078941f6f38" FOREIGN KEY ("colaboradoresId") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
