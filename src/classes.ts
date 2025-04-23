import data from '../objetos.json';

class Poke {
  constructor(
    public id: number,
    public name: string,
    public base_experience: number,
    public height: number,
    public weight: number,
    public legendary: boolean,
    public firstAppearance: string,
    public abilities: string[],
    public stats: {
      base_stat: number;
      stat: string;
    }[]
  ) {}

  static fromJSON(json: any): Poke {
    return new Poke(
      json.id,
      json.name,
      json.base_experience,
      json.height,
      json.weight,
      json.legendary,
      json.firstAppearance,
      json.abilities,
      json.stats
    );
  }
}

class Filmes {
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

class Paises {
  constructor(
    public name: {
      common: number;
      official: string;
    }[],
    public independent: boolean,
    public unMember: boolean,
    public capital: string,
    public region: string,
    public subregion: string,
    public lenguages: string[],
    public latlng: number[],
    public borders: string[],
    public area: number,
    public population: number,
    public timezones: string[],
    public flags: {
      png: string;
      svg: string;
    },
  ){}
  static fromJSON(json: any): Paises {
    return new Paises(
      json.name,
      json.independent,
      json.unMember,
      json.capital,
      json.region,
      json.subregion,
      json.lenguages,
      json.latlng,
      json.borders,
      json.area,
      json.population,
      json.timezones,
      json.flags
    );
  }
}

const pokes = data.pokes.map((pokeData: any) => Poke.fromJSON(pokeData));
console.log(pokes);

const filmes = data.filmes.map((filmeData: any) => Filmes.fromJSON(filmeData));
console.log(filmes)

const paises = data.paises.map((paisData: any) => Paises.fromJSON(paisData));
console.log(paises);
