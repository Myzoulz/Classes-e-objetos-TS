"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poke = void 0;
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
exports.Poke = Poke;
