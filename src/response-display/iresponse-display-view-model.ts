export interface IResponseDisplayViewModel {
    statusCode(): number;
    json(): Promise<string>;
}
