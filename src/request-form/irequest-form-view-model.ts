import { HttpMethod } from "../utils/http";

export interface IRequestFormViewModel {
    url(): string;
    method(): HttpMethod;
    body(): string | null;
    setUrl(url: string): void;
    setMethod(method: HttpMethod): void;
    setBody(body: string | null): void;
    send(): Promise<void>;
    error(): string | null;
    isLoading(): boolean;
}
