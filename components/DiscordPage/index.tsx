import discord from "../../styles/discord";
import TitleBar from "../TitleBar/titleBar";
import { PageProps } from "../../pages/_app";

// Base page for all pages that should mimic Discord.
export default function DiscordPage(props: React.PropsWithChildren<PageProps>) {
    return (
        <div id="app-mount" className={discord.appMount}>
            <TitleBar />
            <div className={`${discord.app0}`}>
                <div className={`${discord.app1}`}>
                    <div className={`${discord.bg}`} />
                    <div className={`${discord.layers0} ${discord.layers1}`}>{props.children}</div>
                </div>
            </div>
        </div>
    );
}
