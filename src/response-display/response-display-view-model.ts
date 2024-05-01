import { makeAutoObservable } from "mobx";

import { IResponseDisplayViewModel } from "./iresponse-display-view-model";

export class ResponseDisplayViewModel implements IResponseDisplayViewModel {
    private _statusCode: number = 200;
    private _json: string = "";

    public constructor() {
        makeAutoObservable(this);
    }

    public statusCode(): number {
        return this._statusCode;
    }

    public json(): string {
        return this._json;
    }
}
