"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objetos_json_1 = __importDefault(require("../objetos.json"));
class Poke {
    constructor(id, name, base_experience, height, weight, legendary, firstAppearance, abilities, stats) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
    static fromJSON(json) {
        return new Poke(json.id, json.name, json.base_experience, json.height, json.weight, json.legendary, json.firstAppearance, json.abilities, json.stats);
    }
}
class Filmes {
    constructor(adult, backdrop_path, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
    static fromJSON(json) {
        return new Filmes(json.adult, json.backdrop_path, json.id, json.original_language, json.original_title, json.overview, json.popularity, json.poster_path, json.release_date, json.title, json.video, json.vote_average, json.vote_count);
    }
}
class Paises {
    constructor(name, independent, unMember, capital, region, subregion, lenguages, latlng, borders, area, population, timezones, flags) {
        this.name = name;
        this.independent = independent;
        this.unMember = unMember;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.lenguages = lenguages;
        this.latlng = latlng;
        this.borders = borders;
        this.area = area;
        this.population = population;
        this.timezones = timezones;
        this.flags = flags;
    }
    static fromJSON(json) {
        return new Paises(json.name, json.independent, json.unMember, json.capital, json.region, json.subregion, json.lenguages, json.latlng, json.borders, json.area, json.population, json.timezones, json.flags);
    }
}
const pokes = objetos_json_1.default.pokes.map((pokeData) => Poke.fromJSON(pokeData));
console.log(pokes);
const filmes = objetos_json_1.default.filmes.map((filmeData) => Filmes.fromJSON(filmeData));
console.log(filmes);
const paises = objetos_json_1.default.paises.map((paisData) => Paises.fromJSON(paisData));
console.log(paises);
