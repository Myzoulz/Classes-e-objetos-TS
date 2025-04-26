"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes = void 0;
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
exports.Filmes = Filmes;
