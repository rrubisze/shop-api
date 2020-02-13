import "reflect-metadata";
import * as express from "express";
import { inject } from "inversify";
import { request,
  controller, httpDelete, httpGet, httpPost, httpPut, requestParam, httpPatch, queryParam,
} from "inversify-express-utils";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Order } from "./../../3_domain/models/order";
import { IOrderService } from "./../../2_application/order/orderServiceInterface";

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
}
