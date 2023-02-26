import discord from "../../../styles/discord";

export default function Header({ text }: { text: string }) {
    return (
        // tabindex -1
        <div className={`${discord.header}`} role="button">
            <div className={`${discord.eyebrow}`} data-text-variant="eyebrow">
                {text}
            </div>
        </div>
    );
}
