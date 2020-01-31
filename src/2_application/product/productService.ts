import { IProductService } from "./productServiceInterface";
import { Product } from "./../../3_domain/models/product";
import { injectable, inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { ProductRepository } from "./../../4_infrastructure/repositories/productRepository";

@injectable()
export class ProductService implements IProductService {
    private productRepository: ProductRepository;

    constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }
    public getAll(): Product[] {
        return this.productRepository.getAll();
    }

}
