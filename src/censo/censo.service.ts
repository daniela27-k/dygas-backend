import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Censo } from './censo.entity';

@Injectable()
export class CensoService {
  constructor(
    @InjectRepository(Censo)
    private censoRepository: Repository<Censo>,
  ) {}

  create(data: Partial<Censo>) {
    const censo = this.censoRepository.create(data);
    return this.censoRepository.save(censo);
  }

  findAll() {
    return this.censoRepository.find();
  }

  // ✅ Cambiar estado del registro
  async cambiarEstado(id: number, estado: 'pendiente' | 'aprobado' | 'instalado') {
    await this.censoRepository.update(id, { estado });
    return this.censoRepository.findOne({ where: { id: Number(id) } });
  }

  async getStats() {
    const total = await this.censoRepository.count();
    const porMunicipio = await this.censoRepository
      .createQueryBuilder('censo')
      .select('censo.municipio', 'municipio')
      .addSelect('COUNT(*)', 'total')
      .groupBy('censo.municipio')
      .getRawMany();

    const porDepartamento = await this.censoRepository
      .createQueryBuilder('censo')
      .select('censo.departamento', 'departamento')
      .addSelect('COUNT(*)', 'total')
      .groupBy('censo.departamento')
      .getRawMany();

    // ✅ Conteo por estado
    const porEstado = await this.censoRepository
      .createQueryBuilder('censo')
      .select('censo.estado', 'estado')
      .addSelect('COUNT(*)', 'total')
      .groupBy('censo.estado')
      .getRawMany();

    return { total, porMunicipio, porDepartamento, porEstado };
  }
}