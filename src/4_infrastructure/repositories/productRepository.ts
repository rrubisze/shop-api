import { injectable, inject } from "inversify";
import { Product } from "../../3_domain/models/product";
import { BaseRepository } from "../baseRepository";
import TYPES from "../container/TYPES";
import { DatabaseContext } from "../dbContext";

@injectable()
export class ProductRepository extends BaseRepository<Product> {

    constructor(@inject(TYPES.DatabaseContext) databaseContext: DatabaseContext) {
        super(databaseContext);
    }
}
