import { Customer } from "./../../3_domain/models/customer";
import { Address } from "./../../3_domain/models/address";
import { Bill } from "./../../3_domain/models/bill";
import { OrderItem } from "./../../3_domain/models/orderItem";

export interface ICustomerService {
    getAll(): Customer[];
    getById(id: string): Customer;
    createCustomer(customer: Customer): Customer;
    deleteCustomer(id: string): boolean;
    updateCustomer(id: string, model: Customer): Customer;
    addAddressToCustomer(customerId: string, address: Address): boolean;
    addItemToCart(customerId: string, item: OrderItem): boolean;
    removeItemFromCart(customerId: string, item: OrderItem): boolean;
    purchase(customerId: string): boolean;
    getBill(oderId: string): Bill;
}
