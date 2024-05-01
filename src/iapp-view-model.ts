import { IRequestFormViewModel } from "./request-form/irequest-form-view-model";
import { IResponseDisplayViewModel } from "./response-display/iresponse-display-view-model";

export interface IAppViewModel {
    requestFormViewModel(): IRequestFormViewModel;
    responseDisplayViewModel(): IResponseDisplayViewModel | null;
}
