import { Address } from "./address";
import { CustomerStatus } from "./customerStatus";
import { OrderItem } from "./orderItem";
import { Person } from "./person";

export class Customer {
    public id: string;
    public password: string;

    public customerStatus: CustomerStatus;
    public address: Address;

    public person: Person;

    public constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }

    public addAddress(address: Address): boolean { return false; }
    public deleteAddress(address: Address): boolean { return false; }
    public changeEmail(email: string): boolean { return false; }
    public changePassword(password: string): boolean { return false; }
    public emptyCart() { return; }
    public updateCart(items: OrderItem[]): boolean {return false; }
    public purchase() { return; }
    public updateStatus(status: CustomerStatus) { return; }
}
