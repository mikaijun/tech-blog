import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface UserSaveInput {
  id: number;
  name: string;
}
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt?: Date | null;
}
