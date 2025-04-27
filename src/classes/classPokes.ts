import { PokeType, PokemonStat } from './types';

export class Poke {
  constructor(
    public id: number,
    public name: string,
    public base_experience: number,
    public height: number,
    public weight: number,
    public legendary: boolean,
    public firstAppearance: string,
    public abilities: string[],
    public stats: PokemonStat[],
  ) {}

  static fromJSON(json: PokeType): Poke {
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
