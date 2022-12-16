import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import Head from "next/head";
import DiscordPage from "./discordPage";
import * as discord from "../styles/discord";
import Header from "../components/Config/Header/header";
import Button from "../components/Config/Button/button";
import Separator from "../components/Config/Separator/separator";
import SocialLinks from "../components/Config/SocialLinks/socialLinks";
import InfoLine from "../components/Config/InfoLine/infoLine";
import SettingsSubPage from "../components/Config/SubPages/settingSubPage";

export default function Config() {
    const [category, setCategory] = useState("nucleus-settings");

    useEffect(() => {
        console.log(category);
    });

    return (
        <>
            <Head>
                <title>GUH</title>
            </Head>
            <DiscordPage>
                <div className={`${discord.layer}`}>
                    <div className={`${discord.standardSidebarView}`} style={{ position: "absolute", opacity: 1 }}>
                        <SidebarRegion category={category} setCategory={setCategory} />
                        <ContentRegion category={category} setCategory={setCategory} />
                    </div>
                </div>
            </DiscordPage>
        </>
    );
}

function SidebarRegion({ category, setCategory }: { category: string; setCategory: Dispatch<SetStateAction<string>> }) {
    return (
        <div className={`${discord.sidebarRegion}`}>
            <div className={`${discord.sidebarRegionScroller} ${discord.thin} ${discord.scrollerBase} ${discord.fade}`} dir="ltr" style={{ overflow: "hidden scroll", paddingRight: "0px" }}>
                <nav className={`${discord.sidebar}`}>
                    <div className={`${discord.side}`} role="tablist" aria-orientation="vertical" aria-label="User Settings">
                        <SRContent category={category} setCategory={setCategory} />
                    </div>
                </nav>
            </div>
        </div>
    );
}

function SRContent({ category, setCategory }: { category: string; setCategory: Dispatch<SetStateAction<string>> }) {
    return (
        <>
            <Header text="nucleus Config" />
            <Button categoryId="nucleus-settings" buttonName="Settings" category={category} setCategory={setCategory} />
            <Button categoryId="nucleus-theming" buttonName="Theming" category={category} setCategory={setCategory} />
            <Separator />
            <Header text="About" />
            <Button categoryId="nucleus-about" buttonName="About" category={category} setCategory={setCategory} />
            <Button categoryId="nucleus-credits" buttonName="Credits & Licensing" category={category} setCategory={setCategory} />
            <Button categoryId="nucleus-license-mit" buttonName="MIT License" category={category} setCategory={setCategory} />
            <Button categoryId="nucleus-license-apache" buttonName="Apache 2.0 License" category={category} setCategory={setCategory} />
            <Button categoryId="nucleus-license-cc" buttonName="CC 1.0 Universal" category={category} setCategory={setCategory} />
            <Separator />
            <SocialLinks />
            <div className={`${discord.info}`}>
                <TitleInfoLine />
                <InfoLine>© 2022 Tomat | MIT License</InfoLine>
            </div>
        </>
    );
}

function TitleInfoLine() {
    const [version, setVersion] = useState("");

    useEffect(() => setVersion(new URLSearchParams(window.location.search).get("v") ?? ""), []);

    return <InfoLine>nucleus {version}</InfoLine>;
}

function ContentRegion({ category, setCategory }: { category: string; setCategory: Dispatch<SetStateAction<string>> }) {
    return (
        <div className={`${discord.contentRegion}`}>
            <div className={`${discord.contentRegionScroller} ${discord.contentRegionShownSidebar} ${discord.auto} ${discord.scrollerBase}`} dir="ltr" style={{ overflow: "hidden scroll", paddingRight: "0px" }}>
                <CRContent category={category} setCategory={setCategory} />
            </div>
        </div>
    );
}

function CRContent({ category, setCategory }: { category: string; setCategory: Dispatch<SetStateAction<string>> }) {
    return (
        <>
            <SettingsSubPage categoryId="nucleus-settings" category={category} />
        </>
    );
}
