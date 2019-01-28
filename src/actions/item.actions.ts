import {Dispatch} from "redux";
import {Item} from "../domains/item";
import {ItemService} from "../domains/item.service";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const FETCH_ITEM = "FETCH_ITEM";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE";

export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export interface IAction {
    type: string,
    [key: string]: any
}

function fetchItemsLoader(): IAction {
    return {
        type: FETCH_ITEMS
    }
}
function fetchItemLoader(): IAction {
    return {
        type: FETCH_ITEM
    }
}
export function fetchItems(dispatch: Dispatch<IAction>): Promise<IAction> {
    dispatch(fetchItemsLoader());
    return ItemService.fetchItems()
        .then((result: Item[])=> {
            return {
                type: FETCH_ITEMS_SUCCESS,
                items: result
            }
        })
        .catch((error: any) => {
            return {
                type: FETCH_ITEMS_FAILURE,
                error: error.message
            }
        });
}
export function fetchItem(dispatch: Dispatch<IAction>, id: string): Promise<IAction> {
    dispatch(fetchItemLoader());
    return ItemService.fetchItem(id)
        .then((result: Item)=> {
            return {
                type: FETCH_ITEM_SUCCESS,
                item: result
            }
        })
        .catch((error: any) => {
            return {
                type: FETCH_ITEM_FAILURE,
                error: error.message
            }
        });
}
export function addItem(title: string, description: string): Promise<IAction> {
    return ItemService.addItem(title, description)
        .then((result: Item[])=> {
            return {
                type: ADD_ITEM_SUCCESS,
                items: result
            }
        })
        .catch((error: any) => {
            return {
                type: ADD_ITEM_FAILURE,
                error: error.message
            }
        });
}