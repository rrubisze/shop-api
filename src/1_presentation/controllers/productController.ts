  import "reflect-metadata";
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
    public getProduct(@requestParam("id") id: string): Product {
        const a = this.productService.getById(id);
        return a;
    }

    @httpPost("/")
    public addProduct(@request() req: express.Request): Product {
        return this.productService.addProduct(req.body);
    }

    @httpPut("/:id")
    public updateProduct(@requestParam("id") id: string, @request() req: express.Request): Product {
        return this.productService.updateProduct(req.body.id, req.body);
    }

    @httpDelete("/:id")
    public deleteProduct(@requestParam("id") id: string): boolean {
        return this.productService.removeProduct(id);
    }
  }
