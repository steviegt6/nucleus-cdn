import * as discord from "../../../styles/discord";

export default function InfoLine({ children }: { children: React.ReactNode }) {
    return (
        <span className={`${discord.textXsNormal} ${discord.line}`} style={{ color: "var(--text-muted)", textTransform: "none" }} data-text-variant="text-xs/normal">
            {children}
        </span>
    );
}
