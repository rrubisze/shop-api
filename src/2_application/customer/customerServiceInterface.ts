import { Customer } from "./../../3_domain/models/customer";
import { Address } from "./../../3_domain/models/address";
import { Bill } from "./../../3_domain/models/bill";

export interface ICustomerService {
    getAll(): Customer[];
    getById(id: string): Customer[];
    createCustomer(customer: Customer): Customer;
    deleteCustomer(id: string): boolean;
    updateCustomer(id: string, model: Customer): Customer;
    addAddressToCustomer(customerId: string, address: Address): boolean;
    purchase(): boolean;
    getBill(oderId: string): Bill;
}
