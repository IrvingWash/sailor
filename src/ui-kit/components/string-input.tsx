import { ChangeEvent } from "react";
import classNames from "classnames";

import s from "./string-input.module.css";

interface StringInputProps {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
    placeholder?: string;
}

export function StringInput(props: StringInputProps): JSX.Element {
    return (
        <input
            className={ classNames(s.container, props.className) }
            id={ props.id }
            placeholder={ props.placeholder }
            type="string"
            value={ props.value }
            onChange={ props.onChange }
        />
    );
}
