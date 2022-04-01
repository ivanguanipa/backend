import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'USUARIO' })
export class UsuarioEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  clave: string;

  @Column()
  fechaCreacion: Date;
}
