const TYPES = {
    IProductService: Symbol.for("IProductService"),
    ICustomerService: Symbol.for("ICustomerService"),
    IOrderService: Symbol.for("IOrderService"),
    ProductRepository: Symbol.for("ProductRepository"),
    CustomerRepository: Symbol.for("CustomerRepository"),
    DatabaseContext: Symbol.for("DatabaseContext"),
    OrderRepository: Symbol.for("OrderRepository")
};

export default TYPES;
