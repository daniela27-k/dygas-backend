import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CensoService } from './censo.service';
import { CensoController } from './censo.controller';
import { Censo } from './censo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Censo])],
  providers: [CensoService],
  controllers: [CensoController],
})
export class CensoModule {}