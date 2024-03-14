import {Switch} from "@/components/ui/switch.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {twMerge} from "tailwind-merge";
import {memo,} from "react";

export const BillingOption = memo(
    ({className, onToggle}: { className?: string, onToggle: (value: boolean) => void }) => {


        // @ts-expect-error I don't even know how to type this shit help me
        const switchHandler = (evt)=>{
            if (evt.target.ariaChecked === "true") {
                onToggle(false)
            } else {
                onToggle(true)
            }
        }

        console.log("billing option rendered")


        return (
            <div className={twMerge("flex justify-center items-center gap-x-4", className)}>
                <span className={"text-xs text-gray"}>Monthly Billing</span>
                <Switch onClick={switchHandler}/>
                <span className={"text-xs text-gray"}>YearlyBilling <Badge
                    className={"bg-discount text-discount"}>-25%</Badge> </span>
            </div>
        );
    }
);