import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';

export function servicioRegistrarPasaporteProveedor(
  repositorioPasaporte: RepositorioPasaporte,
) {
  return new ServicioRegistrarPasaporte(repositorioPasaporte);
}
