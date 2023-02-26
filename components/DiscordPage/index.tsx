import discord from "../../styles/discord";
import TitleBar from "../TitleBar/titleBar";
import { PageProps } from "../../pages/_app";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// Base page for all pages that should mimic Discord.
export default function DiscordPage(props: React.PropsWithChildren<PageProps>) {
    const [warningBanner, setWarningBanner] = useState(<></>);

    useEffect(() => {
        if (props.cssErrored) setWarningBanner(<div className={styles.warningBanner}>If you&apos;re seeing this, Discord&apos;s CSS classes have updated. Report this!</div>);
    }, [setWarningBanner, props]);

    return (
        <div id="app-mount" className={discord.appMount}>
            <TitleBar />
            {warningBanner}
            <div className={`${discord.app0}`}>
                <div className={`${discord.app1}`}>
                    <div className={`${discord.bg}`} />
                    <div className={`${discord.layers0} ${discord.layers1}`}>{props.children}</div>
                </div>
            </div>
        </div>
    );
}
