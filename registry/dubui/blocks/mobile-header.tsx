import { ArrowLeft, HouseIcon } from "lucide-react"

import ManifestLogo from "@/components/manifest-logo"

export default function MobileHeader() {
  return (
    <>
      <div className="flex w-full flex-row justify-evenly border-b-2 border-gray-300">
        <div className="h-full w-1/3">
          <ArrowLeft />
        </div>
        <div className="h-full w-1/3">
          <ManifestLogo />
        </div>
        <div className="h-full w-1/3">
          <HouseIcon />
        </div>
      </div>
    </>
  )
}
