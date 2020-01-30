import { Address } from "./address";
import { Bill } from "./bill";
import { Customer } from "./customer";
import { OrderItem } from "./orderItem";
import { OrderStatus } from "./orderStatus";

export class Order {
    public id: string;
    public orderDate: Date;
    public sum: number;

    public bill: Bill;
    public orderStatus: OrderStatus;
    public customer: Customer;
    public items: OrderItem[];

    public billingAddress: Address;
    public deliveryAddress: Address;
}
