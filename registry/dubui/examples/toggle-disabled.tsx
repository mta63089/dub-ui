import { Underline } from "lucide-react"

import { Toggle } from "@/registry/dubui/ui/toggle"

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}
