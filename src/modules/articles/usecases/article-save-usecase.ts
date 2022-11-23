import { Injectable } from '@nestjs/common';
import { ArticleSaveInput } from 'src/entities/article.entity';
import { Article } from 'src/models/article.model';
import { ArticlesRepository } from 'src/repositories/article-repository';

@Injectable()
export class ArticleSaveUseCase {
  constructor(private readonly articlesRepository: ArticlesRepository) {}

  /**
   * 投稿を保存する
   */
  async invoke(input: ArticleSaveInput) {
    if (input.id) {
      const article = await this.articlesRepository.findById(input.id);
      return this.articlesRepository.save(article.update(input));
    }
    return this.articlesRepository.save(Article.create(input));
  }
}
