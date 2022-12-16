import Anchor from "../Anchor/anchor";
import Children from "../Children/children";
import Divider from "../Divider/divider";
import GeneralText from "../GeneralText/generalText";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubSection from "../SubSection/subSection";
import SubPage from "./subPage";
import * as discord from "../../../styles/discord";
import React from "react";
import { Social } from "../SocialLinks/socialLinks";

export default function AboutSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="About nucleus" />
            <Children>
                <SubSection>
                    <GeneralText>
                        Nucleus, stylized as <b>nucleus</b>, is a feature-rich, hard fork of <Anchor href="https://github.com/OpenAsar/GooseMod">GooseMod/OpenAsar</Anchor> personally maintained by <Anchor href="https://github.com/steviegt6">Tomat</Anchor>.
                        <br />
                        <br />
                        nucleus is a rewrite and reimplementation of the Discord desktop bootstrapper (often referred to as the <code>app.asar</code> file). This is an alternative method of modding Discord through somewhat disconnected means.
                        <div className={`${discord.marginBottom20}`} />
                    </GeneralText>
                </SubSection>
                <Divider />
                <SubSection>
                    <GeneralText>
                        As with many projects, nucleus is open-source and utilizes other open-source software.
                        <br />
                        <br />
                        The following are a list of projects that make nucleus possible, the sidebar contains copies of the associated licenses:
                        <div className={`${discord.marginBottom20}`} />
                    </GeneralText>
                    <Divider />
                    <ProjectWithLicense licenseName="MIT License" projectName="nucleus" githubUrl="https://github.com/steviegt6/nucleus">
                        The bootstrapper reimplementation that you are currently using. A fork of OpenAsar under the MIT License.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="MIT License" projectName="nucleus-cdn" githubUrl="https://github.com/steviegt6/nucleus-cdn">
                        Contains this settings page, as well as static files.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="MIT License" projectName="OpenAsar" githubUrl="https://github.com/GooseMod/OpenAsar">
                        The original bootstrapper reimplementation that nucleus is based on.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="CC 1.0 Universal" projectName="shelter" githubUrl="https://github.com/uwu/shelter">
                        shelter is a Discord client mod developed by uwu.network, specifically ex-Cumcord developers. nucleus optionally injects shelter using an adapted version of their injector.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="Apache 2.0 License" projectName="vibe" githubUrl="https://github.com/pykeio/vibe">
                        Provides acrylic windowing for Windows systems, which nucleus may optionally enable.
                    </ProjectWithLicense>
                </SubSection>
            </Children>
        </SubPage>
    );
}

function ProjectWithLicense({ licenseName, projectName, githubUrl, children }: { licenseName: string; projectName: string; githubUrl?: string | undefined; children: React.ReactNode }) {
    const icons: React.ReactNode[] = [];

    if (githubUrl) icons.push(<GitHubIcon url={githubUrl} />);

    return (
        <div className={`${discord.marginTop20}`}>
            <h3 className={`${discord.h5} ${discord.eyebrow} ${discord.defaultMarginh5}`}>{licenseName}</h3>
            <div className={`${discord.container}`}>
                <div className={`${discord.labelRow}`}>
                    <label style={{ cursor: "auto", flex: "none" }} className={`${discord.labelTitle}`}>
                        {projectName}
                    </label>
                    <CombineIcons elements={icons} />
                </div>
                <div className={`${discord.note}`}>
                    <div className={`${discord.colorStandard} ${discord.size14} ${discord.description} ${discord.formText} ${discord.modeDefault}`}>{children}</div>
                </div>
                <div className={`${discord.divider} ${discord.dividerDefault}`} />
            </div>
        </div>
    );
}

function CombineIcons({ elements }: { elements: React.ReactNode[] }) {
    const children: React.ReactNode[] = [];

    for (const child of elements) {
        children.push(<div style={{ marginLeft: 8 }} />);
        children.push(child);
    }

    return <>{...children}</>;
}

function GitHubIcon({ url }: { url: string }) {
    return (
        <Social
            link={url}
            icon={
                <svg width="20" height="16" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
            }
        />
    );
}
