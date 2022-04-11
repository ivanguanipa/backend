import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { servicioRegistrarPasaporteProveedor } from 'src/infraestructura/pasaporte/proveedor/servicio/servicio-registrar-pasaporte.proveedor';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';

describe('Pasaporte Reglas de Negocio', () => {
  let repositorioUsuarioStub: SinonStubbedInstance;
  beforeEach(() => {
    repositorioUsuarioStub = createStubObj<RepositorioPasaporteMysql>([
      'existePasaporte',
      'guardar',
      'mostrar',
      'eliminar',
    ]);
  });

  it('servicioEliminarPasaporteProveedor debe ser un objeto', async () => {
    const serv = servicioRegistrarPasaporteProveedor(repositorioUsuarioStub);
    expect(serv).toBeDefined();
  });
});
