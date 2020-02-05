import "reflect-metadata";
import * as express from "express";
import { inject } from "inversify";
import { request,
  controller, httpDelete, httpGet, httpPost, httpPut, requestParam, httpPatch, queryParam,
} from "inversify-express-utils";
import TYPES from "./../../4_infrastructure/container/TYPES";
import { Customer } from "./../../3_domain/models/customer";
import { ICustomerService } from "./../../2_application/customer/customerServiceInterface";

@controller("/customer")
export class CustomerController {
    private customerService: ICustomerService;

  constructor(@inject(TYPES.ICustomerService) customerService: ICustomerService) {
      this.customerService = customerService;
  }

  @httpGet("/")
  public getAllCutomers(): Customer[] {
      return this.customerService.getAll();
  }

  @httpGet("/:id")
  public getCustomerById(@requestParam("id") id: string): Customer {
      return null;
  }

  @httpPost("/")
  public createCustomer(@request() req: express.Request): Customer {
      return null;
  }

  @httpPut("/:id")
  public updateCustomer(@requestParam("id") id: string, @request() req: express.Request): Customer {
      return null;
  }

  @httpDelete("/:id")
  public deleteCustomer(@requestParam("id") id: string): Customer {
      return null;
  }

  @httpPost("/address/customer/:id")
  public addAddress(@requestParam("id") id: string, @request() req: express.Request): boolean {
      return false;
  }

  @httpPost("/customer/:id/purchase")
  public purchase(@requestParam("id") id: string, @request() req: express.Request): boolean {
      return false;
  }

  @httpGet("/customer/:id/bill")
  public getBill(@requestParam("id") id: string, @request() req: express.Request): boolean {
      return false;
  }

  @httpDelete("/address/customer/:id")
  public deleteAddress(@requestParam("id") id: string, @request() req: express.Request): boolean {
      return false;
  }

  @httpPatch("/:id/email")
  public updateCustomerEmail(@queryParam("email") start: string): Customer {
      return null;
  }

  @httpPost("/:id/cart")
  public createCart(@requestParam("id") id: string, @request() req: express.Request): Customer {
      return null;
  }

  @httpPut("/:id/cart")
  public addItemToCart(@requestParam("id") id: string, @request() req: express.Request): Customer {
      return null;
  }
  @httpDelete("/:id/cart")
  public removeItemFromCart(@requestParam("id") id: string, @request() req: express.Request): Customer {
      return null;
  }

  @httpDelete("/:id/cart/empty")
  public emptyCart(@requestParam("id") id: string): Customer {
      return null;
  }
}
