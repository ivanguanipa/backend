import { Injectable } from '@nestjs/common';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { ComandoEliminarPasaporte } from './eliminar-pasaporte.comando';

@Injectable()
export class ManejadorEliminarPasaporte {
  constructor(private _servicioRegistrarPasaporte: ServicioEliminarPasaporte) {}

  async ejecutar(comandoEliminarPasaporte: ComandoEliminarPasaporte) {
    console.log(
      'pasando ManejadorEliminarPasaporte',
      comandoEliminarPasaporte.id,
    );
    return await this._servicioRegistrarPasaporte.eliminar(
      comandoEliminarPasaporte.id,
    );
  }
}
