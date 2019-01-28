import {Item} from "../domains/item";
import {
    ADD_ITEM_SUCCESS, FETCH_ITEM, FETCH_ITEM_FAILURE, FETCH_ITEM_SUCCESS,
    FETCH_ITEMS,
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_SUCCESS,
    IAction
} from "../actions/item.actions";

export interface ItemState {
    items: Item[],
    selectedItem: Item,
    loading: boolean,
    error: string
}
export const initialItemState: ItemState = {
    items: [],
    selectedItem: null,
    loading: false,
    error: null
};

export function ItemReducer(state: ItemState = initialItemState, action: IAction): ItemState {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.items
            };
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: action.items
            };
        case FETCH_ITEM:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedItem: action.item
            };
        case FETCH_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
