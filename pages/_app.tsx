import { useEffect } from "react";
import { Config, INative } from "../types/nucleus";

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    if (typeof window === "undefined") serverStubNative();
    else if (typeof Native === "undefined") clientStubNative();

    useEffect(() => {
        Native.initializeEnvironment();
    });

    return <Component {...pageProps} />;
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
                css: "",
                noTrack: false,
                noTyping: false,
                themeSync: false,
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
