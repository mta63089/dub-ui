import * as React from "react"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode
  className?: string
  headerText: string
  bodyText: string
}

export function CTButton({
  className,
  headerText,
  bodyText,
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(
        "hover:text-foreground hover:border-foreground easeInOut flex cursor-pointer flex-row place-content-center gap-2 rounded-md border border-[#c3cac9] p-6 text-[#C3CAC9] transition-all duration-300 active:bg-[#DFF5F4]",
        className
      )}
      {...props}
    >
      <div className="flex flex-col">
        <div className="text-foreground self-start pb-2 text-lg">
          {headerText}
        </div>
        <div className="w-72 text-left text-sm text-[#545454]">{bodyText}</div>
      </div>
      <div className="flex items-center">
        <ChevronRight className="size-8" />
      </div>
    </button>
  )
}
