import Card from "@/components/custom/Card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ReactNode} from "react";

export default function Submit(){
    return (
        <Card className={"max-w-largeScreen rounded-b-2xl"}>
            <ul>
                <ListItem>Unlimited websites</ListItem>
                <ListItem>100% data ownership</ListItem>
                <ListItem>Email report</ListItem>
            </ul>
            <Button className={"block my-4 mx-auto rounded-3xl bg-cta text-cta text-sm font-bold hover:bg-cta hover:text-white transition-colors ease-in duration-300"}>
                Start My Trial
            </Button>
        </Card>
    )
}

function ListItem({children}:{children: ReactNode}){
    return(
        <li className={"py-2 flex justify-center items-center gap-x-2"}>
            <ListIcon/>
            <span className={"text-sm text-gray"}>{children}</span>
        </li>
    )
}

function ListIcon() {
    return (
        <span className={"inline-block aspect-square h-3 bg-no-repeat bg-center bg-contain bg-check"}></span>
    )
}