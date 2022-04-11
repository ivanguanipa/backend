import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';

export function servicioRegistrarPasaporteProveedor(
  repositorioPasaporte: RepositorioPasaporte,
  daoPasaporte: DaoPasaporte,
) {
  return new ServicioRegistrarPasaporte(repositorioPasaporte, daoPasaporte);
}
