import { injectable } from "inversify";

@injectable()
export abstract class BaseRepository<T> {
    public getAll(): T[] {
        return null;
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
