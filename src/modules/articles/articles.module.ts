import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/entities/article.entity';
import { ArticlesRepository } from 'src/repositories/article-repository';
import { ArticlesResolver } from './articles.resolver';
import { ArticleSaveUseCase } from './usecases/article-save-usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticlesResolver, ArticlesRepository, ArticleSaveUseCase],
})
export class ArticlesModule {}
