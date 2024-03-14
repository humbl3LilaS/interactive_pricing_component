import Card from "@/components/custom/Card.tsx";
import CustomSlider from "@/components/custom/CustomSlider.tsx";
import {BillingOption} from "@/components/custom/BillingOption.tsx";
import {useCallback, useContext, useState} from "react";
import {useBillData} from "@/context/useBillData.ts";

export default function RangeSelector(){
    const [sliderPos, setSliderPos] = useState(3)
    const [isYearly, setIsYearly] = useState(false);

    const data = useContext(useBillData);

    const priceCalculator = (value: number) => {
        return isYearly ? (value - (value * 0.25)) : value
    }


    const toggleHandler = useCallback((value: boolean) => {
        setIsYearly(value)
    } ,[])


    return (
        <Card className={"max-w-largeScreen rounded-t-2xl md:grid md:grid-cols-2 md:px-16"}>
            <h2 className={"text-small tracking-widest text-center text-gray uppercase font-bold md:text-left"}>{data[sliderPos].context}</h2>
            <CustomSlider className={"my-12 md:col-span-2 md:max-w-[unset]"} onChangePos={setSliderPos}/>
            <p className={"mb-8 flex items-center justify-center md:row-end-2 md:col-end-3 md:mb-0 md:justify-end"}>
                <span className={"text-3xl font-extrabold"}>${priceCalculator(data[sliderPos].price).toFixed(2)}</span>
                <span className={"text-gray"}>/month</span>
            </p>
            <BillingOption className={"md:col-span-2"} onToggle={toggleHandler}/>
        </Card>
    )
}

