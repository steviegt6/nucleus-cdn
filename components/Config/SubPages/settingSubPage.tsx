import Children from "../Children/children";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubPage from "./subPage";
import * as discord from "../../../styles/discord";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Config } from "../../../types/nucleus";

export default function SettingsSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    const hasInitConfig = useRef(false);
    const [config, setConfig] = useState<Config>();

    useEffect(() => {
        if (hasInitConfig.current) return;

        setConfig(Native.get());

        hasInitConfig.current = true;
    }, []);

    useEffect(() => {
        setNoTrack(config?.noTrack ?? true);
        setNoTyping(config?.noTyping ?? false);
        setThemeSync(config?.themeSync ?? true);
        setQuickstart(config?.quickstart ?? false);
        setMultiInstance(config?.multiInstance ?? false);
        setInjectShelter(config?.injectShelter ?? false);
    }, [config]);

    // TODO: Add "Focus" - "Which aspect of the client to focus on." [performance, battery life, balanced]
    const [noTrack, setNoTrack] = useState(config?.noTrack ?? true);
    const [noTyping, setNoTyping] = useState(config?.noTyping ?? false);
    const [themeSync, setThemeSync] = useState(config?.themeSync ?? true);
    const [quickstart, setQuickstart] = useState(config?.quickstart ?? false);
    const [multiInstance, setMultiInstance] = useState(config?.multiInstance ?? false);
    const [injectShelter, setInjectShelter] = useState(config?.injectShelter ?? false);

    useEffect(() => {
        if (!config) return;

        config.noTrack = noTrack;
        config.noTyping = noTyping;
        config.themeSync = themeSync;
        config.quickstart = quickstart;
        config.multiInstance = multiInstance;
        config.injectShelter = injectShelter;
        Native.set(config);
    }, [config, noTrack, noTyping, themeSync, quickstart, multiInstance, injectShelter]);

    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="nucleus Settings" />
            <Children>
                <OptionHeader title="Privacy" />
                <SwitchOption labelText="No tracking" noteText='Disables Discord&apos;s tracking/analytics/telemetry "features" (sentry, science).' value={noTrack} setValue={setNoTrack} topMargin />
                <SwitchOption labelText="Disable typing indicator" noteText="Disables sending an indicator that you are typing to other people." value={noTyping} setValue={setNoTyping} />

                <OptionHeader title="Theming" />
                <SwitchOption labelText="Synced theming" noteText="Applies your theming to the splash screen and nucleus settings menu." value={themeSync} setValue={setThemeSync} topMargin />

                <OptionHeader title="Launch" />
                <SwitchOption labelText="Quickstart" noteText="Makes Discord start faster by skipping some steps, such as checking updates upon starting." value={quickstart} setValue={setQuickstart} topMargin />
                <SwitchOption labelText="Multi-instance" noteText="Allows Discord to have multiple instances/windows open at once." value={multiInstance} setValue={setMultiInstance} />
                <SwitchOption labelText="shelter" noteText="Injects shelter, a client mod developed by uwu.network (ex-Cumcord developers)." value={injectShelter} setValue={setInjectShelter} />
            </Children>
        </SubPage>
    );
}

function SwitchOption({
    labelText,
    noteText = undefined,
    noDivider = false,
    topMargin = false,
    experimental = false,
    value,
    setValue
}: {
    labelText: string;
    noteText?: string | undefined;
    noDivider?: boolean;
    topMargin?: boolean;
    experimental?: boolean;
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
}) {
    const dividerDiv = !noDivider ? <div className={`${discord.divider} ${discord.dividerDefault}`} /> : <></>;
    const noteDiv = noteText ? (
        <div className={`${discord.note}`}>
            <div className={`${discord.colorStandard} ${discord.size14} ${discord.description} ${discord.formText} ${discord.modeDefault}`}>{noteText}</div>
        </div>
    ) : (
        <></>
    );
    const experimentalDiv = experimental ? (
        <div style={{ backgroundColor: "var(--brand-500)" }} className={`${discord.betaTagIcon} ${discord.testBadge} ${discord.base} ${discord.badgeEyebrow} ${discord.baseShapeRound}`}>
            Experimental
        </div>
    ) : (
        <></>
    );

    function ExperimentalWrapper({ children }: { children: React.ReactNode }) {
        return experimental ? <div className={`${discord.betaTagContainer} ${/*discord.dependentSetting*/ ""}`}>{children}</div> : <>{children}</>;
    }

    // TODO: Eventually animate these (colors and SVG animations).
    const enabledColor = "rgb(59, 165, 92)";
    const disabledColor = "rgb(114, 118, 125)";

    const enabledSvg = (
        <svg className={`${discord.slider}`} viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" aria-hidden="true" style={{ left: "12px" }}>
            <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
            <svg viewBox="0 0 20 20" fill="none">
                <path fill="rgba(59, 165, 92, 1)" d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"></path>
                <path fill="rgba(59, 165, 92, 1)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"></path>
            </svg>
        </svg>
    );
    const disabledSvg = (
        <svg className={`${discord.slider}`} viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" aria-hidden="true" style={{ left: "-3px" }}>
            <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
            <svg viewBox="0 0 20 20" fill="none">
                <path fill="rgba(114, 118, 125, 1)" d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z"></path>
                <path fill="rgba(114, 118, 125, 1)" d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"></path>
            </svg>
        </svg>
    );

    function toggle() {
        setValue(!value);
    }

    return (
        <div className={`${discord.container} ${topMargin ? discord.marginTop8 : ""} ${discord.marginBottom20}`}>
            <div className={`${discord.labelRow}`}>
                <label className={`${discord.labelTitle}`} onClick={toggle}>
                    <ExperimentalWrapper>
                        {labelText}
                        {experimentalDiv}
                    </ExperimentalWrapper>
                </label>
                <div className={`${discord.control}`}>
                    <div onClick={toggle} style={{ opacity: 1, backgroundColor: value ? enabledColor : disabledColor }} className={`${discord.controlContainer} ${discord.defaultColors} ${value ? discord.checked : ""}`}>
                        {value ? enabledSvg : disabledSvg}
                        <input type="checkbox" className={`${discord.input}`} tabIndex={0} checked />
                    </div>
                </div>
            </div>
            {noteDiv}
            {dividerDiv}
        </div>
    );
}

function OptionHeader({ title }: { title: string }) {
    return <h3 className={`${discord.h5} ${discord.eyebrow} ${discord.marginBottom8}}]`}>{title}</h3>;
}
