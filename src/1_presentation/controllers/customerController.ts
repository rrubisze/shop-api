import * as express from "express";
import { inject } from "inversify";
import { request,
  controller, httpDelete, httpGet, httpPost, httpPut, requestParam,
} from "inversify-express-utils";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Customer } from "./../../3_domain/models/customer";
import { ICustomerService } from "./../../2_application/customer/customerServiceInterface";

@controller("/customers")
export class CustomerController {
    private customerService: ICustomerService;

  constructor(@inject(TYPES.ICustomerService) customerService: ICustomerService) {
      this.customerService = customerService;
  }

  @httpGet("/")
  public getAllProducts(): Customer[] {
      return this.customerService.getAll();
  }
}
