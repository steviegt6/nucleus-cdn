import React from "react";
import discord from "../../../styles/discord";

export default function GeneralText({ className, children }: { className?: string | undefined; children: React.ReactNode }) {
    return (
        <div className={`${discord.defaultColor} ${discord.textMdNormal} ${className}`} data-text-variant="text-md/normal">
            {children}
        </div>
    );
}
