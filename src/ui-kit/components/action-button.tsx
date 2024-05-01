interface ActionButtonProps {
    className?: string;
    children?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
}

export function ActionButton(props: ActionButtonProps): JSX.Element {
    return (
        <button
            className={ props.className }
            onClick={ props.onClick }
            type={ props.type }
        >
            { props.children }
        </button>
    );
}
