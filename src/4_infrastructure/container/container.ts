import { Container } from "inversify";
import { ProductService } from "../../2_application/product/productService";
import TYPES from "./TYPES";
import { IProductService } from "../../2_application/product/productServiceInterface";
import { ProductRepository } from "../repositories/productRepository";
import { CustomerRepository } from "../repositories/customerRepository";

export class ShopDependencyContainer {

    public getContainer(): Container {

        const container = new Container();
        container.bind<IProductService>(TYPES.IProductService).to(ProductService);
        container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository);
        container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);

        return container;
    }

}
