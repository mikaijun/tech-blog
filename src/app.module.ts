import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import { Item } from './item/item.entity';
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
      entities: [Item],
    }),
    ItemModule,
    UsersModule,
  ],
})
export class AppModule {}
