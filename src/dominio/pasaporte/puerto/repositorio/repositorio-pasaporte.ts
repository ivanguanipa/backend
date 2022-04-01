import { Pasaporte } from '../../modelo/pasaporte';

export abstract class RepositorioPasaporte {
  abstract existePasaporte(nombre: number): Promise<boolean>;
  abstract guardar(pasaporte: Pasaporte);
  abstract mostrar(id: number);
  abstract eliminar(id: number);
}
