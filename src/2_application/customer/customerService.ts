import { ICustomerService } from "./customerServiceInterface";
import { injectable, inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Customer } from "./../../3_domain/models/customer";
import { CustomerRepository } from "./../../4_infrastructure/repositories/customerRepository";

@injectable()
export class CustomerService implements ICustomerService {
    private customerRepository: CustomerRepository;

    constructor(@inject(TYPES.CustomerRepository) customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }
    public getAll(): Customer[] {
        return this.customerRepository.getAll();
    }

}
