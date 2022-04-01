import { Injectable } from '@nestjs/common';

import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';

@Injectable()
export class ManejadorMostrarPasaporte {
  constructor(private _daoPasaporte: DaoPasaporte) {}

  async ejecutar(id): Promise<PasaporteDto> {
    console.log('pasando ManejadorMostrarPasaporte');
    return this._daoPasaporte.mostrar(id);
  }
}
