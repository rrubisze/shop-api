import { Address } from "./address";
import { Bill } from "./bill";
import { Customer } from "./customer";
import { OrderItem } from "./orderItem";
import { OrderStatus } from "./orderStatus";
import { List } from "linqts";

export class Order {

    public get sum(): number {
        return new List(this.items).Select((item) => item.product.price ).Sum();
    }

    public id: string;
    public orderDate: Date;

    public bill: Bill;
    public orderStatus: OrderStatus;
    public customer: Customer;
    public items: OrderItem[];

    public billingAddress: Address;
    public deliveryAddress: Address;

    public constructor(init?: Partial<Order>) {
        Object.assign(this, init);
    }

    public updateOrder(status: OrderStatus) { this.orderStatus = status; }
    public createBillingInformation(): Bill {

        this.billingAddress = this.customer.address;
        this.deliveryAddress = this.customer.address;

        this.updateOrder(OrderStatus.Processing);

        this.bill = new Bill({
            dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
            issueDate: new Date(),
            sum: this.sum,
        });
        return this.bill;
    }
}
