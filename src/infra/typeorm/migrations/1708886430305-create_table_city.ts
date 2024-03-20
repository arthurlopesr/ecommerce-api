import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCity1708886430305 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.city (
            city_id integer NOT NULL,
            name character varying NOT NULL,
            state_id integer NOT NULL,
            created_at timestamp without time zone NOT NULL DEFAULT now(),
            updated_at timestamp without time zone NOT NULL DEFAULT now(),
            primary key (city_id),
            FOREIGN KEY (state_id) REFERENCES state (state_id)
        );

        CREATE SEQUENCE public.city_city_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.city_city_id_seq OWNED BY public.city.city_id;

        ALTER TABLE ONLY public.city ALTER COLUMN city_id SET DEFAULT nextval('public.city_city_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.city;
    `);
  }
}
