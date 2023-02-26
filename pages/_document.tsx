// import discord from "../styles/discord";
// className={`${discord.themeCustom} ${discord.fullMotion} ${discord.disableForcedColors} ${discord.themeDark} ${discord.platformWin} ${discord.platformWin} ${discord.fontSize16}`}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html style={{ fontSize: "100%" }}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
