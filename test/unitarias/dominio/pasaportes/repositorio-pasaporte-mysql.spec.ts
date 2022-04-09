import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';
import { Repository } from 'typeorm';
import { PasaporteEntidad } from 'src/infraestructura/pasaporte/entidad/pasaporte.entidad';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const RepositoryMockFactory: () => MockType<
  Repository<PasaporteEntidad>
> = jest.fn(() => ({
  count: jest.fn((entity) => entity),
  save: jest.fn((entity) => entity),
  update: jest.fn((entity) => entity),
  // ...
}));

describe('Pasaporte Reglas de Negocio', () => {
  let repositorioPasaporteMysql: RepositorioPasaporteMysql;
  let repositorioUsuarioStub: SinonStubbedInstance<
    MockType<Repository<PasaporteEntidad>>
  >;
  beforeEach(() => {
    repositorioUsuarioStub = createStubObj<
      MockType<Repository<PasaporteEntidad>>
    >(['save', 'count', 'update', 'findOne']);
    repositorioPasaporteMysql = new RepositorioPasaporteMysql(
      repositorioUsuarioStub,
    );
  });

  it('debe guardar en repositorio', async () => {
    const pasaporte = new Pasaporte(
      1,
      'string',
      'string',
      new Date('2022-04-07'),
      1,
      new Date('2022-04-07'),
      new Date('2022-04-07'),
    );
    jest.spyOn(repositorioUsuarioStub, 'save').mockReturnValue(true);
    const res = await repositorioPasaporteMysql.guardar(pasaporte);
    expect(res).toBe(true);
  });
  it('debe existePasaporte', async () => {
    jest.spyOn(repositorioUsuarioStub, 'count').mockReturnValue(true);
    const res = await repositorioPasaporteMysql.existePasaporte(1);
    expect(res).toBe(true);
  });
  it('debe mostrar', async () => {
    jest.spyOn(repositorioUsuarioStub, 'findOne').mockReturnValue(true);
    const res = await repositorioPasaporteMysql.mostrar(1);
    expect(res).toBe(true);
  });
  it('debe mostrar', async () => {
    jest.spyOn(repositorioUsuarioStub, 'update').mockReturnValue(true);
    const res = await repositorioPasaporteMysql.eliminar(1);
    expect(res).toEqual({ success: true });
  });
});
