export class Product {
    public id: string;
    public description: string;
    public price: number;
    public manufacturer: number;

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
}
