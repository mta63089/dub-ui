import { CTButton } from "../ui/clickthrough-button"

export default function CTButtonDemo() {
  return (
    <div className="flex flex-wrap place-content-center items-center gap-2 md:flex-row">
      <CTButton
        headerText="Yes, I do"
        bodyText="  I&amp;ll check my old provider&amp;s portal (like TIAA or Fidelity) for my statement. "
      />
    </div>
  )
}
