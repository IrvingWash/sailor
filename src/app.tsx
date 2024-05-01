import { RequestForm } from "./request-form/request-form";
import { RequestFormViewModel } from "./request-form/request-form-view-model";

import "./app.module.css";

const requestFormViewModel = new RequestFormViewModel();

export function App(): JSX.Element {

    return (
        <main>
            <RequestForm model={ requestFormViewModel } />
        </main>
    );
}
