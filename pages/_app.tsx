import { useEffect, useState } from "react";
import { initializeDiscordStyles } from "../lib/discordStyles";
import { Config, INative } from "../types/nucleus";

export type PageProps = { cssErrored?: boolean; usingFallbackCss: boolean; usingStub: boolean };

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    const [cssErrored, setCssErrored] = useState<boolean | undefined>(undefined);
    const [usingStub, setUsingStub] = useState(false);
    const [usingFallbackCss, setUsingFallbackCss] = useState(false);
    const [loading, setLoading] = useState(true);

    if (typeof window === "undefined") serverStubNative();
    else if (typeof Native === "undefined") {
        clientStubNative();
        setUsingStub(true);
    }

    useEffect(() => {
        Native.initializeEnvironment();

        function tryValidate() {
            setTimeout(() => {
                const validated = validateCss(false);

                if (validated === undefined) tryValidate();
                else {
                    if (validated === false || usingStub) {
                        validateCss(true);

                        if (!usingStub) setCssErrored(!validated);
                        else setCssErrored(false);
                    } else setCssErrored(!validated);
                }
            });
        }

        tryValidate();
    }, [setCssErrored, usingStub]);

    useEffect(() => {
        if (cssErrored === true || usingStub) setUsingFallbackCss(true);
        setLoading(false);
    }, [setUsingFallbackCss, setLoading, cssErrored, usingStub]);

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            {usingFallbackCss && <link rel="stylesheet" href="/fallback.css" />}
            {loading ? <p>Loading...</p> : <Component {...pageProps} cssErrored={cssErrored} usingStub={usingStub} usingFallbackCss={usingFallbackCss} />}
        </>
    );
}

function validateCss(fallback: boolean): boolean | undefined {
    if (fallback) return initializeDiscordStyles("", true);

    let style = document.getElementById("nucleus-discord-styles");
    if (!style) return undefined;

    return initializeDiscordStyles(style.innerText, false);
}

function serverStubNative() {
    // Should never actually run, so be sure to throw errors.
    class ServerStubNative implements INative {
        edit(): void {
            throw new Error("Method not implemented.");
        }

        restart(): void {
            throw new Error("Method not implemented.");
        }

        set(_c: Config): void {
            throw new Error("Method not implemented.");
        }

        get(): Config {
            throw new Error("Method not implemented.");
        }

        open(): void {
            throw new Error("Method not implemented.");
        }

        closeWindow(): void {
            throw new Error("Method not implemented.");
        }

        maximizeWindow(): void {
            throw new Error("Method not implemented.");
        }

        minimizeWindow(): void {
            throw new Error("Method not implemented.");
        }

        initializeEnvironment(): void {
            throw new Error("Method not implemented.");
        }
    }

    global.Native = new ServerStubNative();
}

function clientStubNative() {
    // May prove useful for debugging, maybe...
    class ClientStubNative implements INative {
        edit(): void {
            console.log("Requested: Native.edit");
        }

        restart(): void {
            console.log("Requested: Native.restart");
        }

        set(c: Config): void {
            console.log("Requested: Native.set", c);
        }

        get(): Config {
            console.log("Requested: Native.get");
            return {
                supportsAcrylic: false,
                css: "",
                noTrack: false,
                noTyping: false,
                themeSync: false,
                acrylicWindow: false,
                cmdPreset: "perf",
                quickstart: false,
                multiInstance: false,
                injectShelter: false
            };
        }
        open(): void {
            console.log("Requested: Native.open");
        }

        closeWindow(): void {
            console.log("Requested: Native.closeWindow");
        }

        maximizeWindow(): void {
            console.log("Requested: Native.maximizeWindow");
        }

        minimizeWindow(): void {
            console.log("Requested: Native.minimizeWindow");
        }

        initializeEnvironment(): void {
            console.log("Requested: Native.initializeEnvironment");
        }
    }

    console.warn("Native is not defined. Using stub! This should only happen when viewing the site in a browser.");
    global.Native = new ClientStubNative();
}
