import { injectable } from "inversify";
import { DatabaseContext } from "./dbContext";
import { find, filter, size } from "lodash";

@injectable()
export abstract class BaseRepository<T> {
    protected tableName: string;
    private databaseContext: DatabaseContext;

    constructor(databaseContext: DatabaseContext) {
        this.databaseContext = databaseContext;
    }

    public getAll(): T[] {
        return this.getCurrentContext();
    }

    public getById(id: string): T {
        /// TODO: Fix searching
        const a =  this.getCurrentContext().find({id})
        .value();
        return a;
    }

    public getBy(predicate: (arg: any) => boolean): T[] {
        return this.getCurrentContext().filter(predicate).value();
    }

    public add(model: T): T {
        this.getCurrentContext().push(model).write();
        return this.getCurrentContext().find(model).value();
    }

    public update(id: string, model: T): T {
        this.getCurrentContext()
            .find({id})
            .assign(model)
            .write();
        return this.getCurrentContext().find({id}).value();
    }

    public delete(id: string): T {
        return this.getCurrentContext()
            .remove({id})
            .write();
    }

    private getCurrentContext() {
        return this.databaseContext.getContext().get(this.tableName);
    }
}
