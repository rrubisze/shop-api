import { Address } from "./address";
import { CustomerStatus } from "./customerStatus";
import { OrderItem } from "./orderItem";
import { Person } from "./person";
import { ShoppingCart } from "./shoppingCart";
import { Order } from "./order";

export class Customer {
    public id: string;
    public password: string;

    public customerStatus: CustomerStatus;
    public address: Address;

    public person: Person;

    public shoppingCart: ShoppingCart;
    public orders: Order[];

    public constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }

    public addAddress(address: Address): Customer { this.address = address; return this; }
    public deleteAddress(): Customer { this.address = null; return this; }
    public changeEmail(email: string): Customer { this.person.email = email; return this; }
    public changePassword(password: string): Customer { this.password = password; return this; }
    public emptyCart() { this.shoppingCart.items = []; }
    public updateCart(items: OrderItem[]): ShoppingCart {this.shoppingCart.items = items; return this.shoppingCart; }
    public purchase(orderId: string) { return; }
    public updateStatus(status: CustomerStatus): Customer { this.customerStatus = status; return this; }
}
