import Anchor from "../Anchor/anchor";
import Children from "../Children/children";
import Divider from "../Divider/divider";
import GeneralText from "../GeneralText/generalText";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubSection from "../SubSection/subSection";
import SubPage from "./subPage";
import * as discord from "../../../styles/discord";
import React from "react";

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
                    <ProjectWithLicense licenseName="MIT License" projectName="nucleus">
                        The bootstrapper reimplementation that you are currently using. A fork of OpenAsar under the MIT License.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="MIT License" projectName="nucleus-cdn">
                        Contains this settings page, as well as static files.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="MIT License" projectName="OpenAsar">
                        The original bootstrapper reimplementation that nucleus is based on.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="CC 1.0 Universal" projectName="shelter">
                        shelter is a Discord client mod developed by uwu.network, specifically ex-Cumcord developers. nucleus optionally injects shelter using an adapted version of their injector.
                    </ProjectWithLicense>
                    <ProjectWithLicense licenseName="Apache 2.0 License" projectName="vibe">
                        Provides acrylic windowing for Windows systems, which nucleus may optionally enable.
                    </ProjectWithLicense>
                </SubSection>
            </Children>
        </SubPage>
    );
}

function ProjectWithLicense({ licenseName, projectName, children }: { licenseName: string; projectName: string; children: React.ReactNode }) {
    return (
        <div className={`${discord.marginTop20}`}>
            <h3 className={`${discord.h5} ${discord.eyebrow} ${discord.defaultMarginh5}`}>{licenseName}</h3>
            <div className={`${discord.container}`}>
                <div className={`${discord.labelRow}`}>
                    <label style={{ cursor: "auto" }} className={`${discord.labelTitle}`}>
                        {projectName}
                    </label>
                </div>
                <div className={`${discord.note}`}>
                    <div className={`${discord.colorStandard} ${discord.size14} ${discord.description} ${discord.formText} ${discord.modeDefault}`}>{children}</div>
                </div>
                <div className={`${discord.divider} ${discord.dividerDefault}`} />
            </div>
        </div>
    );
}
