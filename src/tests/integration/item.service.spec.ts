import {Item} from "../../domains/item";
import {ItemService} from "../../domains/item.service";

test('fetchItems should return items', async () => {
    const items: Item[] = await ItemService.fetchItems();
    expect(items).toEqual(
        [
            {"description": "desc1", "id": 1548110629271, "title": "title1"},
            {"description": "desc2", "id": 1548110640086, "title": "title2"}
            ]
    );
});

test('fetchItem should return item', async () => {
    const item: Item = await ItemService.fetchItem("id");
    expect(item).toEqual(
        {"description": "desc1", "id": 1548110629271, "title": "title1"}
    );
});

test('addItem should return items', async () => {
    const items: Item[] = await ItemService.addItem("title", "description");
    expect(items).toEqual(
        [
            {"description": "desc1", "id": 1548110629271, "title": "title1"},
            {"description": "desc2", "id": 1548110640086, "title": "title2"},
            {"description": "desc3", "id": 1548110817321, "title": "title3"}
            ]
    );
});