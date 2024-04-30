import s from "./app.module.pcss";

export function App(): JSX.Element {
    return (
        <div className={ s.block }>
            <h1 className={ s.reddish }>Hello, World!</h1>
        </div>
    );
}
