import * as discord from "../styles/discord";

import { Html, Head, Main, NextScript } from "next/document";

// TODO: Save html classes instead.
export default function Document() {
    return (
        <Html className={`${discord.themeCustom} ${discord.fullMotion} ${discord.disableForcedColors} ${discord.themeDark} ${discord.platformWin} ${discord.platformWin} ${discord.fontSize16}`}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
