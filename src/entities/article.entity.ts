import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  content: string;

  @Column({ nullable: true })
  shareLink: string | null;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ nullable: true })
  publishedAt: Date | null;

  @Column({ nullable: true })
  deletedAt?: Date | null;
}
