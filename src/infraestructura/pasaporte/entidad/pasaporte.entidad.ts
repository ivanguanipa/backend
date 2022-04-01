import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pasaporte' })
export class PasaporteEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  document_id: number;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column({ type: 'float' })
  amount: number;

  @Column()
  birthdate: Date;

  @Column()
  application_date: Date;

  @Column()
  appointment_date: Date;

  @Column()
  created_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
