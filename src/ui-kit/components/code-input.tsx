import { ChangeEvent } from "react";

import s from "./code-input.module.css";
import classNames from "classnames";

interface CodeInputProps {
    value: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    id?: string;
}

export function CodeInput(props: CodeInputProps): JSX.Element {
    return (
        <textarea
            id={ props.id }
            placeholder={ props.placeholder }
            className={ classNames(s.wrapper, props.className) }
            value={ props.value }
            onChange={ props.onChange }
        />
    );
}
