import { PasaporteControlador } from 'src/infraestructura/pasaporte/controlador/pasaporte.controlador';
import { ManejadorRegistrarPasaporte } from 'src/aplicacion/pasaporte/comando/registar-pasaporte.manejador';
import { ManejadorEliminarPasaporte } from 'src/aplicacion/pasaporte/comando/eliminar-pasaporte.manejador';
import { ManejadorListarPasaporte } from 'src/aplicacion/pasaporte/consulta/listar-pasaporte.manejador';
import { ManejadorMostrarPasaporte } from 'src/aplicacion/pasaporte/consulta/mostrar-pasaporte.manejador';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';
import { Test } from '@nestjs/testing';
import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';

describe('PasaporteController', () => {
  let pasaporteControlador: PasaporteControlador;
  let manejadorRegistrarPasaporte: ManejadorRegistrarPasaporte;
  let manejadorEliminarPasaporte: ManejadorEliminarPasaporte;
  let manejadorListarPasaporte: ManejadorListarPasaporte;
  let manejadorMostrarPasaporte: ManejadorMostrarPasaporte;

  beforeEach(() => {
    pasaporteControlador = new PasaporteControlador(
      manejadorRegistrarPasaporte,
      manejadorListarPasaporte,
      manejadorMostrarPasaporte,
      manejadorEliminarPasaporte,
    );
  });

  describe('Pasaporte controller', () => {
    it('deberia obtener lista de pasaportes', async () => {
      const result = [new PasaporteDto()];
      jest
        .spyOn(pasaporteControlador, 'listar')
        .mockImplementation(async () => {
          return result;
        });
      expect(await pasaporteControlador.listar()).toBe(result);
    });
  });
});
