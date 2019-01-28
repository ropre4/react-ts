import {
    ADD_ITEM_SUCCESS,
    FETCH_ITEM, FETCH_ITEM_FAILURE, FETCH_ITEM_SUCCESS,
    FETCH_ITEMS,
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_SUCCESS
} from "../../actions/item.actions";
import {initialItemState, ItemReducer, ItemState} from "../../reducers/item.reducer";
import {buildItemFromBackend} from "../domains/item.spec";
import {Item} from "../../domains/item";

const ERROR_MESSAGE = "some error";

test("ItemReducer should set loading when FETCH_ITEMS", () => {
    const result: ItemState = ItemReducer(initialItemState, {type: FETCH_ITEMS});
    expect(result.loading).toBeTruthy();
});
test("ItemReducer should set items when FETCH_ITEMS_SUCCESS", () => {
    const result: ItemState = ItemReducer(initialItemState, {
        type: FETCH_ITEMS_SUCCESS,
        items: [buildItemFromBackend]
    });
    expect(result.loading).toBeFalsy();
    expect(result.items.length).toEqual(1);
});
test("ItemReducer should set error when FETCH_ITEMS_FAILURE", () => {
    const result: ItemState = ItemReducer(initialItemState, {
        type: FETCH_ITEMS_FAILURE,
        error: ERROR_MESSAGE
    });
    expect(result.loading).toBeFalsy();
    expect(result.error).toEqual(ERROR_MESSAGE);
});
test("ItemReducer should refresh items when ADD_ITEM_SUCCESS", () => {
    const result: ItemState = ItemReducer(initialItemState, {
        type: ADD_ITEM_SUCCESS,
        items: [buildItemFromBackend, buildItemFromBackend]
    });
    expect(result.items.length).toEqual(2);
});
test("ItemReducer should set loading when FETCH_ITEM", () => {
    const result: ItemState = ItemReducer(initialItemState, {
        type: FETCH_ITEM
    });
    expect(result.loading).toBeTruthy();
});
test("ItemReducer should set selectedItem when FETCH_ITEM_SUCCESS", () => {
    const item: Item = buildItemFromBackend;
    const result: ItemState = ItemReducer(initialItemState, {
        type: FETCH_ITEM_SUCCESS,
        item: item
    });
    expect(result.loading).toBeFalsy();
    expect(result.selectedItem).toEqual(item);
});
test("ItemReducer should set error when FETCH_ITEM_FAILURE", () => {
    const result: ItemState = ItemReducer(initialItemState, {
        type: FETCH_ITEM_FAILURE,
        error: ERROR_MESSAGE
    });
    expect(result.loading).toBeFalsy();
    expect(result.error).toEqual(ERROR_MESSAGE);
});