import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

import { StringInput } from "@ui-kit/components/string-input";
import { VerticalForm } from "@ui-kit/components/vertical-form";
import { IRequestFormViewModel } from "./irequest-form-view-model";
import { Select, SelectOption } from "@ui-kit/components/select";
import { ActionButton } from "@ui-kit/components/action-button";
import { HttpMethod, isMethodWithBody } from "../utils/http";

interface RequestFormProps {
    model: IRequestFormViewModel;
}

const methodSelectOptions: SelectOption[] = Object.values(HttpMethod).map((method) => {
    return {
        value: method,
        default: method === HttpMethod.Get,
    };
});

export const RequestForm = observer((props: RequestFormProps): JSX.Element => {
    const model = props.model;

    return (
        <VerticalForm
            onSubmit={ onSubmit }
            error={ model.error() ?? undefined }
        >
            <StringInput
                placeholder="URL"
                value={ model.url() }
                onChange={ onUrlChange }
            />
            <Select
                options={ methodSelectOptions }
                onChange={ onMethodChange }
            />
            {
                isMethodWithBody(model.method()) && (
                    <ReactCodeMirror
                        value={ model.body() ?? undefined }
                        onChange={ onBodyChange }
                        extensions={ [json()] }
                    />
                )
            }
            <ActionButton type="submit">
                { model.isLoading() ? "..." : "Send" }
            </ActionButton>
        </VerticalForm>
    );

    function onUrlChange(event: ChangeEvent<HTMLInputElement>): void {
        model.setUrl(event.target.value);
    }

    function onBodyChange(value: string): void {
        model.setBody(value);
    }

    function onMethodChange(event: ChangeEvent<HTMLSelectElement>): void {
        model.setMethod(event.target.value as HttpMethod);
    }

    function onSubmit(event: ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();

        model.send();
    }
});
