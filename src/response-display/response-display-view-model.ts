import { IResponseDisplayViewModel } from "./iresponse-display-view-model";

export class ResponseDisplayViewModel implements IResponseDisplayViewModel {
    private _statusCode: number;
    private _json: Promise<string>;

    public constructor(response: Response) {
        this._statusCode = response.status;
        this._json = response.text();
    }

    public statusCode(): number {
        return this._statusCode;
    }

    public async json(): Promise<string> {
        return this._json;
    }
}
