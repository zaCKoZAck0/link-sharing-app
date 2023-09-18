import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center gap-1 justify-center rounded-default text-button font-semibold transition-colors focus-visible:outline-none py-button focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-25",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-active",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:opacity-90",
        secondary:
          "border border-primary text-primary bg-white hover:bg-accent",
        ghost: "text-default hover:text-primary",
          activeGhost: 'bg-accent text-primary',
        link: "text-primary p-0",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }