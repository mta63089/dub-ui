import { ChevronRightIcon } from "lucide-react"

import { Button } from "@/registry/dubui/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="secondary" size="icon" className="size-8">
      <ChevronRightIcon />
    </Button>
  )
}
