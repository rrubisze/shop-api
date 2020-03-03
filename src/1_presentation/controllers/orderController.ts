import "reflect-metadata";
import { inject } from "inversify";
import {
  controller, httpDelete, httpGet, requestParam, httpPatch, queryParam,
} from "inversify-express-utils";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Order } from "./../../3_domain/models/order";
import { IOrderService } from "./../../2_application/order/orderServiceInterface";
import { OrderStatus } from "./../../3_domain/models/orderStatus";
import { Bill } from "./../../3_domain/models/bill";

@controller("/orders")
export class OrderController {
    private orderService: IOrderService;

  constructor(@inject(TYPES.IOrderService) orderService: IOrderService) {
      this.orderService = orderService;
  }

  @httpGet("/")
  public getAllOrders(): Order[] {
      return this.orderService.getAll();
  }

  @httpGet("/:id")
  public getOrderById(@requestParam("id") id: string): Order {
    return this.orderService.getById(id);
  }

  @httpDelete("/:id")
  public deleteOrder(@requestParam("id") id: string): void {
    this.orderService.deleteOrder(id);
  }

  @httpPatch("/:id")
  public updateOrderStatus(@requestParam("id") id: string, @queryParam("status") status: OrderStatus) {
    return this.orderService.updateOrderStatus(id, status);
  }

  @httpGet("/:id/bill")
  public getBill(@requestParam("id") id: string): Bill {
      return this.orderService.getOrderBill(id);
  }

}
