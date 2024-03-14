import Card from "@/components/custom/Card.tsx";

export default function Separator(){
    return (
        <Card className={"bg-transparent p-0"}>
            <div className={"h-[3px] bg-transparent"}></div>
        </Card>
    )
}