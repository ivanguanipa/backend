import { RepositorioPasaporte } from '../puerto/repositorio/repositorio-pasaporte';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioEliminarPasaporte {
  constructor(private readonly _repositorioPasaporte: RepositorioPasaporte) {}

  async eliminar(id: number) {
    console.log('llegando eliminar', id);
    const passport = await this._repositorioPasaporte.mostrar(id);
    console.log('resultado busqueda', passport);
    console.log(passport);
    if (!passport) {
      throw new ErrorDeNegocio(`No existe registro de pasaporte`);
    }
    return await this._repositorioPasaporte.eliminar(id);
  }
}
