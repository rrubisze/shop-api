import { Customer } from "./customer";
import { OrderItem } from "./orderItem";

export class ShoppingCard {
    public id: string;
    public customer: Customer;

    public items: OrderItem[];
}
