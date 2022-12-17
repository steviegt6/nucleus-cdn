declare global {
    var Native: Native;
}

export interface Config {
    css: string | undefined;
}

export interface Native {
    edit(): void;
    restart(): void;
    set(c: Config): void;
    get(): Config;
    open(): void;
}
