"use client"

import * as React from "react"
import { ArrowLeft, HouseIcon } from "lucide-react"
import { z } from "zod"

import ManifestLogo from "@/components/manifest-logo"
import { Button } from "@/registry/dubui/ui/button"
import { Input } from "@/registry/dubui/ui/input"
import { Label } from "@/registry/dubui/ui/label"
import { Textarea } from "@/registry/dubui/ui/textarea"

import { ProgressBar } from "../ui/progress-bar"

const exampleFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

export function ExampleForm() {
  const [pending, setPending] = React.useState(false)
  const [state, setState] = React.useState({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    success: false,
    errors: {
      name: "",
      email: "",
      message: "",
    },
  })

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      const result = exampleFormSchema.safeParse(data)

      if (!result.success) {
        setState({
          ...state,
          errors: Object.fromEntries(
            Object.entries(result.error.flatten().fieldErrors).map(
              ([key, value]) => [key, value?.[0] ?? ""]
            )
          ) as Record<keyof typeof state.errors, string>,
        })
        setPending(false)
        return
      }

      setPending(false)
    },
    [state]
  )

  return (
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
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-sm place-content-center py-4"
      >
        <div className="p-4">
          <h3 className="mb-4 text-center text-xl">
            Got it! We will just need a few details to help find your old
            account
          </h3>
          <div className="flex flex-col gap-8">
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.name}
            >
              <Label
                htmlFor="name"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                Old employer name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Lee Robinson"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                disabled={pending}
                aria-invalid={!!state.errors?.name}
                aria-errormessage="error-name"
                defaultValue={state.defaultValues.name}
              />
              {state.errors?.name && (
                <p id="error-name" className="text-destructive text-sm">
                  {state.errors.name}
                </p>
              )}
            </div>
            <div
              className="group/field flex flex-row gap-2"
              data-invalid={!!state.errors?.email}
            >
              <Label className="group-data-[invalid=true]/field:text-destructive">
                Approximate employment years
              </Label>
              <div className="flex w-1/3 flex-col">
                <Input
                  id="start-year"
                  name="Start Year"
                  placeholder="leerob@acme.com"
                  className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                  disabled={pending}
                  aria-invalid={!!state.errors?.email}
                  aria-errormessage="error-email"
                  defaultValue={state.defaultValues.email}
                />
              </div>
              {state.errors?.email && (
                <p id="error-email" className="text-destructive text-sm">
                  {state.errors.email}
                </p>
              )}
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.message}
            >
              <Label
                htmlFor="message"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                Message <span aria-hidden="true">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                disabled={pending}
                aria-invalid={!!state.errors?.message}
                aria-errormessage="error-message"
                defaultValue={state.defaultValues.message}
              />
              {state.errors?.message && (
                <p id="error-message" className="text-destructive text-sm">
                  {state.errors.message}
                </p>
              )}
            </div>
          </div>
          <Button>Search</Button>
        </div>
      </form>
    </div>
  )
}
