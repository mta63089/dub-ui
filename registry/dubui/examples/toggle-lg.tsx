import { Italic } from "lucide-react"

import { Toggle } from "@/registry/dubui/ui/toggle"

export default function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
