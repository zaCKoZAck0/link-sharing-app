"use client"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


// Create a context
interface SelectContextProps {
  selectedValue?: number | string | null;
  selectedDisplay?: number | string | null | React.ReactNode;
  setSelectedDisplay?: React.Dispatch<React.SetStateAction<number | string | null | React.ReactNode>>
  setSelectedValue?: React.Dispatch<React.SetStateAction<number | string | null>>;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectContext = React.createContext<SelectContextProps>({
    selectedDisplay: null,
    selectedValue: null,
    setSelectedDisplay: undefined,
    setSelectedValue: undefined,
    open: false,
    setOpen: undefined
});

// Create a provider component
export const SelectProvider = ({ children }:{children: React.ReactNode}) => {
  const [selectedValue, setSelectedValue] = React.useState<number | string | null>(null);
  const [selectedDisplay, setSelectedDisplay] = React.useState<number | string | null | React.ReactNode>(null);
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ selectedValue, setSelectedValue, open, setOpen, selectedDisplay,setSelectedDisplay }}>
      {children}
    </SelectContext.Provider>
  );
}

const useSelectContext = () => {
  return React.useContext(SelectContext);
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

interface SelectProps extends React.AllHTMLAttributes<HTMLDivElement>{
}

interface OptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    value: string | number;
    isDefaultValue?: boolean;
}

interface SelectBodyProps extends React.AllHTMLAttributes<HTMLDivElement>{
    setOption: React.Dispatch<React.SetStateAction<string | number | null | undefined>>;
}

const DropStates = cva("flex items-center justify-between border px-[16px] py-[12px] text-button bg-white rounded-default",{
    variants: {
        state: {
            default: 'border-idle text-placeholder',
            open: 'border-primary shadow-active transition-shadow text-primary',
        }
    }
})


const Select = ({children, ...props}:SelectProps) =>{
    return(
        <SelectProvider>
        <div className="relative">
            {children}
        </div>
        </SelectProvider>
    )
}

const SelectBody = ({children, setOption, ...props}: SelectBodyProps) => {
    const {open} = useSelectContext()
        const {selectedValue} = useSelectContext()
    React.useEffect(()=>{
        setOption(selectedValue)
    },[selectedValue])
    return(<div
    className={`bg-white overflow-y-scroll max-h-52 absolute w-full z-[999] shadow-secondary my-2 rounded-default px-[16px] py-[12px] border border-idle child:border-b child:border-b-idle child:py-[12px] last-child:border-none last-child:pb-0 first-child:pt-0 child-hover:text-primary child-hover:cursor-pointer ${open?
        '':
        'hidden'}`}
    >
        {children}
    </div>)
}

const Option = ({ value , children, isDefaultValue, ...props }: OptionProps) => {
    const {setSelectedValue, selectedValue, setOpen, setSelectedDisplay} = useSelectContext()

    React.useEffect(()=>{
        if(isDefaultValue){
            setSelectedValue && setSelectedValue(value);
            setSelectedDisplay && setSelectedDisplay(children)
        }
    },[])

  function clicked(e: any) {
    e.preventDefault();
    setSelectedValue && setSelectedValue(value);
    setSelectedDisplay && setSelectedDisplay(children)
    setOpen && setOpen(false)
  }

  return (
    <button
    type="button"
    onClick={(e) => clicked(e)} // Invoke the clicked function
    className={`flex w-full items-center gap-2 justify-start ${selectedValue === value ? 'text-primary' : ''}`}
    >
      {children}
    </button>
  );
};


const SelectTrigger = ({children, onClick, onBlur, ...prop}:SelectTriggerProps) => {
    const {open, setOpen, selectedDisplay} = useSelectContext()
    const ref = React.useRef<HTMLDivElement>(null)
    const [state, setState] = React.useState<"default" | "open">("default")
    React.useEffect(()=>{
        open ? setState("open") : setState("default");
    //     const checkIfClickedOutside = (e: { target: any }) => {
    // if (open && ref.current && !ref.current.contains(e.target)) {
    //     setOpen && setOpen(false)
    // }
    // }

    // document.addEventListener("mousedown", checkIfClickedOutside)

    // return () => {
    // document.removeEventListener("mousedown", checkIfClickedOutside)
    // }
    },[open, setOpen])

    const clicked = (onClick: React.MouseEventHandler<HTMLButtonElement> | undefined, e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>{
        e.preventDefault();
        setOpen && setOpen((state:boolean)=>(!state))
        onClick && onClick(e)
    }
    return(
    <div 
    ref={ref}
    onClick={(e)=>clicked(onClick, e as any)}
    className={
        cn(DropStates({
            state
        }))
    }>
        <div className='flex items-center justify-center gap-2'>
        {
            selectedDisplay?selectedDisplay:children
        }
        </div>
        <div
        className={
            ` transition-transform ${open?
            '':' rotate-180'}`
        }
        >
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2"/>
        </svg>
        </div>
    </div>
    )
}

export {
    Select,
    SelectTrigger,
    SelectBody,
    Option
}

