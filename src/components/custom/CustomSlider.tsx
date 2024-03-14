import {Slider} from "@/components/ui/slider.tsx";
import {twMerge} from "tailwind-merge";

export default function CustomSlider({className, onChangePos}: { className?: string, onChangePos: (pos: number ) => void }) {

    const sliderHandler = (pos: number[]) => {
        onChangePos(pos[0])
    }

    return (
        <Slider defaultValue={[2]} max={4} step={1} className={twMerge("max-w-[30rem] mx-auto", className)} onValueChange={sliderHandler}/>
    );
}