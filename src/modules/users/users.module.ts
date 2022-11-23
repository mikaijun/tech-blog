import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/entities/article.entity';
import { UserEntity } from 'src/entities/user.entity';
import { ArticlesRepository } from 'src/repositories/article-repository';
import { UsersRepository } from 'src/repositories/user-repository';
import { UserDeleteUseCase } from './usecases/users-delete.usecase';
import { UserSaveUseCase } from './usecases/users-save-usecase';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ArticleEntity])],
  providers: [
    UsersResolver,
    UsersRepository,
    UserSaveUseCase,
    UserDeleteUseCase,
    ArticlesRepository,
  ],
})
export class UsersModule {}
