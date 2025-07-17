interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.min(
    Math.max((currentStep / totalSteps) * 100, 0),
    100
  )

  return (
    <div className="h-2 w-full overflow-hidden border border-[#d9d9d9] bg-white">
      <div
        className="h-full bg-[#d9d9d9] transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
