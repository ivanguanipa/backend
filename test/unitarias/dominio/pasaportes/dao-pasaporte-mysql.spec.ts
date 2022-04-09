import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';
import { EntityManager } from 'typeorm';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';

describe('Pasaporte Reglas de Negocio', () => {
  let daoPasaporteMysql: DaoPasaporteMysql;
  let entityManager: SinonStubbedInstance<EntityManager>;
  beforeEach(() => {
    entityManager = createStubObj<EntityManager>(['query']);
    daoPasaporteMysql = new DaoPasaporteMysql(entityManager);
  });

  it('debe listar', async () => {
    const obj = true;
    jest.spyOn(entityManager, 'query').mockReturnValue(obj);
    const res = await daoPasaporteMysql.listar();
    expect(res).toBe(true);
  });

  it('debe mostrar', async () => {
    const obj = true;
    jest.spyOn(entityManager, 'query').mockReturnValue(obj);
    const res = await daoPasaporteMysql.mostrar(1);
    expect(res).toBe(true);
  });
});
