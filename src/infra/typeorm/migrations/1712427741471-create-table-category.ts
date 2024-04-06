import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCategory1712427741471 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    create table public.category (
        category_id int not null,
        category_name character varying not null,
        created_at timestamp without time zone default now() not null,
         update_at timestamp without time zone default now() not null,
         primary key (category_id)
    );
    
    create sequence public.category_id_seq
        as int
        start with 1
        increment by 1
        no minvalue 
        no maxvalue 
        cache 1;
    
    
    ALTER TABLE public.category
    ALTER COLUMN category_id SET DEFAULT nextval('public.category_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table public.category;`);
  }
}
