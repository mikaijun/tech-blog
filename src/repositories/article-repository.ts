import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/entities/article.entity';
import { Article } from 'src/models/article.model';
import { Repository } from 'typeorm';
@Injectable()
export class ArticlesRepository {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async findAll(): Promise<Article[]> {
    const rows = await this.articleRepository.find();
    return rows.map((row) => Article.fromDataBase(row));
  }

  async findById(id: number): Promise<Article> {
    const row = await this.articleRepository.findOneBy({ id });
    return Article.fromDataBase(row);
  }

  async findByUserId(id: number): Promise<Article[]> {
    const rows = await this.articleRepository.findBy({ id });
    return rows.map((row) => Article.fromDataBase(row));
  }

  async save(saveUser: Article): Promise<Article> {
    const data = Article.toDataBase(saveUser);
    if (saveUser.id) {
      const row = await this.articleRepository.save(data);
      return Article.fromDataBase(row);
    } else {
      const createUser = await this.articleRepository.create(data);
      const row = await this.articleRepository.save(createUser);
      return Article.fromDataBase(row);
    }
  }
}
