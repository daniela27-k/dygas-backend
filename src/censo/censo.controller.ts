import { Controller, Get, Post, Body } from '@nestjs/common';
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
}