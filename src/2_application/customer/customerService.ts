import { ICustomerService } from "./customerServiceInterface";
import { injectable, inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Customer } from "./../../3_domain/models/customer";
import { CustomerRepository } from "./../../4_infrastructure/repositories/customerRepository";
import { Address } from "./../../3_domain/models/address";
import { OrderRepository } from "./../../4_infrastructure/repositories/orderRepository";
import { OrderItem } from "./../../3_domain/models/orderItem";
import { ShoppingCart } from "./../../3_domain/models/shoppingCart";
import { Utils } from "./../../3_domain/utils/utils";

@injectable()
export class CustomerService implements ICustomerService {

    private customerRepository: CustomerRepository;
    private orderRepository: OrderRepository;

    constructor(@inject(TYPES.CustomerRepository) customerRepository: CustomerRepository,
                @inject(TYPES.OrderRepository) orderRepository: OrderRepository ) {
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }
    public getAll(): Customer[] {
        return this.customerRepository.getAll();
    }

    public getById(id: string): Customer {
        return this.customerRepository.getById(id);
    }
    public createCustomer(customer: Customer): Customer {
        return this.customerRepository.add(customer);
    }
    public deleteCustomer(id: string): boolean {
        this.customerRepository.delete(id);
        return true;
    }
    public updateCustomer(id: string, model: Customer): Customer {
        return this.customerRepository.update(id, model);
    }
    public addAddressToCustomer(customerId: string, address: Address): boolean {
        const customer = this.customerRepository.getById(customerId);
        customer.address = address;

        this.customerRepository.update(customerId, customer);
        return true;
    }

    public purchase(customerId: string): boolean {
        const customer = this.customerRepository.getById(customerId);

        customer.purchase();
        const order = customer.shoppingCart.purchase();
        order.createBillingInformation();

        this.orderRepository.add(order);

        return true;
    }
    public addItemToCart(customerId: string, item: OrderItem): boolean {
        const customer = this.customerRepository.getById(customerId);

        if (customer.shoppingCart === null) {
            customer.shoppingCart = new ShoppingCart({
                customer,
                id: Utils.getGuid(),
                items: [item],
            });
            return true;
        } else {
            customer.shoppingCart.items.push(item);
        }

        this.customerRepository.update(customerId, customer);

        return true;
    }
    public removeItemFromCart(customerId: string, item: OrderItem): boolean {
        const customer = this.customerRepository.getById(customerId);

        if (customer.shoppingCart === null) {
            throw new Error("No items in shopping cart");
        } else {
            customer.shoppingCart.items = customer.shoppingCart.items.filter((x) => x === item);
        }

        this.customerRepository.update(customerId, customer);

        return true;
    }

    public updateCustomerEmail(id: string, email: string): Customer {
        const customer = this.customerRepository.getById(id);
        if (customer === null) {
            throw Error("Customer not found. Param: id: " + id);
        }
        customer.changeEmail(email);

        this.customerRepository.update(id, customer);

        return customer;
    }

    public emptyCart(customerId: string): Customer {
        const customer = this.customerRepository.getById(customerId);

        if (customer === null) {
            throw Error("Customer not found. Param: id: " + customerId);
        }

        customer.emptyCart();
        this.customerRepository.update(customerId, customer);
        return customer;
    }
}
