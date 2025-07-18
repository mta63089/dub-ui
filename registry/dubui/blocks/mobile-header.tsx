import { ArrowLeft, HouseIcon } from "lucide-react"

import ManifestLogo from "@/components/manifest-logo"

import { ProgressBar } from "../ui/progress-bar"

export default function MobileHeader() {
  return (
    <>
      <div className="mx-auto my-8 h-[720px] w-[360px] border-2 border-gray-200">
        <div className="flex w-full flex-row place-content-center justify-between py-6">
          <div className="flex h-full w-1/4 justify-center">
            <ArrowLeft />
          </div>
          <div className="flex h-full w-1/2 justify-center">
            <ManifestLogo />
          </div>
          <div className="flex h-full w-1/4 justify-center">
            <HouseIcon />
          </div>
        </div>
        <ProgressBar currentStep={4} totalSteps={9} />
      </div>
    </>
  )
}
