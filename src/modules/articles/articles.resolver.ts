import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { ArticleSaveInput } from 'src/entities/article.entity';
import { Article } from 'src/models/article.model';
import { ArticlesRepository } from 'src/repositories/article-repository';
import { ArticleSaveUseCase } from './usecases/article-save-usecase';

@Resolver('Articles')
export class ArticlesResolver {
  constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly articleSaveUseCase: ArticleSaveUseCase,
  ) {}
  @Query()
  articles(): Promise<Article[]> {
    return this.articlesRepository.findAll();
  }

  @Query()
  article(@Args('id') id: number): Promise<Article> {
    return this.articlesRepository.findById(id);
  }

  @Mutation()
  saveArticle(@Args('input') input: ArticleSaveInput): Promise<Article> {
    return this.articleSaveUseCase.invoke(input);
  }
}
