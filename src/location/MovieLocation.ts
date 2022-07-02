import Item from "./itens/interface/Item";
import Movie from "./itens/Movie";
import { Location } from "./Location"

export default class MovieLocation extends Location{
    protected createItem() : Item{
        return new Movie("");
    }
}