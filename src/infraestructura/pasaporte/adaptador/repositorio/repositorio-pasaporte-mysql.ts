import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';
import { InjectRepository } from '@nestjs/typeorm';
import { PasaporteEntidad } from '../../entidad/pasaporte.entidad';
import { Repository, IsNull } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioPasaporteMysql implements RepositorioPasaporte {
  constructor(
    @InjectRepository(PasaporteEntidad)
    private readonly repositorio: Repository<PasaporteEntidad>,
  ) {}

  async existePasaporte(document_id: number): Promise<boolean> {
    return (
      (await this.repositorio.count({
        document_id: document_id,
        deleted_at: IsNull(),
      })) > 0
    );
  }

  async guardar(pasaporte: Pasaporte) {
    const entidad = new PasaporteEntidad();
    entidad.fullname = pasaporte.fullname;
    entidad.address = pasaporte.address;
    entidad.created_at = new Date();
    entidad.birthdate = pasaporte.birthdate;
    entidad.amount = pasaporte.amount;
    entidad.document_id = pasaporte.document_id;
    entidad.appointment_date = pasaporte.appointment_date;
    entidad.application_date = new Date(pasaporte.application_date);
    console.log('pasando guardar');
    return await this.repositorio.save(entidad);
  }

  async mostrar(id): Promise<Partial<Pasaporte>> {
    return this.repositorio.findOne({ id, created_at: IsNull() });
  }

  async eliminar(id) {
    console.log('RepositorioPasaporteMysql');
    this.repositorio.update(id, { deleted_at: new Date() });
    return { success: true };
  }
}
