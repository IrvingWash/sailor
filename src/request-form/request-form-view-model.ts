import { makeAutoObservable } from "mobx";

import { HttpMethod, appendHttp, isMethodWithBody } from "../utils/http";
import { IRequestFormViewModel } from "./irequest-form-view-model";
import { extractErrorMessage } from "../utils/error-message-extractor";

export class RequestFormViewModel implements IRequestFormViewModel {
    public _url: string = "";
    private _method: HttpMethod = HttpMethod.Get;
    private _body: string | null = null;
    private _isLoading: boolean = false;
    private _error: string | null = null;

    public constructor() {
        makeAutoObservable(this);
    }

    public url(): string {
        return this._url;
    }

    public method(): HttpMethod {
        return this._method;
    }

    public body(): string | null {
        return this._body;
    }

    public isLoading(): boolean {
        return this._isLoading;
    }

    public setUrl(url: string): void {
        this._url = url;
    }

    public setMethod(method: HttpMethod): void {
        this._method = method;
    }

    public setBody(body: string | null): void {
        this._body = body;
    }

    public error(): string | null {
        return this._error;
    }

    public async send(): Promise<Response | null> {
        this._isLoading = true;

        this._error = null;

        const requestInit: RequestInit = {
            method: this._method,
        };

        if (isMethodWithBody(this._method)) {
            requestInit.body = this._body;
        }

        try {
            if (this._url === "") {
                throw new Error("URL is not specified");
            }

            const response = await fetch(appendHttp(this._url), requestInit);

            return response;
        } catch (error) {
            this._error = extractErrorMessage(error);
        } finally {
            this._isLoading = false;

            return null;
        }
    }
}
