export class Filmes {
  constructor(
    public adult: boolean,
    public backdrop_path: string,
    public id: number,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public release_date: string,
    public title: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number
  ) {}

  static fromJSON(json: any): Filmes {
    return new Filmes(
      json.adult,
      json.backdrop_path,
      json.id,
      json.original_language,
      json.original_title,
      json.overview,
      json.popularity,
      json.poster_path,
      json.release_date,
      json.title,
      json.video,
      json.vote_average,
      json.vote_count
    );
  }
}
