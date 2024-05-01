import { useEffect, useState } from "react";
import { json } from "@codemirror/lang-json";
import ReactCodeMirror from "@uiw/react-codemirror";

import { IResponseDisplayViewModel } from "./iresponse-display-view-model";

import s from "./response-dsiplay.module.css";

interface ResponseDisplayProps {
    model: IResponseDisplayViewModel;
}

export const ResponseDisplay = (props: ResponseDisplayProps): JSX.Element => {
    const model = props.model;

    const [jsonText, setJson] = useState("");

    useEffect(() => { awaitJson(); });

    return (
        <div className={ s.container }>
            <p
                className={
                    model.statusCode() > 400
                        ? s["status-bad"]
                        : s["status-good"]
                }
            >
                Status Code: { model.statusCode() }
            </p>
            <ReactCodeMirror
                editable={ false }
                value={ jsonText }
                extensions={ [json()] }
            />
        </div>
    );

    async function awaitJson(): Promise<void> {
        const text = await model.json();

        setJson(text);
    }
};
