import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_students')
export class Student {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 100 })
  lastname: string;

  @Column('int')
  age: number;

  @Column('varchar', { length: 150 })
  email: string;
}
