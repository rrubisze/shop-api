import { CustomerStatus } from "./customerStatus";
import { Address } from "./address";

export class Customer {
    public id: number;
    public password: number;

    public customerStatus: CustomerStatus;
    public address: Address;
}
