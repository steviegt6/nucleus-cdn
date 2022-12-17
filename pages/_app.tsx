import "../styles/styles.scss";
import { Config, INative } from "../types/nucleus";

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
    if (typeof window === "undefined") fillNative();
    return <Component {...pageProps} />;
}

function fillNative() {
    class ServerNative implements INative {
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
    }

    global.Native = new ServerNative();
}
