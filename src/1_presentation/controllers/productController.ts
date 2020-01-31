  import { Request } from "express";
  import { inject } from "inversify";
  import {
    controller, httpDelete, httpGet, httpPost, httpPut,
  } from "inversify-express-utils";
  import TYPES from "./../../4_infrastructure/container/TYPES";
  import { IProductService } from "./../../2_application/product/productServiceInterface";
  import { Product } from "./../../3_domain/models/product";

  @controller("/products")
  export class CustomerController {
      private productService: IProductService;

    constructor(@inject(TYPES.IProductService) productService: IProductService) {
        this.productService = productService;
    }

    @httpGet("/")
    public getAllProducts(): Product[] {
        return this.productService.getAll();
    }
  }

  // import express from "express";
// const productRoutes = express.Router();

// // middleware that is specific to this router
// // router.use(function timeLog(req, res, next) {
// //   console.log("Time: ", Date.now());
// //   next();
// // });
// // define the home page route
// productRoutes.get("/products", (req, res) => {
//   res.send("All products");
// });
// // define the about route
// productRoutes.get("/product/:id ", (req, res) => {
//   res.send("About birds");
// });

// productRoutes.post("/product ", (req, res) => {
//     res.send("Create product");
// });

// productRoutes.put("/product ", (req, res) => {
//     res.send("Update product");
// });

// productRoutes.delete("/product/:id ", (req, res) => {
//     res.send("Delete product");
// });

// export = productRoutes;
