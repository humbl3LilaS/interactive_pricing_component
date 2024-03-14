import {ReactNode} from "react";

export default function BackgroundWrapper({children}: {children: ReactNode[]}) {

    return (
        <div className={"w-screen h-screen bg-bgPattern bg-left-top bg-mobile bg-no-repeat md:flex md:flex-col md:items-center md:justify-center md:bg-largeScreen"}>
            {children}
        </div>
    );
}