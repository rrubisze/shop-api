import { Container } from "inversify";
import { ProductService } from "../../2_application/product/productService";
import TYPES from "./TYPES";
import { IProductService } from "../../2_application/product/productServiceInterface";
import { ProductRepository } from "../repositories/productRepository";
import { CustomerRepository } from "../repositories/customerRepository";
import { CustomerService } from "../../2_application/customer/customerService";
import { ICustomerService } from "../../2_application/customer/customerServiceInterface";
import { DatabaseContext } from "../dbContext";
import { OrderRepository } from "../repositories/orderRepository";
import { OrderService } from "../../2_application/order/orderService";
import { IOrderService } from "../../2_application/order/orderServiceInterface";
export class ShopDependencyContainer {

    public getContainer(): Container {

        const container = new Container();
        container.bind<IProductService>(TYPES.IProductService).to(ProductService);
        container.bind<ICustomerService>(TYPES.ICustomerService).to(CustomerService);
        container.bind<IOrderService>(TYPES.IOrderService).to(OrderService);
        container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepository);
        container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepository);
        container.bind<DatabaseContext>(TYPES.DatabaseContext).to(DatabaseContext);
        container.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepository);

        return container;
    }

}
