"use client"

import { useState } from "react"
import { MinusCircle, PlusCircle } from "lucide-react"

import { Button } from "../ui/button"
import { ProgressBar } from "../ui/progress-bar"

export default function ProgressBarDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="flex min-w-full flex-wrap place-content-center items-center gap-2 md:flex-row">
      <ProgressBar currentStep={currentStep} totalSteps={10} />
      <div className="flex w-1/2 flex-row place-content-center gap-4 py-4">
        <Button
          className="size-8"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          <MinusCircle />
        </Button>
        <Button
          className="size-8"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          <PlusCircle />
        </Button>
      </div>
    </div>
  )
}
