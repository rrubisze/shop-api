import { Customer } from "./../../3_domain/models/customer";

export interface ICustomerService {
    getAll(): Customer[];
}
