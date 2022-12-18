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

    const [supportsAcrylic, setSupportsAcrylic] = useState(config?.supportsAcrylic ?? false);

    const [noTrack, setNoTrack] = useState(config?.noTrack ?? true);
    const [noTyping, setNoTyping] = useState(config?.noTyping ?? false);
    const [themeSync, setThemeSync] = useState(config?.themeSync ?? true);
    const [acrylicWindow, setAcrylicWindow] = useState(config?.acrylicWindow ?? true);
    const [cmdPreset, setCmdPreset] = useState(config?.cmdPreset ?? "perf");
    const [quickstart, setQuickstart] = useState(config?.quickstart ?? false);
    const [multiInstance, setMultiInstance] = useState(config?.multiInstance ?? false);
    const [injectShelter, setInjectShelter] = useState(config?.injectShelter ?? false);

    useEffect(() => {
        setSupportsAcrylic(config?.supportsAcrylic ?? false);

        setNoTrack(config?.noTrack ?? true);
        setNoTyping(config?.noTyping ?? false);
        setThemeSync(config?.themeSync ?? true);
        setAcrylicWindow(config?.acrylicWindow ?? false);
        setCmdPreset(config?.cmdPreset ?? "perf");
        setQuickstart(config?.quickstart ?? false);
        setMultiInstance(config?.multiInstance ?? false);
        setInjectShelter(config?.injectShelter ?? false);
    }, [config]);

    useEffect(() => {
        if (!config) return;

        config.noTrack = noTrack;
        config.noTyping = noTyping;
        config.themeSync = themeSync;
        config.acrylicWindow = acrylicWindow;
        config.cmdPreset = cmdPreset;
        config.quickstart = quickstart;
        config.multiInstance = multiInstance;
        config.injectShelter = injectShelter;
        Native.set(config);
    }, [config, noTrack, noTyping, themeSync, acrylicWindow, cmdPreset, quickstart, multiInstance, injectShelter]);

    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="nucleus Settings" />
            <Children>
                <OptionHeader title="Privacy" />
                <SwitchOption labelText="No tracking" noteText='Disables Discord&apos;s tracking/analytics/telemetry "features" (sentry, science).' value={noTrack} setValue={setNoTrack} topMargin />
                <SwitchOption labelText="Disable typing indicator" noteText="Disables sending an indicator that you are typing to other people." value={noTyping} setValue={setNoTyping} />

                <OptionHeader title="Theming" />
                <SwitchOption labelText="Synced theming" noteText="Applies your theming to the splash screen and nucleus settings menu." value={themeSync} setValue={setThemeSync} topMargin />
                {supportsAcrylic ?? false ? <SwitchOption labelText="Acrylic window" noteText="(Windows Only) Applies the Windows acrylic effect to Discord using pykeio/vibe." value={acrylicWindow} setValue={setAcrylicWindow} /> : <></>}

                <OptionHeader title="Launch" />
                <RadioOption labelText="Focus" noteText="Which aspect of the client to focus on." radioOptions={{ "perf": "Performance", "battery": "Battery Life", "balanced": "Balanced" }} value={cmdPreset} setValue={setCmdPreset} topMargin />
                <SwitchOption labelText="Quickstart" noteText="Makes Discord start faster by skipping some steps, such as checking updates upon starting." value={quickstart} setValue={setQuickstart} experimental />
                <SwitchOption labelText="Multi-instance" noteText="Allows Discord to have multiple instances/windows open at once." value={multiInstance} setValue={setMultiInstance} experimental />
                <SwitchOption labelText="shelter" noteText="Injects shelter, a client mod developed by uwu.network (ex-Cumcord developers)." value={injectShelter} setValue={setInjectShelter} experimental />
            </Children>
        </SubPage>
    );
}

function RadioOption({
    labelText,
    noteText,
    radioOptions,
    noDivider = false,
    topMargin = false,
    experimental = false,
    value,
    setValue
}: {
    labelText: string;
    noteText?: string | undefined;
    radioOptions: { [key: string]: string };
    noDivider?: boolean;
    topMargin?: boolean;
    experimental?: boolean;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
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

    function isSelected(optionValue: string) {
        return value === optionValue;
    }

    function RadioOption({ optionText, optionValue }: { optionText: string; optionValue: string }) {
        const svg = (
            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="currentColor"
                ></path>
                {isSelected(optionValue) ? <circle cx="12" cy="12" r="5" className="radioIconForeground-2BMavi" fill="currentColor"></circle> : <></>}
            </svg>
        );

        return (
            <div role="raido" aria-checked={isSelected(optionValue) ? "true" : "false"} onClick={() => setValue(optionValue)} className={`${discord.radioItem} ${discord.marginBottom8} ${discord.horizontal} ${discord.radioFlex} ${discord.directionRow} ${discord.itemFilled}`}>
                <div className={`${discord.radioBar}`} style={{ padding: "10px" }}>
                    <div>{svg}</div>
                    <div className={`${discord.radioInfo}`}>
                        <div className={`${discord.textMdMedium}`} data-text-variant="text-md/medium">
                            {optionText}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const constructedOptions = Object.entries(radioOptions).map(([optionValue, optionText]) => <RadioOption key={optionValue} optionText={optionText} optionValue={optionValue} />);
    const radioDiv = (
        <div role="radiogroup" aria-orientation="vertical" aria-disabled="false">
            {...constructedOptions}
        </div>
    );

    function ExperimentalWrapper({ children }: { children: React.ReactNode }) {
        return experimental ? <div className={`${discord.betaTagContainer} ${/*discord.dependentSetting*/ ""}`}>{children}</div> : <>{children}</>;
    }

    return (
        <div className={`${discord.container} ${topMargin ? discord.marginTop8 : ""} ${discord.marginBottom20}`}>
            <div className={`${discord.labelRow}`}>
                <label className={`${discord.labelTitle}`}>
                    <ExperimentalWrapper>
                        {labelText}
                        {experimentalDiv}
                    </ExperimentalWrapper>
                </label>
            </div>
            {noteDiv}
            {radioDiv}
            {dividerDiv}
        </div>
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
                        <input type="checkbox" className={`${discord.input}`} tabIndex={0} />
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
