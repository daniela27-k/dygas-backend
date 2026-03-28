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

  @Column()
  numeroHijos: number;

  @Column()
  personasHogar: number;

  @CreateDateColumn()
  createdAt: Date;
}

