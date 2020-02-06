import { Product } from "./product";

export class OrderItem {
    public quantity: number;
    public price: number;
    public product: Product;

    public constructor(init?: Partial<OrderItem>) {
        Object.assign(this, init);
    }
}
