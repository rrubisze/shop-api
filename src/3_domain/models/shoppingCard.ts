import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./orderItem";

export class ShoppingCard {
    public id: string;
    public customer: Customer;

    public items: OrderItem[];

    public constructor(init?: Partial<ShoppingCard>) {
        Object.assign(this, init);
    }

    public update(items: OrderItem[]): boolean { return false; }
    public remove(items: OrderItem[]): boolean { return false; }
    public purchase(): Order { return new Order(); }
}
