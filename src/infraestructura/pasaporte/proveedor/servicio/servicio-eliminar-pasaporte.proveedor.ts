import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';

export function servicioEliminarPasaporteProveedor(
  repositorioPasaporte: RepositorioPasaporte,
  daoPasaporte: DaoPasaporte,
) {
  return new ServicioEliminarPasaporte(repositorioPasaporte, daoPasaporte);
}
