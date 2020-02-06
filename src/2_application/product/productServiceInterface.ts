import { Product } from "./../../3_domain/models/product";

export interface IProductService {
    getAll(): Product[];
    getById(id: string): Product;
    addProduct(product: Product): Product;
    updateProduct(id: string, product: Product): Product;
    removeProduct(id: string): boolean;

}
