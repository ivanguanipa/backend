import { Injectable } from '@nestjs/common';

import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

@Injectable()
export class ManejadorMostrarPasaporte {
  constructor(private _daoPasaporte: DaoPasaporte) {}

  async ejecutar(id): Promise<PasaporteDto> {
    const pasaporte = await this._daoPasaporte.mostrar(id);
    if (Object.keys(pasaporte).length === 0) {
      throw new ErrorDeNegocio(`No existe registro de pasaporte`);
    }
    return pasaporte;
  }
}
