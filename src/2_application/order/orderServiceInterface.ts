import { Order } from "./../../3_domain/models/order";
import { OrderStatus } from "./../../3_domain/models/orderStatus";
import { Bill } from "./../../3_domain/models/bill";

export interface IOrderService {
    getAll(): Order[];
    getById(orderId: string): Order;
    updateOrderStatus(orderId: string, orderStatus: OrderStatus): Order;
    deleteOrder(orderId: string): void;
    getOrderBill(orderId: string): Bill;
}
