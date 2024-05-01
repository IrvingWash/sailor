import { ChangeEvent } from "react";

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
            className={ props.className }
            id={ props.id }
            placeholder={ props.placeholder }
            type="string"
            value={ props.value }
            onChange={ props.onChange }
        />
    );
}
