"use client"

import Link from "next/link"
import { ArrowRight, LayoutDashboard, Rocket, ShieldCheck } from "lucide-react"

import { Button } from "@/registry/dubui/ui/button"

export function Hero() {
  return (
    <section className="from-background via-muted/20 to-background w-full bg-gradient-to-b py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build Modern UIs
              <span className="from-primary to-primary bg-gradient-to-r via-purple-500 bg-clip-text text-transparent">
                {" "}
                without the Boilerplate
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
              dub-ui gives you a head start on every project with well-designed,
              accessible components built with Tailwind CSS and modern React.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/docs">
              <Button className="gap-2 px-8">
                Get Started
                <ArrowRight className="h-4 w-4 hover:pl-4" />
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button variant="outline">View Components</Button>
            </Link>
          </div>

          <div className="grid max-w-4xl gap-8 pt-8 md:grid-cols-3">
            <div className="bg-card flex flex-col items-center space-y-3 rounded-lg border p-6">
              <div className="bg-primary/10 rounded-full p-3">
                <LayoutDashboard className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold">Production-Ready</h3>
              <p className="text-muted-foreground text-center text-sm">
                Built with best practices and performance in mind. No fluff,
                just UI that works.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center space-y-3 rounded-lg border p-6">
              <div className="bg-primary/10 rounded-full p-3">
                <Rocket className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold">Developer-First</h3>
              <p className="text-muted-foreground text-center text-sm">
                Built for speed, customization, and DX using Tailwind, Radix UI,
                and shadcn principles.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center space-y-3 rounded-lg border p-6">
              <div className="bg-primary/10 rounded-full p-3">
                <ShieldCheck className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold">Fully Typed</h3>
              <p className="text-muted-foreground text-center text-sm">
                Powered by TypeScript and strict typing for seamless integration
                and IDE support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
