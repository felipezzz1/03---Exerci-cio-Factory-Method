import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";
import { Location } from "./location/Location"
import Game from "./location/itens/Game";
import Movie from "./location/itens/Movie";


declare var process;

let location : Location;

let location1 : Game = new Game("CSGO");
let location2 : Movie = new Movie("It a coisa");


if(process.argv.includes("jogo") || process.argv.includes("game")){
    location1.start();
    location1.description = "ei";
    location1.getDescription();
    console.log(location1);
    location = new GameLocation();
}else if(process.argv.includes("filme") || process.argv.includes("movie")){
    location2.start();
    location2.description = "iii";
    location2.getDescription();
    console.log(location2);
    location = new MovieLocation();
}else{
    console.error("Selecione um tipo de item!!!");
}

if(location!){
    location.startItem();
}