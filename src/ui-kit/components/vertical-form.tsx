import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

import s from "./vertical-form.module.css";
import classNames from "classnames";

interface VerticalFormProps {
    onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
    className?: string;
    children?: ReactNode;
    disableEnterSubmit?: boolean;
    error?: string;
}

export function VerticalForm(props: VerticalFormProps): JSX.Element {
    const {
        onSubmit,
        className,
        children,
        disableEnterSubmit = true,
        error,
    } = props;

    return (
        <form
            className={ classNames(s.container, className) }
            onSubmit={ onSubmit }
            onKeyDown={ disableEnterSubmit ? enterSubmitPreventer : undefined }
        >
            { children }
            <div className={ s.error }>{ error }</div>
        </form>
    );

    function enterSubmitPreventer(event: KeyboardEvent<HTMLFormElement>): void {
        if (event.key === "enter") {
            return;
        }
    }
}
