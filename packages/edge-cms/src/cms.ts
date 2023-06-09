import type {DatabaseConnector} from "./database";
import type {CdnConnector} from "./cdn";

export type EdgeCMSConfig = {
    database: DatabaseConnector
    cdn: CdnConnector
}

export class EdgeCMS {
    constructor(protected config: EdgeCMSConfig) {
    }
}
