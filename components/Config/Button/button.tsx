import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import * as discord from "../../../styles/discord";

export const BUTTON_PREFIX = "sidebar-button-";

export default function Button({ categoryId, buttonName, category, setCategory }: { categoryId: string; buttonName: string; category: string; setCategory: Dispatch<SetStateAction<string>> }) {
    const buttonId = BUTTON_PREFIX + categoryId;

    function onClick() {
        setCategory(categoryId);
    }

    return (
        <div className={`${discord.item} ${discord.themed} ${category == categoryId ? discord.selected : ""}`} role="tab" aria-selected={category == categoryId ? "true" : "false"} aria-controls={buttonId} aria-disabled="false" tabIndex={0} aria-label={buttonName} id={buttonId} onClick={onClick}>
            {buttonName}
        </div>
    );
}
