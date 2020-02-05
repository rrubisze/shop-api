import { injectable, inject } from "inversify";
import { Customer } from "./../../3_domain/models/customer";
import { BaseRepository } from "../baseRepository";
import TYPES from "../container/TYPES";
import { DatabaseContext } from "../dbContext";

@injectable()
export class CustomerRepository extends BaseRepository<Customer> {

    /**
     *
     */
    constructor(@inject(TYPES.DatabaseContext) databaseContext: DatabaseContext) {
        super(databaseContext);
    }
}
