declare global {
    var Native: INative;
}

export interface Config {
    css: string | undefined;

    // privacy
    noTrack: boolean | undefined;
    noTyping: boolean | undefined;

    // theming
    themeSync: boolean | undefined;

    // launch
    cmdPreset: string | undefined;
    quickstart: boolean | undefined;
    multiInstance: boolean | undefined;
    injectShelter: boolean | undefined;
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
    initializeEnvironment(): void;
}
