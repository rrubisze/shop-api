import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./orderItem";
import { Utils } from "../utils/utils";
import { OrderStatus } from "./orderStatus";

export class ShoppingCart {
    public id: string;
    public customer: Customer;

    public items: OrderItem[];

    public constructor(init?: Partial<ShoppingCart>) {
        Object.assign(this, init);
    }

    public update(items: OrderItem[]): boolean { this.items.concat(items); return true; }
    public remove(items: OrderItem[]): boolean { this.items.filter((x) => !items.includes(x)); return true; }
    public purchase(): Order {
        const order = new Order({
            customer: this.customer,
            deliveryAddress: this.customer.address,
            id: Utils.getGuid(),
            items: this.items,
            orderDate: new Date(),
            orderStatus: OrderStatus.New,
        });
        order.createBillingInformation();

        return order;
    }
}
