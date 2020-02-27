import { IOrderService } from "./orderServiceInterface";
import { Order } from "./../../3_domain/models/order";
import { inject } from "inversify";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { OrderRepository } from "./../../4_infrastructure/repositories/orderRepository";
import { OrderStatus } from "./../../3_domain/models/orderStatus";
import { Bill } from "./../../3_domain/models/bill";

export class OrderService implements IOrderService {

    private orderRepository: OrderRepository;

    constructor(@inject(TYPES.OrderRepository) orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    public getAll(): Order[] {
        return this.orderRepository.getAll();
    }

    public getById(orderId: string): Order {
        return this.orderRepository.getById(orderId);
    }
    public deleteOrder(orderId: string): void {
        this.orderRepository.delete(orderId);
    }

    public updateOrderStatus(orderId: string, orderStatus: OrderStatus): Order {
        const order = this.orderRepository.getById(orderId);
        order.updateOrder(orderStatus);
        this.orderRepository.update(orderId, order);
        return order;
    }
    public getOrderBill(orderId: string): Bill {
        const order = this.orderRepository.getById(orderId);
        return order === null ? null : order.bill;
    }
}
