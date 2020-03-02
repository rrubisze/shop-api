import { Customer } from "./../../3_domain/models/customer";
import { Address } from "./../../3_domain/models/address";
import { OrderItem } from "./../../3_domain/models/orderItem";
import { ShoppingCart } from "./../../3_domain/models/shoppingCart";

export interface ICustomerService {
    getAll(): Customer[];
    getById(id: string): Customer;
    createCustomer(customer: Customer): Customer;
    deleteCustomer(id: string): boolean;
    updateCustomer(id: string, model: Customer): Customer;
    addAddressToCustomer(customerId: string, address: Address): boolean;
    addItemToCart(customerId: string, productId: string, quantity: number): boolean;
    removeItemFromCart(customerId: string, productId: string, quantity: number): boolean;
    purchase(customerId: string): boolean;
    updateCustomerEmail(id: string, email: string): Customer;
    emptyCart(customerId: string): Customer;
}
