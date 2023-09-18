"use client"
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import {Button} from '@/components/button';
import {closestCenter, DndContext, DragEndEvent} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {SortableItem} from "@/app/create/links/sortable";
import {restrictToParentElement, restrictToVerticalAxis,} from '@dnd-kit/modifiers';
import InfoLink from "@/svg/InfoLink";

export default function LinkPage() {
    const [option, setOption] = React.useState<number | string | null | undefined>(null)
    const [ids, setIds] = React.useState<string[]>([])
    const [platformName, setPlatformName] = React.useState<string[]>([])

    function removeItem(index: number) {
        setIds((prev) => {
            // Create a new array without the element at the specified index
            return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
        setPlatformName((prev) => {
            // Create a new array without the element at the specified index
            return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
    }

    function addItem() {
        setIds((prev) => {
            // Create a new array by spreading the previous items and adding the new item
            const newIds = [...prev, uuid()];
            return newIds
        });
        setPlatformName((prev) => {
            // Create a new array by spreading the previous items and adding the new item
            return [...prev, "Github"];
        });

    }


    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        if(active.id !== over?.id) {
            var activeIndex: number;
            var overIndex: number;
            setIds((items)=>{
                activeIndex = items.indexOf(active.id as string)
                // @ts-ignore
                overIndex = items.indexOf(over.id as string)
                return arrayMove(items, activeIndex, overIndex)
            });
            setPlatformName((items)=>{
                return arrayMove(items, activeIndex, overIndex)
            });


        }
    }
    return(
                    <>
                        <h2 className='mb-2 text-3xl text-heading font-bold'>Customize your links</h2>
                        <h3 className='mb-10 text-default'>Add/edit/remove links below and then share all your profiles with the world!</h3>
                        <Button onClick={addItem} className='w-full mb-6 bg-white' variant='secondary'>+ Add new link</Button>
                        <div className='text-center flex-1 p-4 rounded-xl flex flex-col items-center justify-center'>
                            <DndContext
                                modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext items={ids} strategy={verticalListSortingStrategy}>
                                    {
                                        ids.map((id, index)=> <SortableItem id={id} index={index} platform={platformName[index]} removeItem={removeItem} key={id} />)
                                    }
                                </SortableContext>
                            </DndContext>
                            {(platformName.length ===0) && <>
                                <InfoLink className='mb-10'/>
                                <h2 className='text-3xl text-heading mb-6 font-bold'>Let’s get you started</h2>
                                <h3 className='max-w-md text-default'>Use the “Add new link” button to get started. Once
                                    you have more than one link, you can reorder and edit them. We’re here to help you
                                    share your profiles with everyone!</h3>
                            </>}
                        </div>
                    </>

    )
}
