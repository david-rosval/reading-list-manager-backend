import { Book } from '../domain/book.entity';

export interface IBookRepository {
  create(book: Book): Promise<void>;
  findById(id: string): Promise<Book | null>;
}
