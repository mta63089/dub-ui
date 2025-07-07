import { Italic } from "lucide-react"

import { Toggle } from "@/registry/dubui/ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}
