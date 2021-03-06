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

describe('PasaporteController', () => {
  let pasaporteControlador: PasaporteControlador;
  let manejadorEliminarPasaporte: ManejadorEliminarPasaporte;
  let manejadorListarPasaporte: ManejadorListarPasaporte;
  let manejadorMostrarPasaporte: ManejadorMostrarPasaporte;
  let servicioRegistrarPasaporte: ServicioRegistrarPasaporte;

  let comandoRegistrarPasaporte: ComandoRegistrarPasaporte;

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

    pasaporteControlador = module.get(PasaporteControlador);
    servicioRegistrarPasaporte = module.get(ServicioRegistrarPasaporte);
    manejadorMostrarPasaporte = module.get(ManejadorMostrarPasaporte);
    manejadorListarPasaporte = module.get(ManejadorListarPasaporte);
    manejadorEliminarPasaporte = module.get(ManejadorEliminarPasaporte);
    comandoRegistrarPasaporte = module.get(ComandoRegistrarPasaporte);
  });

  describe('Pasaporte controller', () => {
    it('deberia obtener lista de pasaportes', async () => {
      jest
        .spyOn(manejadorListarPasaporte as any, 'ejecutar')
        .mockReturnValue(1);
      const res = await pasaporteControlador.listar();
      expect(res).toBe(1);
    });
    it('deberia mostrar un pasaportes', async () => {
      jest
        .spyOn(manejadorMostrarPasaporte as any, 'ejecutar')
        .mockReturnValue(1);
      const res = await pasaporteControlador.mostrar(1);
      expect(res).toBe(1);
    });
    it('deberia eliminar un pasaportes', async () => {
      jest
        .spyOn(manejadorEliminarPasaporte as any, 'ejecutar')
        .mockReturnValue(true);
      const res = await pasaporteControlador.eliminar({ id: 1 });
      expect(res).toBe(true);
    });
    it('deberia crear un pasaportes', async () => {
      jest
        .spyOn(servicioRegistrarPasaporte as any, 'ejecutar')
        .mockReturnValue(true);
      const res = await pasaporteControlador.crear(comandoRegistrarPasaporte);
      expect(res).toBe(true);
    });
  });
});
