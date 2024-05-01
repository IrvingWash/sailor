import { RequestForm } from "./request-form/request-form";
import { RequestFormViewModel } from "./request-form/request-form-view-model";
import { ResponseDisplay } from "./response-display/response-display";
import { ResponseDisplayViewModel } from "./response-display/response-display-view-model";

import s from "./app.module.css";

const requestFormViewModel = new RequestFormViewModel();
const responseDisplayViewModel = new ResponseDisplayViewModel();

export function App(): JSX.Element {

    return (
        <main className={ s.app }>
            <RequestForm model={ requestFormViewModel } />
            <ResponseDisplay model={ responseDisplayViewModel } />
        </main>
    );
}
