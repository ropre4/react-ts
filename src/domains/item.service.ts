import axios from "axios";
import {Item} from "./item";

const API = "http://localhost:3001/api";

export class ItemService {

    static async fetchItems(): Promise<Item[]> {
        const response = await axios.get(API + "/item");
        return response.data.map((item: any) => Item.FromBackend(item))
    }
    static async fetchItem(id: string): Promise<Item> {
        const response = await axios.get(API + "/item/" + id);
        return response.data ? Item.FromBackend(response.data) : null;
    }
    static async addItem(title: string, description: string): Promise<Item[]> {
        const response = await axios.post(API + "/item", {
            title,
            description
        });
        return response.data.map((item: any) => Item.FromBackend(item))
    }
}