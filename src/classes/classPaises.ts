import { PaisType } from './types';

export class Paises {
  constructor(
    public name: {
      common: string;
      official: string;
    },
    public independent: boolean,
    public unMember: boolean,
    public capital: string,
    public region: string,
    public subregion: string,
    public languages: string[],
    public latlng: number[],
    public borders: string[],
    public area: number,
    public population: number,
    public timezones: string[],
    public flags: {
      png: string;
      svg: string;
    }
  ) {}

  static fromJSON(json: PaisType): Paises {
    return new Paises(
      json.name,
      json.independent,
      json.unMember,
      json.capital,
      json.region,
      json.subregion,
      json.languages,
      json.latlng,
      json.borders,
      json.area,
      json.population,
      json.timezones,
      json.flags
    );
  }
}
