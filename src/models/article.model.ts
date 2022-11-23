import { ArticleEntity, ArticleSaveInput } from 'src/entities/article.entity';

export class Article {
  public readonly id!: number | null;
  public readonly userId!: number;
  public readonly content!: string;
  public readonly shareLink!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly publishedAt!: Date | null;
  public readonly deletedAt!: Date | null;

  constructor(
    record: Pick<
      Article,
      | 'id'
      | 'userId'
      | 'content'
      | 'shareLink'
      | 'createdAt'
      | 'updatedAt'
      | 'publishedAt'
      | 'deletedAt'
    >,
  ) {
    Object.assign(this, record);
  }

  public static fromDataBase(record: ArticleEntity): Article {
    return new Article({
      id: record.id,
      userId: record.userId,
      content: record.content,
      shareLink: record.shareLink,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      publishedAt: record.publishedAt,
      deletedAt: record.deletedAt,
    });
  }

  public static toDataBase(article: Article): ArticleEntity {
    const data = {
      id: article.id,
      userId: article.userId,
      content: article.content,
      shareLink: article.shareLink,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
      deletedAt: article.deletedAt,
    };
    return data;
  }

  public static create(data: ArticleSaveInput): Article {
    return new Article({
      id: data.id,
      userId: data.userId,
      content: data.content,
      shareLink: data.shareLink,
      createdAt: new Date(),
      updatedAt: new Date(),
      publishedAt: data.isPublish ? new Date() : null,
      deletedAt: null,
    });
  }

  public update(data: ArticleSaveInput): Article {
    return new Article({
      id: this.id,
      userId: data.userId,
      content: data.content,
      shareLink: data.shareLink,
      createdAt: this.createdAt,
      updatedAt: new Date(),
      publishedAt: data.isPublish ? this.publishedAt : null,
      deletedAt: data.isDelete ? new Date() : null,
    });
  }
}
