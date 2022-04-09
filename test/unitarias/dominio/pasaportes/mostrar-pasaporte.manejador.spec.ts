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
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

describe('Manejador Eliminar Pasaporte controller', () => {
  let manejadorMostrarPasaporte: ManejadorMostrarPasaporte;
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

    manejadorMostrarPasaporte = module.get(ManejadorMostrarPasaporte);
    daoPasaporte = module.get(DaoPasaporte);
  });

  it('mostrar metodo con data', async () => {
    const result = [1];
    jest
      .spyOn(daoPasaporte as any, 'mostrar')
      .mockReturnValue(Promise.resolve([1]));
    const res = await manejadorMostrarPasaporte.ejecutar(1);
    expect(res).toEqual(result);
  });
  it('validar metodo error sin data', async () => {
    jest
      .spyOn(daoPasaporte as any, 'mostrar')
      .mockReturnValue(Promise.resolve([]));
    try {
      await manejadorMostrarPasaporte.ejecutar(1);
    } catch (error) {
      expect(error.message).toBe('No existe registro de pasaporte');
    }
  });
});
