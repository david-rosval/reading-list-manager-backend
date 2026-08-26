export class Book {
  constructor(
    public id: string,
    public title: string,
    public pageCount: number,
    public synopsis: string,
    public authorId: string,
  ) {}
}
