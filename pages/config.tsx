import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Head from "next/head";
import DiscordPage from "../components/DiscordPage";
import discord from "../styles/discord";
import Header from "../components/Config/Header/header";
import Button from "../components/Config/Button/button";
import Separator from "../components/Config/Separator/separator";
import SocialLinks from "../components/Config/SocialLinks/socialLinks";
import InfoLine from "../components/Config/InfoLine/infoLine";
import SettingsSubPage from "../components/Config/SubPages/settingSubPage";
import AboutSubPage from "../components/Config/SubPages/aboutSubPage";
import MITLicenseSubPage from "../components/Config/SubPages/mitLicenseSubPage";
import CCLicenseSubPage from "../components/Config/SubPages/ccLicenseSubPage";
import ThemingSubPage from "../components/Config/SubPages/themingSubPage";
import { PageProps } from "./_app";

export default function Config(props: PageProps) {
    const [page, setPage] = useState(<></>);
    const [category, setCategory] = useState("nucleus-settings");

    useEffect(() => {
        switch (props.cssErrored) {
            case undefined:
                setPage(<p>loading</p>);

            default:
                setPage(
                    <DiscordPage {...props}>
                        <div className={`${discord.layer}`}>
                            <div className={`${discord.standardSidebarView}`} style={{ position: "absolute", opacity: 1 }}>
                                <SidebarRegion category={category} setCategory={setCategory} />
                                <ContentRegion category={category} setCategory={setCategory} />
                            </div>
                        </div>
                    </DiscordPage>
                );
                break;
        }
    }, [setPage, props, category]);

    return (
        <>
            <Head>
                <title>nucleus Settings</title>
            </Head>
            {page}
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
            {/*<Button categoryId="nucleus-credits" buttonName="Credits & Licensing" category={category} setCategory={setCategory} />*/}
            <Button categoryId="nucleus-license-mit" buttonName="MIT License" category={category} setCategory={setCategory} />
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
            <ThemingSubPage categoryId="nucleus-theming" category={category} />
            <AboutSubPage categoryId="nucleus-about" category={category} />
            <MITLicenseSubPage categoryId="nucleus-license-mit" category={category} />
            <CCLicenseSubPage categoryId="nucleus-license-cc" category={category} />
        </>
    );
}
