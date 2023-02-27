import discord from "../../styles/discord";
import TitleBar from "../TitleBar/titleBar";
import { PageProps } from "../../pages/_app";
import styles from "./styles.module.css";

// Base page for all pages that should mimic Discord.
export default function DiscordPage(props: React.PropsWithChildren<PageProps>) {
    return (
        <div id="app-mount" className={discord.appMount}>
            <TitleBar />
            {props.cssErrored && <Banner bgColor="#ed4245">If you&apos;re seeing this, Discord&apos;s CSS classes have updated. Report this!</Banner>}
            {props.usingFallbackCss && (
                <Banner bgColor="#fee75c" textColor="black">
                    Fallback CSS is in use. Are you viewing this from your browser or have CSS classes updated?
                </Banner>
            )}
            {props.usingStub && <Banner bgColor="#5865f2">A fallback stub API is in use—are you viewing this from your browser?</Banner>}
            <div className={`${discord.app0}`}>
                <div className={`${discord.app1}`}>
                    <div className={`${discord.bg}`} />
                    <div className={`${discord.layers0} ${discord.layers1}`}>{props.children}</div>
                </div>
            </div>
        </div>
    );
}

type BannerProps = React.PropsWithChildren<{
    textColor?: string;
    bgColor: string;
    // remove?: () => void;
}>;

function Banner({ bgColor, textColor, children }: BannerProps) {
    return (
        <div className={styles.banner} style={{ backgroundColor: bgColor, color: textColor || "white" }}>
            {children}
        </div>
    );
}
