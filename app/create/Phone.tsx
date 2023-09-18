import PhoneInner from "@/svg/PhoneInner"
import Phone from "@/svg/Phone";
import {Preview} from "@/app/create/preview";
import * as React from "react";

export const PhoneBox = () => {
    return(
        <div className='bg-white sticky left-0 top-[120px] w-5/12 mx-6 p-10 flex justify-center items-center h-full'>
            <Phone />
            <PhoneInner />
            <Preview />
        </div>
    )
}