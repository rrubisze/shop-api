import FileSync from "lowdb/adapters/FileSync";
import lowdb from "lowdb";
import { injectable } from "inversify";
import { Product } from "./../3_domain/models/product";
import { Customer } from "./../3_domain/models/customer";
import { Address } from "./../3_domain/models/address";
import { CustomerStatus } from "./../3_domain/models/customerStatus";
import { Person } from "./../3_domain/models/person";

@injectable()
export class DatabaseContext {
    private context: any;

    constructor() {
        this.context = lowdb(new FileSync("db.json"));
        if (!this.context.has("customers").value()
            && !this.context.has("products").value()) {
            this.context.defaults({ customers: [], products: [] }).write();
            this.seedProducts();
            this.seedCustomers();
        }
    }

    public getContext(): any {
        return this.context;
    }

    public resetDatabase(): boolean {
        return false;
    }

    private seedProducts() {
        const product1 = new Product({
            description: "Apple",
            id: "1",
            manufacturer: 1,
            price: 11.2,
        });
        const product2 = new Product({
            description: "Banana",
            id: "2",
            manufacturer: 1,
            price: 3.6,
        });
        const product3 = new Product({
            description: "Grapes",
            id: "3",
            manufacturer: 1,
            price: 2.6,
        });
        const product4 = new Product({
            description: "Raspberry",
            id: "4",
            manufacturer: 1,
            price: 15.8,
        });
        const product5 = new Product({
            description: "Strawberry",
            id: "5",
            manufacturer: 2,
            price: 18.3,
        });
        const product6 = new Product({
            description: "Strawberry",
            id: "6",
            manufacturer: 2,
            price: 18.3,
        });
        const product7 = new Product({
            description: "Orange",
            id: "7",
            manufacturer: 6,
            price: 10.5,
        });
        const product8 = new Product({
            description: "Grapefruit",
            id: "8",
            manufacturer: 6,
            price: 10.5,
        });
        const product9 = new Product({
            description: "Mango",
            id: "9",
            manufacturer: 2,
            price: 19.7,
        });
        const product10 = new Product({
            description: "Pears",
            id: "10",
            manufacturer: 6,
            price: 4.4,
        });
        const product11 = new Product({
            description: "Kiwi",
            id: "11",
            manufacturer: 2,
            price: 16.6,
        });
        const product12 = new Product({
            description: "Ananas",
            id: "12",
            manufacturer: 6,
            price: 14.7,
        });
        const product13 = new Product({
            description: "Cherry",
            id: "13",
            manufacturer: 6,
            price: 13.8,
        });
        const product14 = new Product({
            description: "Peach",
            id: "14",
            manufacturer: 6,
            price: 9.4,
        });

        const products = [product1, product2, product3, product4, product5,
                          product6, product7, product8, product9, product10,
                          product11, product12, product13, product14 ];

        this.context.get("products").push(products).write();
    }

    private seedCustomers() {
        const customer1 = new Customer({
            address: new Address({
                city: "Auckland",
                country: "New Zeland",
                phone: "44 33 548 456",
                street: "Samlet St.",
                streetNumber: "1",
                zipcode: 612,
            }),
            customerStatus: CustomerStatus.Active,
            id: "1",
            password: "1234",
            person: new Person({
                email: "emma.stone@customDomain.com",
                lastname: "Emma",
                phone: "33 55 789 123",
                surname: "Stone",
            }),
        });
        const customer2 = new Customer({
            address: new Address({
                city: "Auckland",
                country: "New Zeland",
                phone: "33 55 789 123",
                street: "Cook St.",
                streetNumber: "5",
                zipcode: 600,
            }),
            customerStatus: CustomerStatus.Active,
            id: "2",
            password: "1234",
            person: new Person({
                email: "john.doe@customDomain.com",
                lastname: "John",
                phone: "33 55 789 123",
                surname: "Doe",
            }),
        });
        const customer3 = new Customer({
            address: new Address({
                city: "Auckland",
                country: "New Zeland",
                phone: "22 44 512 689",
                street: "Nicholas St.",
                streetNumber: "55",
                zipcode: 612,
            }),
            customerStatus: CustomerStatus.Active,
            id: "3",
            password: "1234",
            person: new Person({
                email: "alex.kowalsky@customDomain.com",
                lastname: "Alex",
                phone: "88 55 998 556",
                surname: "Kowalsky",
            }),
        });
        const customer4 = new Customer({
            address: new Address({
                city: "Auckland",
                country: "New Zeland",
                phone: "99 77 235 685 ",
                street: "Hobson St.",
                streetNumber: "7",
                zipcode: 600,
            }),
            customerStatus: CustomerStatus.Active,
            id: "4",
            password: "1234",
            person: new Person({
                email: "andrew.fitzgerald@customDomain.com",
                lastname: "Andrew",
                phone: "33 55 789 123",
                surname: "Fitzgerald",
            }),
        });

        const customers = [customer1, customer2, customer3, customer4 ];

        this.context.get("customers").push([customers]).write();
    }
}
