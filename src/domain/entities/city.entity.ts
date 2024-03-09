import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'city' })
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  city_id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'state_id', nullable: true })
  stateId: number;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
