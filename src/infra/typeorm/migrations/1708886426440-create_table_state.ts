import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableState1708886426440 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.state (
            state_id integer NOT NULL,
            name character varying NOT NULL,
            created_at timestamp without time zone NOT NULL DEFAULT now(),
            updated_at timestamp without time zone NOT NULL DEFAULT now(),
            primary key (state_id)
        );

        CREATE SEQUENCE public.state_state_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.state_state_id_seq OWNED BY public.state.state_id;

        ALTER TABLE ONLY public.state ALTER COLUMN state_id SET DEFAULT nextval('public.state_state_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.state;
    `);
  }
}
