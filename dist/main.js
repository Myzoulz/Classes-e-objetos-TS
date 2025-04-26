"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classPokes_1 = require("./classes/classPokes");
const classFilmes_1 = require("./classes/classFilmes");
const classPaises_1 = require("./classes/classPaises");
const pokes_json_1 = __importDefault(require("./data/pokes.json"));
const filmes_json_1 = __importDefault(require("./data/filmes.json"));
const paises_json_1 = __importDefault(require("./data/paises.json"));
const pokes = pokes_json_1.default.map((pokeData) => classPokes_1.Poke.fromJSON(pokeData));
pokes.forEach((poke) => {
    console.log('Poke:', poke);
});
const filmes = filmes_json_1.default.map((filmeData) => classFilmes_1.Filmes.fromJSON(filmeData));
filmes.forEach((filme) => {
    console.log('Filme:', filme);
});
const paises = paises_json_1.default.map((paisData) => classPaises_1.Paises.fromJSON(paisData));
paises.forEach((pais) => {
    console.log('País:', pais);
});
