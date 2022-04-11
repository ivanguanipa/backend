import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';
import { servicioRegistrarPasaporteProveedor } from 'src/infraestructura/pasaporte/proveedor/servicio/servicio-registrar-pasaporte.proveedor';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';

describe('Pasaporte Reglas de Negocio', () => {
  let repositorioUsuarioStub: SinonStubbedInstance;
  let daoUsuarioStub: SinonStubbedInstance;
  beforeEach(() => {
    repositorioUsuarioStub = createStubObj<RepositorioPasaporteMysql>([
      'guardar',
      'eliminar',
    ]);
    daoUsuarioStub = createStubObj<DaoPasaporteMysql>([
      'listar',
      'mostrar',
      'existePasaporte',
    ]);
  });

  it('servicioEliminarPasaporteProveedor debe ser un objeto', async () => {
    const serv = servicioRegistrarPasaporteProveedor(
      repositorioUsuarioStub,
      daoUsuarioStub,
    );
    expect(serv).toBeDefined();
  });
});
