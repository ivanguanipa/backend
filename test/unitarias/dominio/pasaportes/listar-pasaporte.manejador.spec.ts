import { PasaporteControlador } from 'src/infraestructura/pasaporte/controlador/pasaporte.controlador';
import { ManejadorRegistrarPasaporte } from 'src/aplicacion/pasaporte/comando/registar-pasaporte.manejador';
import { ManejadorEliminarPasaporte } from 'src/aplicacion/pasaporte/comando/eliminar-pasaporte.manejador';
import { ManejadorListarPasaporte } from 'src/aplicacion/pasaporte/consulta/listar-pasaporte.manejador';
import { ManejadorMostrarPasaporte } from 'src/aplicacion/pasaporte/consulta/mostrar-pasaporte.manejador';
import { Test } from '@nestjs/testing';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';
import { daoPasaporteProvider } from 'src/infraestructura/pasaporte/proveedor/dao/dao-pasaporte.proveedor';
import { EntityManager } from 'typeorm';
import { ComandoRegistrarPasaporte } from 'src/aplicacion/pasaporte/comando/registrar-pasaporte.comando';

describe('Manejador Eliminar Pasaporte controller', () => {
  let manejadorEliminarPasaporte: ManejadorEliminarPasaporte;
  let servicioEliminarPasaporte: ServicioEliminarPasaporte;
  let manejadorListarPasaporte: ManejadorListarPasaporte;
  let daoPasaporte: DaoPasaporte;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ServicioRegistrarPasaporte,
        ServicioEliminarPasaporte,
        PasaporteControlador,
        ManejadorRegistrarPasaporte,
        ManejadorEliminarPasaporte,
        ManejadorListarPasaporte,
        ManejadorMostrarPasaporte,
        daoPasaporteProvider,
        EntityManager,
        DaoPasaporteMysql,
        ComandoRegistrarPasaporte,
      ],
      exports: [DaoPasaporte, DaoPasaporteMysql],
    }).compile();

    servicioEliminarPasaporte = module.get(ServicioEliminarPasaporte);
    manejadorListarPasaporte = module.get(ManejadorListarPasaporte);
    daoPasaporte = module.get(DaoPasaporte);
  });

  it('listar metodo', async () => {
    const result = [];
    jest.spyOn(daoPasaporte, 'listar').mockReturnValue(Promise.resolve([]));
    const res = await manejadorListarPasaporte.ejecutar();
    expect(res).toEqual(result);
  });
});
