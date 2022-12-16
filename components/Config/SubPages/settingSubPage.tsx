import SubPage from "./subPage";

export default function SettingsSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    return (
        <SubPage categoryId={categoryId} category={category}>
            <h1 style={{ color: "white" }}>TEST</h1>
        </SubPage>
    );
}
