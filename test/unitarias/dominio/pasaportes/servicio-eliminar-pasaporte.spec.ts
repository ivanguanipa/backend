import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';

describe('Pasaporte Reglas de Negocio', () => {
  let servicioEliminarPasaporte: ServicioEliminarPasaporte;
  let repositorioUsuarioStub: SinonStubbedInstance<RepositorioPasaporteMysql>;
  beforeEach(() => {
    repositorioUsuarioStub = createStubObj<RepositorioPasaporteMysql>([
      'existePasaporte',
      'guardar',
      'mostrar',
      'eliminar',
    ]);
    servicioEliminarPasaporte = new ServicioEliminarPasaporte(
      repositorioUsuarioStub,
    );
  });

  it('debe dar error si no existe pasaporte', async () => {
    try {
      jest.spyOn(repositorioUsuarioStub, 'mostrar').mockReturnValue(null);
      const res = await servicioEliminarPasaporte.eliminar(1);
    } catch (error) {
      expect(error.message).toBe('No existe registro de pasaporte');
    }
  });

  it('debe eliminar pasaporte', async () => {
    jest.spyOn(repositorioUsuarioStub, 'mostrar').mockReturnValue(1);
    jest.spyOn(repositorioUsuarioStub, 'eliminar').mockReturnValue(true);
    const res = await servicioEliminarPasaporte.eliminar(1);
    expect(res).toBe(true);
  });
});
