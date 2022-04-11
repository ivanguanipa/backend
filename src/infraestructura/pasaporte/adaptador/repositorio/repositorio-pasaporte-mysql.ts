import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { PasaporteEntidad } from 'src/infraestructura/pasaporte/entidad/pasaporte.entidad';

@Injectable()
export class RepositorioPasaporteMysql implements RepositorioPasaporte {
  constructor(
    @InjectRepository(PasaporteEntidad)
    private readonly repositorio: Repository<PasaporteEntidad>,
  ) {}

  async guardar(pasaporte: Pasaporte) {
    const entidad = new PasaporteEntidad();
    entidad.fullname = pasaporte.fullname;
    entidad.address = pasaporte.address;
    entidad.createdAt = new Date();
    entidad.birthdate = pasaporte.birthdate;
    entidad.amount = pasaporte.amount;
    entidad.documentId = pasaporte.documentId;
    entidad.appointmentDate = pasaporte.appointmentDate;
    entidad.applicationDate = new Date(pasaporte.applicationDate);
    return this.repositorio.save(entidad);
  }

  async eliminar(id) {
    this.repositorio.update(id, { deletedAt: new Date() });
    return { success: true };
  }
}
