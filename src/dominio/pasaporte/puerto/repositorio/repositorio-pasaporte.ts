import { Pasaporte } from '../../modelo/pasaporte';

export abstract class RepositorioPasaporte {
  abstract guardar(pasaporte: Pasaporte);
  abstract eliminar(id: number);
}
