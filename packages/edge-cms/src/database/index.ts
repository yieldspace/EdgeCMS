export abstract class DatabaseConnector {

}

export class D1DatabaseConnector extends DatabaseConnector {
    constructor(protected db: D1Database) {
        super();
    }
}
