import {combineReducers, createStore, Reducer} from 'redux'
import {ItemReducer, ItemState} from "./item.reducer";

export interface ICombinedReducers {
    item: ItemState
}

const CombinedReducers: Reducer<ICombinedReducers> = combineReducers({
    item: ItemReducer
});

export const store = createStore(CombinedReducers) ;
