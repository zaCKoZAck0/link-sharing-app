"use client"
import { Button } from '@/components/button'
import Image from 'next/image'
import { Input } from '@/components/input'
import React from 'react'
import {
  DndContext,
  closestCenter, DragEndEvent
} from "@dnd-kit/core";

import {
  arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import {SortableItem} from "@/app/create/links/sortable";

export default function Home() {
  const [option, setOption] = React.useState<number | string | null | undefined>(null)
  const [lang, setLang] = React.useState(["JavaScript","Python", "Java"])

  function handleDragEnd(event: DragEndEvent) {
    console.log("Drag end called")
    const {active, over} = event;
    if(active.id !== over?.id) {
      setLang((items)=>{
        const activeIndex = items.indexOf(active.id as string)
        // @ts-ignore
        const overIndex = items.indexOf(over as string)
        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }

  return (
    <main className="">

    {/*<Select>*/}
    {/*<SelectTrigger>Select</SelectTrigger>*/}
    {/*<SelectBody setOption={setOption}>*/}
    {/*  <Option value={2}>Github</Option>*/}
    {/*  <Option value={1} isDefaultValue>LinkedIn</Option>*/}
    {/*</SelectBody>*/}
    {/*</Select>*/}
    </main>
  )
}
