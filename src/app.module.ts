import { UserEntity } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './entities/article.entity';
import { ArticlesModule } from './modules/articles/articles.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlitedb.db',
      synchronize: true,
      entities: [UserEntity, ArticleEntity],
    }),
    UsersModule,
    ArticlesModule,
  ],
})
export class AppModule {}
