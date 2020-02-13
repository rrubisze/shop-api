import { injectable, inject } from "inversify";
import { BaseRepository } from "../baseRepository";
import TYPES from "../container/TYPES";
import { DatabaseContext } from "../dbContext";
import { Order } from "./../../3_domain/models/order";

@injectable()
export class OrderRepository extends BaseRepository<Order> {

    constructor(@inject(TYPES.DatabaseContext) databaseContext: DatabaseContext) {
        super(databaseContext);
        this.tableName = "orders";
    }

}
