import { makeObservable } from "mobx";

class TableService {
    columns: any;
    constructor() {
        makeObservable(this, {


        })
    }


}

export default new TableService();               