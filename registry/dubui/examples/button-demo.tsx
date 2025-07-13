import { Button } from "@/registry/dubui/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap place-content-center items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button size="condensed">Condensed</Button>
    </div>
  )
}
