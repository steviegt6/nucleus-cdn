import SectionTitle from "../SectionTitle/sectionTitle";
import SubPage from "./subPage";

export default function SettingsSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="nucleus Settings" />
        </SubPage>
    );
}
