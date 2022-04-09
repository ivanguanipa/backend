import { RepositorioPasaporte } from '../puerto/repositorio/repositorio-pasaporte';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioEliminarPasaporte {
  constructor(private readonly _repositorioPasaporte: RepositorioPasaporte) {}

  async eliminar(id: number) {
    const passport = await this._repositorioPasaporte.mostrar(id);
    if (!passport) {
      throw new ErrorDeNegocio(`No existe registro de pasaporte`);
    }
    return this._repositorioPasaporte.eliminar(id);
  }
}
