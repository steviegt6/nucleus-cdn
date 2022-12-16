import React from "react";
import * as discord from "../../../styles/discord";

export default function SubSection({ children }: { children: React.ReactNode }) {
    return <div className={`${discord.marginTop20}`}>{children}</div>;
}
