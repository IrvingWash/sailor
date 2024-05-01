import { useMemo } from "react";

import { RequestForm } from "./request-form/request-form";
import { ResponseDisplay } from "./response-display/response-display";
import { IAppViewModel } from "./iapp-view-model";

import s from "./app.module.css";
import { observer } from "mobx-react-lite";

interface AppProps {
    model: IAppViewModel;
}

export const App = observer((props: AppProps): JSX.Element => {
    const requestFormViewModel = useMemo(() => props.model.requestFormViewModel(), []);
    const responseDisplayViewModel = props.model.responseDisplayViewModel();

    return (
        <main className={ s.app }>
            <RequestForm model={ requestFormViewModel } />
            { responseDisplayViewModel !== null && (
                <ResponseDisplay model={ responseDisplayViewModel } />
            ) }
        </main>
    );
});
