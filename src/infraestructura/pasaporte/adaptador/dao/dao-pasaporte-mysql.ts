import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';

@Injectable()
export class DaoPasaporteMysql implements DaoPasaporte {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listar(): Promise<PasaporteDto[]> {
    return this.entityManager.query(
      'SELECT * FROM pasaporte u where deletedAt is null',
    );
  }
  async mostrar(id): Promise<PasaporteDto> {
    return this.entityManager.query(`SELECT * FROM pasaporte where id = ${id}`);
  }

  async existePasaporte(documentId: number): Promise<boolean> {
    const res = await this.entityManager.query(
      `SELECT * FROM pasaporte where documentId = ${documentId}`,
    );
    return res.length > 0;
  }
}
