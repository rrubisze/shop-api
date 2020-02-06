export class Address {
    public street: string;
    public streetNumber: string;
    public zipcode: number;
    public city: string;
    public country: string;
    public phone: string;

    public constructor(init?: Partial<Address>) {
        Object.assign(this, init);
    }
}
