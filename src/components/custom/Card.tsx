import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export default function Card({className , children} : {className?: string, children: ReactNode}) {
    return (
        <div className={twMerge("w-90P mx-auto p-6 bg-comp", className)}>
            {children}
        </div>
    )
}