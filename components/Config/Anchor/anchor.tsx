import discord from "../../../styles/discord";

export default function Anchor({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} className={`${discord.anchor} ${discord.anchorUnderlineOnHover}`} role="button" tabIndex={0} rel="noreferrer noopener" target="_blank">
            {children}
        </a>
    );
}
