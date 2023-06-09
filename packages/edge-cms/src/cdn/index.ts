export abstract class CdnConnector {

}

export class R2CdnConnector extends CdnConnector {
    constructor(protected cdn: R2Bucket) {
        super();
    }
}
