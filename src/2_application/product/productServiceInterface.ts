import { Product } from "./../../3_domain/models/product";

export interface IProductService {
    getAll(): Product[];
}
