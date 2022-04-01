import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { DaoPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/dao/dao-pasaporte-mysql';

export const daoPasaporteProvider = {
  provide: DaoPasaporte,
  useClass: DaoPasaporteMysql,
};
