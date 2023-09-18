import {useSortable} from "@dnd-kit/sortable";
import { SelectTrigger, Select, SelectBody, Option, SelectProvider } from '@/components/dropdown'
import {CSS} from "@dnd-kit/utilities"
import React from "react";
import DragIcon from "@/svg/DragIcon";
import {Input} from "@/components/input";
import UrlIcon from "@/svg/UrlIcon";
import {Platforms} from "@/lib/static/platforms";
import * as PlatformIcons from "@/svg/platforms"


export function SortableItem({id, index, removeItem, platform}:{id:string, index: number, removeItem: (index: number) => void, platform: string}){
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const [option, setOption] = React.useState<string | number | null | undefined>(null);

    function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        removeItem(index)
    }

    return(
        <div ref={setNodeRef} style={style} className={`${isDragging?"bg-[#EFEBFF]":"bg-background"} w-full flex-1 text-left bg-background p-5 mb-6 rounded-xl`}>
            <div>
                <div className='flex items-center justify-between text-default pb-3' >
                    <div {...attributes} {...listeners} className='flex items-center gap-2 font-bold text-[16px]'><DragIcon />{`Link #${index+1}`}</div>
                    <button onClick={onClick} className='text-default hover:text-red-500'>remove</button>
                </div>
                <label className='text-xs'>
                    Platform
                </label>
                <Select>
                <SelectTrigger>Select</SelectTrigger>
                <SelectBody setOption={setOption}>
                    {
                        Object.keys(Platforms).map((p:string)=>{
                            // @ts-ignore
                            const Icon = PlatformIcons[p]
                            // @ts-ignore
                            return <Option isDefaultValue={platform===p} key={p} value={p}><Icon />{Platforms[p].name}</Option>
                        })
                    }
                </SelectBody>
                </Select>
                <label className='text-xs mt-4'>
                    Link
                </label>
                {/*// @ts-ignore*/}
                <Input placeholder={Platforms[option]?.placeholder}>
                    <UrlIcon />
                </Input>
            </div>
        </div>
    )
}