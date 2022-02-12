import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Role {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;
}