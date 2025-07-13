import { Illustrations } from "../ui/illustrations"
import { Label } from "../ui/label"

export default function IllustrationsDemo() {
  return (
    <div className="flex w-full flex-row gap-4">
      <div className="flex flex-col place-content-center gap-4 text-lg font-bold">
        <Label className="flex self-center">puzzlePerson</Label>
        <div className="flex flex-row gap-2 self-center">
          <Illustrations.puzzlePerson className="size-24" type="outline" />
          <Illustrations.puzzlePerson className="size-24" type="grayscale" />
          <Illustrations.puzzlePerson className="size-24" type="color" />
        </div>
        <Label className="flex self-center">magnifyingGlass</Label>
        <div className="flex flex-row justify-evenly gap-2">
          <Illustrations.magnifyingGlass className="size-24" type="outline" />
          <Illustrations.magnifyingGlass className="size-24" type="grayscale" />
          <Illustrations.magnifyingGlass className="size-24" type="color" />
        </div>
        <Label className="flex self-center">niceJob</Label>
        <div className="flex flex-row justify-evenly gap-2">
          <Illustrations.niceJob className="size-24" type="outline" />
          <Illustrations.niceJob className="size-24" type="grayscale" />
          <Illustrations.niceJob className="size-24" type="color" />
        </div>
      </div>
      <div className="flex flex-col place-content-center gap-4 text-lg font-bold">
        <Label className="flex self-center">moneyParachute</Label>
        <div className="flex flex-row gap-2 self-center">
          <Illustrations.moneyParachute className="size-24" type="outline" />
          <Illustrations.moneyParachute className="size-24" type="grayscale" />
          <Illustrations.moneyParachute className="size-24" type="color" />
        </div>
        <Label className="flex self-center">trumpetGuy</Label>
        <div className="flex flex-row justify-evenly gap-2">
          <Illustrations.trumpetGuy className="size-24" type="outline" />
          <Illustrations.trumpetGuy className="size-24" type="grayscale" />
          <Illustrations.trumpetGuy className="size-24" type="color" />
        </div>
        <Label className="flex self-center">chooChoo</Label>
        <div className="flex flex-row justify-evenly gap-2">
          <Illustrations.chooChoo className="size-24" type="outline" />
          <Illustrations.chooChoo className="size-24" type="grayscale" />
          <Illustrations.chooChoo className="size-24" type="color" />
        </div>
      </div>
    </div>
  )
}
