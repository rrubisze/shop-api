import FileSync from "lowdb/adapters/FileSync";
import lowdb from "lowdb";
import { injectable } from "inversify";

@injectable()
export class DatabaseContext {
    private context: any;

    constructor() {
        this.context = lowdb(new FileSync("db.json"));
        this.context.defaults({ customers: [{name: "Asdasdas"}], products: [] }).write();
    }

    public getContext(): any {
        return this.context;
    }

    public resetDatabase(): boolean {
        return false;
    }
}
