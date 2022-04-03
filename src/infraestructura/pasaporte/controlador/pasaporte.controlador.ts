import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ComandoRegistrarPasaporte } from 'src/aplicacion/pasaporte/comando/registrar-pasaporte.comando';
import { ComandoEliminarPasaporte } from 'src/aplicacion/pasaporte/comando/eliminar-pasaporte.comando';
import { ManejadorRegistrarPasaporte } from 'src/aplicacion/pasaporte/comando/registar-pasaporte.manejador';
import { ManejadorEliminarPasaporte } from 'src/aplicacion/pasaporte/comando/eliminar-pasaporte.manejador';
import { ManejadorListarPasaporte } from 'src/aplicacion/pasaporte/consulta/listar-pasaporte.manejador';
import { ManejadorMostrarPasaporte } from 'src/aplicacion/pasaporte/consulta/mostrar-pasaporte.manejador';
import { PasaporteDto } from 'src/aplicacion/pasaporte/consulta/dto/pasaporte.dto';

@Controller('pasaportes')
export class PasaporteControlador {
  constructor(
    private readonly _manejadorRegistrarPasaporte: ManejadorRegistrarPasaporte,
    private readonly _manejadorListarPasaporte: ManejadorListarPasaporte,
    private readonly _manejadorMostrarPasaporte: ManejadorMostrarPasaporte,
    private readonly _manejadorEliminarPasaporte: ManejadorEliminarPasaporte,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarPasaporte: ComandoRegistrarPasaporte) {
    return this._manejadorRegistrarPasaporte.ejecutar(
      comandoRegistrarPasaporte,
    );
  }

  @Delete('delete')
  @UsePipes(new ValidationPipe({ transform: true }))
  async eliminar(@Body() comandoEliminarPasaporte: ComandoEliminarPasaporte) {
    return this._manejadorEliminarPasaporte.ejecutar(comandoEliminarPasaporte);
  }

  @Get()
  async listar(): Promise<PasaporteDto[]> {
    return this._manejadorListarPasaporte.ejecutar();
  }

  @Get('/show/:id')
  async mostrar(@Param('id') id): Promise<PasaporteDto> {
    console.log('id', id);
    return this._manejadorMostrarPasaporte.ejecutar(id);
  }
}
