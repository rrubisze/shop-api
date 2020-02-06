export class Bill {
    public issueDate: Date;
    public dueDate: Date;
    public sum: number;

    public constructor(init?: Partial<Bill>) {
        Object.assign(this, init);
    }
}
