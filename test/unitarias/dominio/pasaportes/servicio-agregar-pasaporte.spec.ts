import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { createStubObj } from '../../../util/create-object.stub';
import { SinonStubbedInstance } from 'sinon';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';

describe('Pasaporte Reglas de Negocio', () => {
  let servicioRegistrarPasaporte: ServicioRegistrarPasaporte;
  let repositorioUsuarioStub: SinonStubbedInstance<RepositorioPasaporteMysql>;
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
    servicioRegistrarPasaporte = new ServicioRegistrarPasaporte(
      repositorioUsuarioStub,
      daoUsuarioStub,
    );
  });

  it('debe retornar un dia feriado', async () => {
    expect(
      await servicioRegistrarPasaporte.isHolliday(new Date('2022-11-01')),
    ).toEqual(true);
  });
  it('debe retornar un dia no feriado', async () => {
    expect(
      await servicioRegistrarPasaporte.isHolliday(new Date('2022-01-01')),
    ).toEqual(false);
  });
  it('debe calcular el doble de la tarifa si es feriado', async () => {
    const data_spect = {
      amount: servicioRegistrarPasaporte.AMOUNT_SERVICE * 2,
      appointmentDate: new Date('2022-11-01'),
    };
    expect(
      await servicioRegistrarPasaporte.calculateResources('2022-10-31'),
    ).toEqual(data_spect);
  });
  it('debe calcular tarifa simple si no es feriado', async () => {
    const data_spect = {
      amount: servicioRegistrarPasaporte.AMOUNT_SERVICE,
      appointmentDate: new Date('2022-01-03'),
    };
    expect(
      await servicioRegistrarPasaporte.calculateResources('2022-01-01'),
    ).toEqual(data_spect);
  });
  it('debe indicar si es fin de semana', async () => {
    expect(
      await servicioRegistrarPasaporte.isInWeekend(new Date('2022-01-01')),
    ).toEqual(true);
  });
  it('debe indicar si no es  fin de semana', async () => {
    expect(
      await servicioRegistrarPasaporte.isInWeekend(new Date('2022-01-03')),
    ).toEqual(false);
  });

  it('debe dar error si es fin de semana metodo', async () => {
    const result = [1];
    const date = new Date();
    const pasaporte = new Pasaporte(
      1,
      'string',
      'string',
      date,
      1,
      new Date('2022-04-09'),
      new Date('2022-04-09'),
    );
    try {
      const res = await servicioRegistrarPasaporte.ejecutar(pasaporte);
    } catch (error) {
      expect(error.message).toBe(
        'No puede agendar cita los días Sábados y Domingos',
      );
    }
  });

  it('debe dar error si ya tiene cita', async () => {
    const date = new Date();
    const pasaporte = new Pasaporte(
      1,
      'string',
      'string',
      date,
      1,
      new Date('2022-04-07'),
      new Date('2022-04-07'),
    );
    try {
      jest.spyOn(daoUsuarioStub, 'existePasaporte').mockReturnValue(true);
      const res = await servicioRegistrarPasaporte.ejecutar(pasaporte);
    } catch (error) {
      expect(error.message).toBe(
        'El documento ID 1 ya cuenta con una solicitud de pasaporte activa',
      );
    }
  });

  it('debe guardar', async () => {
    const date = new Date();
    const pasaporte = new Pasaporte(
      1,
      'string',
      'string',
      date,
      1,
      new Date('2022-04-07'),
      new Date('2022-04-07'),
    );
    jest.spyOn(daoUsuarioStub, 'existePasaporte').mockReturnValue(false);
    jest
      .spyOn(servicioRegistrarPasaporte, 'calculateResources')
      .mockReturnValue(
        Promise.resolve({
          amount: 1,
          appointmentDate: new Date(),
        }),
      );
    jest.spyOn(repositorioUsuarioStub, 'guardar').mockReturnValue(true);
    const res = await servicioRegistrarPasaporte.ejecutar(pasaporte);
    expect(res).toBe(true);
  });
});
