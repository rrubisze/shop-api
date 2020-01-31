import "reflect-metadata";
import bodyParser from "body-parser";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import "./controllers/productController";
import { ShopDependencyContainer } from "./../4_infrastructure/container/container";

const port = 8080 || process.env.PORT;

const shopContainer = new ShopDependencyContainer();
const container = shopContainer.getContainer();

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
});

const serverInstance = server.build();
serverInstance.listen(port);

// tslint:disable-next-line: no-console
console.log("Server started on port 8080 :)");
