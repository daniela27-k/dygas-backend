import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Censo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departamento: string;

  @Column()
  ciudad: string;

  @Column()
  municipio: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ nullable: true })
  cedula: string;

  @Column({ nullable: true })
  telefono: string;

  @Column()
  numeroHijos: number;

  @Column()
  personasHogar: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  latitud: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  longitud: number;

  @Column({ name: 'precision_metros', type: 'int', nullable: true })
  precision: number;

  @Column({ type: 'enum', enum: ['pendiente', 'aprobado', 'instalado'], default: 'pendiente' })
  estado: 'pendiente' | 'aprobado' | 'instalado';

  @CreateDateColumn()
  createdAt: Date;
}