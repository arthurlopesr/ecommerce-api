import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1709680493719 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            ALTER TABBLE state
                ADD uf varchar(2) NOT NULL;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            ALTER TABBLE state
                DROP uf;
        `);
  }
}
