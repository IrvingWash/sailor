import { makeAutoObservable } from "mobx";

import { IRequestFormViewModel } from "./request-form/irequest-form-view-model";
import { RequestFormViewModel } from "./request-form/request-form-view-model";
import { IResponseDisplayViewModel } from "./response-display/iresponse-display-view-model";
import { ResponseDisplayViewModel } from "./response-display/response-display-view-model";

export class AppViewModel {
    private readonly _requestFormViewModel: IRequestFormViewModel;
    private _responseDisplayViewModel: IResponseDisplayViewModel | null = null;

    public constructor() {
        makeAutoObservable(this);

        this._requestFormViewModel = new RequestFormViewModel(this._onRequest);
    }

    public requestFormViewModel(): IRequestFormViewModel {
        return this._requestFormViewModel;
    }

    public responseDisplayViewModel(): IResponseDisplayViewModel | null {
        return this._responseDisplayViewModel;
    }

    private _onRequest = (response: Response | null): void => {
        if (response === null) {
            this._responseDisplayViewModel = null;

            return;
        }

        this._responseDisplayViewModel = new ResponseDisplayViewModel(response);
    };
}
