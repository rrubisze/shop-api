  import * as express from "express";
  import { inject } from "inversify";
  import { request,
    controller, httpDelete, httpGet, httpPost, httpPut, requestParam,
  } from "inversify-express-utils";
  import TYPES from "./../../4_infrastructure/container/TYPES";
  import { IProductService } from "./../../2_application/product/productServiceInterface";
  import { Product } from "./../../3_domain/models/product";

  @controller("/products")
  export class ProductController {
      private productService: IProductService;

    constructor(@inject(TYPES.IProductService) productService: IProductService) {
        this.productService = productService;
    }

    @httpGet("/")
    public getAllProducts(): Product[] {
        return this.productService.getAll();
    }

    @httpGet("/:id")
    public getProduct(): Product {
        return null;
    }

    @httpPost("/")
    public addProduct(@request() req: express.Request): Product {
        return null;
    }

    @httpPut("/:id")
    public updateProduct(@request() req: express.Request): Product {
        return null;
    }

    @httpDelete("/:id")
    public deleteProduct(@requestParam("id") id: string): boolean {
        return false;
    }
  }
  