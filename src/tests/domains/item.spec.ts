import {Item} from "../../domains/item";

const ID = "some_id";
const TITLE = "some_title";
const DESCRIPTION = "some_description";

const FROM_BACKEND = {
    id: ID,
    title: TITLE,
    description: DESCRIPTION
};

export const buildItemFromBackend = Item.FromBackend(FROM_BACKEND);

test('Item constructor should build entity', () => {
    const result = new Item(ID, TITLE, DESCRIPTION);
    expect(result).toEqual({
        "description": "some_description",
        "id": "some_id",
        "title": "some_title"
    }
    );
});
test('Item FromBackend should return Item', () => {
    expect(buildItemFromBackend).toBeInstanceOf(Item);
});
