export class Person {
    public surname: string;
    public lastname: string;
    public email: string;
    public phone: string;

    public constructor(init?: Partial<Person>) {
        Object.assign(this, init);
    }
}
