import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';

export abstract class DaoPasaporte {
  abstract listar(): Promise<PasaporteDto[]>;
  abstract mostrar(id: number): Promise<PasaporteDto>;
  abstract existePasaporte(nombre: number): Promise<boolean>;
}
