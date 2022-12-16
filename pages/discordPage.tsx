import * as discord from "../styles/discord";
import TitleBar from "../components/TitleBar/titleBar";

// Base page for all pages that should mimic Discord.
export default function DiscordPage({ children }: { children: React.ReactNode }) {
    return (
        <div id="app-mount" className={discord.appMount}>
            <TitleBar />
            <div className={`${discord.app[0]}`}>
                <div className={`${discord.app[1]}`}>
                    <div className={`${discord.bg}`} />
                    <div className={`${discord.layers[0]} ${discord.layers[1]}`}>{children}</div>
                </div>
            </div>
        </div>
    );
}
