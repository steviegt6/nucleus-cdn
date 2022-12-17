import Children from "../Children/children";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubSection from "../SubSection/subSection";
import SubPage from "./subPage";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Config } from "../../../types/nucleus";

export default function ThemingSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    const [config, setConfig] = useState<Config>();

    useEffect(() => {
        setConfig(Native.get());
    }, []);

    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="Theme Editor" />
            <Children>
                <SubSection>
                    <Editor
                        options={{
                            minimap: {
                                enabled: false
                            }
                        }}
                        height="calc(100vh - 226px)"
                        width="calc(100%)"
                        language="css"
                        theme="vs-dark"
                        value={config?.css ?? "<no config>"}
                        onChange={(value) => {
                            config!.css = value;
                            debounce(() => Native.set(config!), 500)();
                        }}
                    />
                </SubSection>
            </Children>
        </SubPage>
    );
}

function debounce(handler: any, timeout: number) {
    let timer: any;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => handler(...args), timeout);
    };
}
