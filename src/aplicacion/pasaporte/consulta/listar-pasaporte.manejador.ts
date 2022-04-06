import { Injectable } from '@nestjs/common';

import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';

@Injectable()
export class ManejadorListarPasaporte {
  constructor(private _daoPasaporte: DaoPasaporte) {}

  async ejecutar(): Promise<PasaporteDto[]> {
    return this._daoPasaporte.listar();
  }
}
