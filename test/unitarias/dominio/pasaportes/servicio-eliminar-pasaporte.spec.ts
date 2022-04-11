import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';

describe('Pasaporte Reglas de Negocio', () => {
  let repositorioUsuarioStub: SinonStubbedInstance;
  let daoUsuarioStub: SinonStubbedInstance;
  let servicioEliminarPasaporte: ServicioEliminarPasaporte;
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
    servicioEliminarPasaporte = new ServicioEliminarPasaporte(
      repositorioUsuarioStub,
      daoUsuarioStub,
    );
  });

  it('debe dar error si no existe pasaporte', async () => {
    try {
      jest.spyOn(daoUsuarioStub, 'mostrar').mockReturnValue(null);
      const res = await servicioEliminarPasaporte.eliminar(1);
    } catch (error) {
      expect(error.message).toBe('No existe registro de pasaporte');
    }
  });

  it('debe eliminar pasaporte', async () => {
    jest.spyOn(daoUsuarioStub, 'mostrar').mockReturnValue(1);
    jest.spyOn(repositorioUsuarioStub, 'eliminar').mockReturnValue(true);
    const res = await servicioEliminarPasaporte.eliminar(1);
    expect(res).toBe(true);
  });
});
