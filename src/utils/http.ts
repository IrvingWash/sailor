export enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE",
}

export function isMethodWithBody(method: HttpMethod): boolean {
    switch (method) {
        case HttpMethod.Post:
        case HttpMethod.Patch:
        case HttpMethod.Put:
            return true;
        default:
            return false;
    }
}

export function appendHttp(url: string): string {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }

    return `http://${url}`;
}
