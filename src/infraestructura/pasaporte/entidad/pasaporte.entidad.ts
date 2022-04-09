import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pasaporte' })
export class PasaporteEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  documentId: number;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column({ type: 'float' })
  amount: number;

  @Column()
  birthdate: Date;

  @Column()
  applicationDate: Date;

  @Column()
  appointmentDate: Date;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
