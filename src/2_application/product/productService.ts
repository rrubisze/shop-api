import { IProductService } from "./productServiceInterface";
import { Product } from "./../../3_domain/models/product";
import { injectable, inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { ProductRepository } from "./../../4_infrastructure/repositories/productRepository";
import { Utils } from "./../../3_domain/utils/utils";

@injectable()
export class ProductService implements IProductService {
    private productRepository: ProductRepository;

    constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }
    public getAll(): Product[] {
        return this.productRepository.getAll();
    }

    public getById(id: string): Product {
        return this.productRepository.getById(id);
    }
    public addProduct(product: Product): Product {
        product.id = Utils.getGuid();
        return this.productRepository.add(product);
    }
    public updateProduct(id: string, product: Product): Product {
        return this.productRepository.update(id, product);
    }
    public removeProduct(id: string): boolean {
        this.productRepository.delete(id);
        return true;
    }

}
