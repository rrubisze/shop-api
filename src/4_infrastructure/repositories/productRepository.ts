import { injectable } from "inversify";
import { Product } from "../../3_domain/models/product";
import { BaseRepository } from "../baseRepository";

@injectable()
export class ProductRepository extends BaseRepository<Product> {

}
