import { Module } from '@nestjs/common';
import { PasaporteControlador } from './controlador/pasaporte.controlador';
import { PasaporteProveedorModule } from './proveedor/pasaporte-proveedor.module';

@Module({
  imports: [PasaporteProveedorModule],
  controllers: [PasaporteControlador],
})
export class PasaporteModule {}
