import { RepositorioPasaporte } from '../puerto/repositorio/repositorio-pasaporte';
import { DaoPasaporte } from '../puerto/dao/dao-pasaporte';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioEliminarPasaporte {
  constructor(
    private readonly _repositorioPasaporte: RepositorioPasaporte,
    private readonly _daoPasaporte: DaoPasaporte,
  ) {}

  async eliminar(id: number) {
    const passport = await this._daoPasaporte.mostrar(id);
    if (!passport) {
      throw new ErrorDeNegocio(`No existe registro de pasaporte`);
    }
    return this._repositorioPasaporte.eliminar(id);
  }
}
