import { repositorioPasaporteProvider } from 'src/infraestructura/pasaporte/proveedor/repositorio/repositorio-pasaporte.proveedor';
import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';

describe('repositorioPasaporteProvider', () => {
  beforeEach(function () {});

  it('repositorioPasaporteProvider debe ser un objeto', async () => {
    expect(repositorioPasaporteProvider).toBeDefined();
  });
});
