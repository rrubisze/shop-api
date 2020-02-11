const TYPES = {
    IProductService: Symbol.for("IProductService"),
    ICustomerService: Symbol.for("CustomerService"),
    ProductRepository: Symbol.for("ProductRepository"),
    CustomerRepository: Symbol.for("CustomerRepository"),
    DatabaseContext: Symbol.for("DatabaseContext"),
    OrderRepository: Symbol.for("OrderRepository")
};

export default TYPES;
