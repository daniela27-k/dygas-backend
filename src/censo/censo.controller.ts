import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { CensoService } from './censo.service';
import { Censo } from './censo.entity';

@Controller('censo')
export class CensoController {
  constructor(private censoService: CensoService) {}

  @Post()
  create(@Body() body: Partial<Censo>) {
    return this.censoService.create(body);
  }

  @Get()
  findAll() {
    return this.censoService.findAll();
  }

  @Get('stats')
  getStats() {
    return this.censoService.getStats();
  }

  // ✅ Cambiar estado de un registro
  @Patch(':id/estado')
  cambiarEstado(@Param('id') id: number, @Body('estado') estado: 'pendiente' | 'aprobado' | 'instalado') {
    return this.censoService.cambiarEstado(id, estado);
  }
}