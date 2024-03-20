import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1708886437831 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.address (
            address_id integer NOT NULL,
            user_id integer NOT NULL,
            complement character varying,
            number character varying NOT NULL,
            cep character varying NOT NULL,
            city_id integer NOT NULL,
            created_at timestamp without time zone NOT NULL DEFAULT now(),
            updated_at timestamp without time zone NOT NULL DEFAULT now(),
            primary key (address_id)
            foreign key (user_id) references public.users(user_id),
            foreign key (city_id) references public.city(city_id)
        );

        CREATE SEQUENCE public.address_address_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.address_address_id_seq OWNED BY public.address.address_id;

        ALTER TABLE ONLY public.address ALTER COLUMN address_id SET DEFAULT nextval('public.address_address_id_seq'::regclass
     
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.address;
    `);
  }
}
