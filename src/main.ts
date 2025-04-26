import { Poke } from './classes/classPokes';
import { Filmes } from './classes/classFilmes';
import { Paises } from './classes/classPaises';

import pokesData from './data/pokes.json';
import filmesData from './data/filmes.json';
import paisesData from './data/paises.json';

const pokes = pokesData.map((pokeData: any) => Poke.fromJSON(pokeData));
pokes.forEach((poke) => {
  console.log('Poke:', poke);
});

const filmes = filmesData.map((filmeData: any) => Filmes.fromJSON(filmeData));
filmes.forEach((filme) => {
  console.log('Filme:', filme);
});

const paises = paisesData.map((paisData: any) => Paises.fromJSON(paisData));
paises.forEach((pais) => {
  console.log('País:', pais);
});
