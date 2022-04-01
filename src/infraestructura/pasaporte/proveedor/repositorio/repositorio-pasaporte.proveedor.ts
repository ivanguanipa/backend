import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';

export const repositorioPasaporteProvider = {
  provide: RepositorioPasaporte,
  useClass: RepositorioPasaporteMysql,
};
