import { injectable } from "inversify";
import { Customer } from "./../../3_domain/models/customer";
import { BaseRepository } from "../baseRepository";

@injectable()
export class CustomerRepository extends BaseRepository<Customer> {

}
