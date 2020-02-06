import { Container } from "inversify";
import { ProductService } from "../../2_application/product/productService";
import TYPES from "./TYPES";
import { IProductService } from "../../2_application/product/productServiceInterface";
import { ProductRepository } from "../repositories/productRepository";
import { CustomerRepository } from "../repositories/customerRepository";
import { CustomerService } from "../../2_application/customer/customerService";
import { ICustomerService } from "../../2_application/customer/customerServiceInterface";
import { DatabaseContext } from "../dbContext";

export class ShopDependencyContainer {

    public getContainer(): Container {

        const container = new Container();
        container.bind<IProductService>(TYPES.IProductService).to(ProductService);
        container.bind<ICustomerService>(TYPES.ICustomerService).to(CustomerService);
        container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository);
        container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);
        container.bind<DatabaseContext>(TYPES.DatabaseContext).to(DatabaseContext);

        return container;
    }

}