import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface ArticleSaveInput {
  id: number;
  userId: number;
  content: string;
  shareLink: string;
  isPublish: boolean;
  isDelete: boolean;
}

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
