import s from "./app.module.css";

export function App(): JSX.Element {
    return (
        <div className={ s.block }>
            <h1 className={ s.reddish }>Hello, World!</h1>
        </div>
    );
}
