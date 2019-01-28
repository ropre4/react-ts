
export class Item {

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string
    ) {}

    static FromBackend(data: any) {
        return new Item(
            data.id,
            data.title,
            data.description
        )
    }

}