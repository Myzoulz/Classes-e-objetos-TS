"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paises = void 0;
class Paises {
    constructor(name, independent, unMember, capital, region, subregion, languages, latlng, borders, area, population, timezones, flags) {
        this.name = name;
        this.independent = independent;
        this.unMember = unMember;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.latlng = latlng;
        this.borders = borders;
        this.area = area;
        this.population = population;
        this.timezones = timezones;
        this.flags = flags;
    }
    static fromJSON(json) {
        return new Paises(json.name, json.independent, json.unMember, json.capital, json.region, json.subregion, json.languages, json.latlng, json.borders, json.area, json.population, json.timezones, json.flags);
    }
}
exports.Paises = Paises;
