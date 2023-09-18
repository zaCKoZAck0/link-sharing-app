"use client"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva("border rounded-default bg-white text-button flex justify-between items-center py-[12px] px-[16px] font-normal",{
    variants: {
        variant: {
            default: 'border-idle',
            focus: 'border-primary shadow-active transition-shadow',
            error: 'border-destructive'
        }
    }
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, children,...props }, ref) => {
    const [focus, setFocus] = React.useState(false)
    const [variant, setVariant] = React.useState<"default" | "focus" | 'error' | null | undefined>('default');

  React.useEffect(() => {
    (error && !focus)?
    setVariant('error'):
    setVariant(focus ? 'focus' : 'default');
  }, [focus, error]);

    return (
        <div
        className={cn(inputVariants({
            variant
        }), className)}
        >
            <div className={`flex items-center ${(error && !focus)?'w-5/6':'w-full'}`}>
                {children}
      <input
        type={type}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        className={cn(
          "flex px-[12px] w-full bg-white border-none transition-colors  file:border-0 file:bg-transparent file:font-medium placeholder:text-placeholder placeholder:opacity-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        )}
        ref={ref}
        {...props}
      />
      </div>
      {(!focus)&&<div className="text-destructive w-1/6 text-right">
        {error}
      </div>
  }
      </div>
    )
}
)
Input.displayName = "Input"

export { Input }