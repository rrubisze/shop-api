import { ICustomerService } from "./customerServiceInterface";
import { injectable, inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Customer } from "./../../3_domain/models/customer";
import { CustomerRepository } from "./../../4_infrastructure/repositories/customerRepository";
import { Address } from "./../../3_domain/models/address";
import { Bill } from "./../..//3_domain/models/bill";

@injectable()
export class CustomerService implements ICustomerService {
    private customerRepository: CustomerRepository;

    constructor(@inject(TYPES.CustomerRepository) customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
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
    public purchase(): boolean {
        throw new Error("Method not implemented.");
    }
    public getBill(oderId: string): Bill {
        throw new Error("Method not implemented.");
    }

}
