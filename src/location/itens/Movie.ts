import Item from "./interface/Item";

export default class Movie implements Item{
    private _description : string;

    constructor(description : string){
        this._description = description;
    }

    get description() : string{
        return this._description
    }

    set description(description : string){
        this._description = description;
    }

    start(): void {
        console.log("Filme: voce esta alugando um filme");
    }
    getDescription(): void {
        console.log("Filme : voce alugou o filme: " + this._description);
    }
    
}