declare global {
    var Native: INative;
}

export interface Config {
    css: string | undefined;
}

export interface INative {
    edit(): void;
    restart(): void;
    set(c: Config): void;
    get(): Config;
    open(): void;
    closeWindow(): void;
    maximizeWindow(): void;
    minimizeWindow(): void;
}
