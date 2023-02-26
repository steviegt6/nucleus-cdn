import Anchor from "../Anchor/anchor";
import Children from "../Children/children";
import Divider from "../Divider/divider";
import GeneralText from "../GeneralText/generalText";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubSection from "../SubSection/subSection";
import SubPage from "./subPage";
import React from "react";
import discord from "../../../styles/discord";

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
                    <ProjectWithLicense licenseName="MIT License" projectName="nucleus" githubUrl="https://github.com/steviegt6/nucleus" patreonUrl="https://patreon.com/tomatophile" koFiUrl="https://ko-fi.com/tomatophile">
                        The bootstrapper reimplementation that you are currently using. A fork of OpenAsar under the MIT License.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="MIT License" projectName="nucleus-cdn" githubUrl="https://github.com/steviegt6/nucleus-cdn" patreonUrl="https://patreon.com/tomatophile" koFiUrl="https://ko-fi.com/tomatophile">
                        Contains this settings page, as well as static files.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="MIT License" projectName="OpenAsar" githubUrl="https://github.com/GooseMod/OpenAsar" githubSponsorUrl="https://github.com/sponsors/CanadaHonk">
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

function ProjectWithLicense({
    licenseName,
    projectName,
    githubUrl,
    githubSponsorUrl,
    patreonUrl,
    koFiUrl,
    children
}: {
    licenseName: string;
    projectName: string;
    githubUrl?: string | undefined;
    githubSponsorUrl?: string | undefined;
    patreonUrl?: string | undefined;
    koFiUrl?: string | undefined;
    children: React.ReactNode;
}) {
    const icons: React.ReactNode[] = [];

    if (githubUrl) icons.push(<GitHubIcon url={githubUrl} key="github" />);
    if (githubSponsorUrl) icons.push(<GitHubSponsorIcon url={githubSponsorUrl} key="github-sponsor" />);
    if (patreonUrl) icons.push(<PatreonIcon url={patreonUrl} key="patreon" />);
    if (koFiUrl) icons.push(<KoFiIcon url={koFiUrl} key="kofi" />);

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
    let divCount = 0;

    for (const child of elements) {
        children.push(<div style={{ marginLeft: 4 }} key={divCount++} />);
        children.push(child);
    }

    return <>{...children}</>;
}

function GitHubIcon({ url }: { url: string }) {
    return (
        <Social
            link={url}
            icon={
                <svg width="20" height="20" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
            }
        />
    );
}

function GitHubSponsorIcon({ url }: { url: string }) {
    return (
        <Social
            link={url}
            icon={
                <svg width="20" height="20" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                </svg>
            }
        />
    );
}

function PatreonIcon({ url }: { url: string }) {
    return (
        <Social
            link={url}
            icon={
                <svg width="20" height="20" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"></path>
                </svg>
            }
        />
    );
}

function KoFiIcon({ url }: { url: string }) {
    return (
        <Social
            link={url}
            icon={
                <svg width="20" height="20" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"></path>
                </svg>
            }
        />
    );
}

function Social({ link, icon }: { link: string; icon: React.ReactElement }) {
    return (
        <a style={{ marginRight: 0 }} className={`${discord.anchor} ${discord.anchorUnderlineOnHover} ${discord.link}`} href={link} rel="noreferrer noopener" target="_blank">
            {icon}
        </a>
    );
}
