import { injectable } from "inversify";
import { DatabaseContext } from "./dbContext";

@injectable()
export abstract class BaseRepository<T> {
    context: DatabaseContext;

    constructor(context: DatabaseContext) {
        this.context = context;
    }

    public getAll(): T[] {
        return this.context.getContext().get('customers');
    }

    public getById(): T {
        return null;
    }

    public getBy(predicate: () => boolean): T[] {
        return null;
    }

    public add(model: T): T {
        return null;
    }

    public update(id: number, model: T): T {
        return null;
    }

    public delete(id: number): T {
        return null;
    }
}
