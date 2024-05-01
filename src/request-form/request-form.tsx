import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";

import { StringInput } from "@ui-kit/components/string-input";
import { VerticalForm } from "@ui-kit/components/vertical-form";
import { IRequestFormViewModel } from "./irequest-form-view-model";
import { CodeInput } from "@ui-kit/components/code-input";
import { Select, SelectOption } from "@ui-kit/components/select";

import { HttpMethod, isMethodWithBody } from "../utils/http";

import s from "./request-form.module.css";
import { ActionButton } from "@ui-kit/components/action-button";

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
            className={ s.container }
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
                    <CodeInput
                        value={ model.body() ?? "" }
                        onChange={ onBodyChange }
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

    function onBodyChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        model.setBody(event.target.value);
    }

    function onMethodChange(event: ChangeEvent<HTMLSelectElement>): void {
        model.setMethod(event.target.value as HttpMethod);
    }

    function onSubmit(event: ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();

        model.send();
    }
});
