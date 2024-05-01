import { ChangeEvent, useMemo } from "react";

import s from "./select.module.css";

interface SelectProps {
    options: SelectOption[];
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface SelectOption {
    value: string;
    title?: string;
    default?: boolean;
}

export function Select(props: SelectProps): JSX.Element {
    const defaultOption = useMemo<SelectOption | undefined>(() => props.options.find((option) => option.default === true), []);

    return (
        <select className={ s.container } onChange={ props.onChange } defaultValue={ defaultOption?.value }>
            { makeOptions() }
        </select>
    );

    function makeOptions(): JSX.Element[] {
        return props.options.map((option) => {
            return (
                <option
                    key={ option.value }
                    value={ option.value }
                >
                    { option.title ?? option.value }
                </option>
            );
        });
    }
}
