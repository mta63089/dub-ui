import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer w-80 rounded-[7px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold duration-300 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/80",
        destructive:
          "hover:text-muted bg-muted text-destructive border-1 border-destructive hover:bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background border-destructive shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary border border-primary bg-white",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-lg h-14 px-12 py-2 has-[>svg]:px-3",
        condensed: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode
  className: string
  asChild: boolean
  header: string
  body: string
}

function Button({
  header,
  body,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        "relative flex flex-shrink-0 flex-grow-0 flex-col items-center justify-start gap-2",
        { className }
      )}
      {...props}
    >
      <div className="w-60 flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-black/20">
        Yes, I do
      </div>
      <div className="h-9 w-60 flex-shrink-0 flex-grow-0 text-left text-sm text-[#545454]">
        I&amp;ll check my old provider&amp;s portal (like TIAA or Fidelity) for
        my statement.
      </div>
    </Comp>
  )
}

export { Button, buttonVariants }
