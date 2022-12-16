import * as discord from "../../../styles/discord";

export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className={`${discord.sectionTitle}`}>
            <h2 className={`${discord.h1} ${discord.title} ${discord.defaultColor} ${discord.defaultMarginh1}`}>{title}</h2>
        </div>
    );
}
