import { Order } from "./../../3_domain/models/order";

export interface IOrderService {
    getAll(): Order[];
}
