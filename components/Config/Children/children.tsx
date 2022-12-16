import * as discord from "../../../styles/discord";

export default function Children({ children }: { children: React.ReactNode }) {
    return <div className={`${discord.children}`}>{children}</div>;
}
