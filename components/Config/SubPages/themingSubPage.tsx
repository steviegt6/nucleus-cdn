import Children from "../Children/children";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubSection from "../SubSection/subSection";
import SubPage from "./subPage";
import Editor from "@monaco-editor/react";

export default function ThemingSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="Theme Editor" />
            <Children>
                <SubSection>
                    <Editor height="74vh" language="css" theme="vs-dark" defaultValue="/* test */" />
                </SubSection>
            </Children>
        </SubPage>
    );
}
