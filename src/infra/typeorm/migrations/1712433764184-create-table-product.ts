import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProduct1712433764184 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`create table public.product (
        product_id int not null,
        product_name character varying not null,
        category_id int not null,
        price double precision not null,
        image character varying not null,
        created_at timestamp without time zone default now() not null,
         update_at timestamp without time zone default now() not null,
         primary key (product_id)
    );
    
    create sequence public.product_id_seq
        as int
        start with 1
        increment by 1
        no minvalue 
        no maxvalue 
        cache 1;
    
    alter sequence public.product_id_seq owned by public.product.product_id;
    alter table only public.product alter column product_id set default nextval('public.product_id_seq'::regclass); 
    
    
    
    ALTER TABLE public.product
    ADD CONSTRAINT product_category_fk
    FOREIGN KEY (category_id)
    REFERENCES public.category(category_id);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table public.product`);
  }
}
