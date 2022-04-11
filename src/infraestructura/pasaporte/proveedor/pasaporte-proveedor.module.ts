import { Module } from '@nestjs/common';
import { ServicioRegistrarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-registrar-pasaporte';
import { ServicioEliminarPasaporte } from 'src/dominio/pasaporte/servicio/servicio-eliminar-pasaporte';
import { RepositorioPasaporte } from 'src/dominio/pasaporte/puerto/repositorio/repositorio-pasaporte';
import { DaoPasaporte } from 'src/dominio/pasaporte/puerto/dao/dao-pasaporte';
import { servicioRegistrarPasaporteProveedor } from './servicio/servicio-registrar-pasaporte.proveedor';
import { servicioEliminarPasaporteProveedor } from './servicio/servicio-eliminar-pasaporte.proveedor';
import { repositorioPasaporteProvider } from './repositorio/repositorio-pasaporte.proveedor';
import { daoPasaporteProvider } from './dao/dao-pasaporte.proveedor';
import { ManejadorRegistrarPasaporte } from 'src/aplicacion/pasaporte/comando/registar-pasaporte.manejador';
import { ManejadorEliminarPasaporte } from 'src/aplicacion/pasaporte/comando/eliminar-pasaporte.manejador';
import { ManejadorListarPasaporte } from 'src/aplicacion/pasaporte/consulta/listar-pasaporte.manejador';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasaporteEntidad } from '../entidad/pasaporte.entidad';
import { ManejadorMostrarPasaporte } from 'src/aplicacion/pasaporte/consulta/mostrar-pasaporte.manejador';

@Module({
  imports: [TypeOrmModule.forFeature([PasaporteEntidad])],
  providers: [
    {
      provide: ServicioRegistrarPasaporte,
      inject: [RepositorioPasaporte, DaoPasaporte],
      useFactory: servicioRegistrarPasaporteProveedor,
    },
    {
      provide: ServicioEliminarPasaporte,
      inject: [RepositorioPasaporte, DaoPasaporte],
      useFactory: servicioEliminarPasaporteProveedor,
    },
    repositorioPasaporteProvider,
    daoPasaporteProvider,
    ManejadorRegistrarPasaporte,
    ManejadorEliminarPasaporte,
    ManejadorListarPasaporte,
    ManejadorMostrarPasaporte,
  ],
  exports: [
    ServicioRegistrarPasaporte,
    ManejadorRegistrarPasaporte,
    ManejadorEliminarPasaporte,
    ManejadorListarPasaporte,
    RepositorioPasaporte,
    DaoPasaporte,
    ManejadorMostrarPasaporte,
  ],
})
export class PasaporteProveedorModule {}
