import { IOrderService } from "./orderServiceInterface";
import { Order } from "./../../3_domain/models/order";
import { inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { OrderRepository } from "./../../4_infrastructure/repositories/orderRepository";

export class OrderService implements IOrderService {
    private orderRepository: OrderRepository;

    constructor(@inject(TYPES.OrderRepository) orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    public getAll(): Order[] {
        return this.orderRepository.getAll();
    }

}
