import { Bold } from "lucide-react"

import { Toggle } from "@/registry/dubui/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
