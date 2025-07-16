import React from "react"

import { cn } from "../utils"

interface FileUploadProps extends React.ComponentProps<"input"> {
  className?: string
  children?: React.ReactNode
}

function FileUpload({ children, className, ...props }: FileUploadProps) {
  return (
    <input className={cn("flex", className)} {...props}>
      {children}
    </input>
  )
}

export { FileUpload, type FileUploadProps }
