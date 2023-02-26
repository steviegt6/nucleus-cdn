import discord from "../../../styles/discord";

export default function SubPage({ categoryId, category, children }: { categoryId: string; category: string; children: React.ReactNode }) {
    return (
        <div style={{ display: category == categoryId ? "" : "none" }} className={`${discord.contentColumn} ${discord.contentColumnDefault}`} role="tabpanel" id={categoryId} tabIndex={-1}>
            {children}
        </div>
    );
    //return <div className={`${discord.container} ${discord.marginTop8} ${discord.marginBottom20}`}>{children}</div>;
}
