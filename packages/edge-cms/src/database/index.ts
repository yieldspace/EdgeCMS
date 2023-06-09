import type {Entry} from "../entry";

export abstract class DatabaseConnector {

}

export class D1DatabaseConnector extends DatabaseConnector {
    constructor(protected db: D1Database) {
        super();
    }
}

export class D1DatabaseMigrator {
    constructor(private entries: Entry[]) {
    }
}