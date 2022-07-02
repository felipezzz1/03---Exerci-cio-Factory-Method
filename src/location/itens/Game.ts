import Item from "./interface/Item";

export default class Game implements Item{
    private _description : string;

    constructor(description : string){
        this._description = description;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    start(): void {
        console.log("Jogo : voce esta alugando um jogo");
    }
    getDescription(): void {
        console.log("Jogo : voce alugou o jogo: ");
    }

}