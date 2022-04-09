import { Injectable } from '@nestjs/common';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';
import { ComandoRegistrarPasaporte } from './registrar-pasaporte.comando';
import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';

@Injectable()
export class ManejadorRegistrarPasaporte {
  constructor(
    private _servicioRegistrarPasaporte: ServicioRegistrarPasaporte,
  ) {}

  async ejecutar(comandoRegistrarPasaporte: ComandoRegistrarPasaporte) {
    return this._servicioRegistrarPasaporte.ejecutar(
      new Pasaporte(
        comandoRegistrarPasaporte.documentId,
        comandoRegistrarPasaporte.fullname,
        comandoRegistrarPasaporte.address,
        comandoRegistrarPasaporte.birthdate,
        comandoRegistrarPasaporte.amount,
        comandoRegistrarPasaporte.applicationDate,
        comandoRegistrarPasaporte.appointmentDate,
      ),
    );
  }
}
