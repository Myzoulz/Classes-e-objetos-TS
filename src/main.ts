import { Poke } from './classes/classPokes';
import { Filmes } from './classes/classFilmes';
import { Paises } from './classes/classPaises';
import { PokeType, FilmesType, PaisType } from './classes/types';
import pokesData from './data/pokes.json';
import filmesData from './data/filmes.json';
import paisesData from './data/paises.json';



const pokes = pokesData.map((pokeData: PokeType) => Poke.fromJSON(pokeData));

const filmes = filmesData.map((filmeData: FilmesType) => Filmes.fromJSON(filmeData));

const paises = paisesData.map((paisData: PaisType) => Paises.fromJSON(paisData));



console.log('<-- Pokemons -->');
pokes.forEach((poke) => console.log(poke));

console.log('<-- Filmes -->');
filmes.forEach((filme) => console.log(filme));

console.log('<-- Países -->');
paises.forEach((pais) => console.log(pais));
