import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { SinonStubbedInstance } from 'sinon';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';
import { createStubObj } from 'test/util/create-object.stub';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';

describe('ServicioRegistrarPasaporte', () => {
  let servicioRegistrarPasaporte: ServicioRegistrarPasaporte;
  let repositorioUsuarioStub: SinonStubbedInstance<RepositorioPasaporteMysql>;
  let daoUsuarioStub: SinonStubbedInstance<DaoPasaporteMysql>;
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
});
