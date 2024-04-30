interface ActionButtonProps {
    children?: string;
    onClick?: () => void;
}

export function ActionButton(props: ActionButtonProps): JSX.Element {
    return (
        <button onClick={ props.onClick }>
            { props.children }
        </button>
    );
}
