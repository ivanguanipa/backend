import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';

export function servicioEliminarPasaporteProveedor(
  repositorioPasaporte: RepositorioPasaporte,
) {
  return new ServicioEliminarPasaporte(repositorioPasaporte);
}
