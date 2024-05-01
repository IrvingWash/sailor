import ReactCodeMirror from "@uiw/react-codemirror";
import { IResponseDisplayViewModel } from "./iresponse-display-view-model";

import s from "./response-dsiplay.module.css";
import { observer } from "mobx-react-lite";

interface ResponseDisplayProps {
    model: IResponseDisplayViewModel;
}

export const ResponseDisplay = observer((props: ResponseDisplayProps): JSX.Element => {
    const model = props.model;

    return (
        <div className={ s.container }>
            <p
                className={ model.statusCode() > 400 ? s["status-bad"] : s["status-good"] }
            >
                Status Code: { model.statusCode() }
            </p>
            <ReactCodeMirror
                editable={ false }
                value={ model.json() }
            />
        </div>
    );
});
