#!/usr/bin/env node
import fs from "fs"
import path from "path"

const args = process.argv.slice(2)

if (!args[0]) {
  console.log("Please provide the name for the component you wish to create")
  console.error("Usage:pnpm dubui:create <component-name>")
  process.exit(1)
}

const componentNameKebab = args[0]
const componentNamePascal = componentNameKebab
  .split("-")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join("")

const filePaths = {
  component: path.join("registry", "dubui", "ui", `${componentNameKebab}.tsx`),
  doc: path.join("content", "docs", "components", `${componentNameKebab}.mdx`),
  example: path.join(
    "registry",
    "dubui",
    "examples",
    `${componentNameKebab}-demo.tsx`
  ),
  registryExamples: path.join("registry", "registry-examples.ts"),
  registryUI: path.join("registry", "registry-ui.ts"),
}

// --- Step 1: Create Component File
const componentCode = `import React from "react"

import { cn } from "../utils"

interface ${componentNamePascal}Props extends React.ComponentProps<"input"> {
  className?: string
  children?: React.ReactNode
}

function ${componentNamePascal}({ children, className, ...props }: ${componentNamePascal}Props) {
  return (
    <input className={cn("flex", className)} {...props}>
      {children}
    </input>
  )
}

export { ${componentNamePascal}, type ${componentNamePascal}Props }
`

fs.mkdirSync(path.dirname(filePaths.component), { recursive: true })
fs.writeFileSync(filePaths.component, componentCode)

// --- Step 2: Create MDX Docs
const mdxContent = `---
title: ${componentNamePascal}
description: Displays the ${componentNameKebab} component
featured: false
component: true
---

<ComponentPreview name="${componentNameKebab}-demo" description="${componentNameKebab} component preview" />

## Installation

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="${componentNameKebab}" title="components/ui/${componentNameKebab}.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

## Usage

\`\`\`tsx
import { ${componentNamePascal} } from "@/components/ui/${componentNameKebab}"
\`\`\`

\`\`\`tsx
<${componentNamePascal}>File Upload</${componentNamePascal}>
\`\`\`
`

fs.mkdirSync(path.dirname(filePaths.doc), { recursive: true })
fs.writeFileSync(filePaths.doc, mdxContent)

// --- Step 3: Create Example Component
const exampleCode = `import { ${componentNamePascal} } from "../ui/${componentNameKebab}"

export default function ${componentNamePascal}Demo() {
  return (
    <div className="flex flex-wrap place-content-center items-center gap-2 md:flex-row">
      <${componentNamePascal} />
    </div>
  )
}
`

fs.mkdirSync(path.dirname(filePaths.example), { recursive: true })
fs.writeFileSync(filePaths.example, exampleCode)

// --- Step 4: Modify registry-examples.ts
const registryExamplesContent = fs.readFileSync(
  filePaths.registryExamples,
  "utf8"
)
const newExampleEntry = `  {
    name: "${componentNameKebab}-demo",
    type: "registry:example",
    registryDependencies: ["${componentNameKebab}"],
    files: [
      {
        path: "examples/${componentNameKebab}-demo.tsx",
        type: "registry:example",
      },
    ],
  },\n`

const updatedRegistryExamples = registryExamplesContent.replace(
  /export const examples: Registry\[\"items\"\] = \[/,
  (match) => `${match}\n${newExampleEntry}`
)

fs.writeFileSync(filePaths.registryExamples, updatedRegistryExamples)

// --- Step 5: Modify registry-ui.ts
const registryUIContent = fs.readFileSync(filePaths.registryUI, "utf8")
const newUIEntry = `  {
    name: "${componentNameKebab}",
    type: "registry:ui",
    files: [
      {
        path: "ui/${componentNameKebab}.tsx",
        type: "registry:ui",
      },
    ],
  },\n`

const updatedRegistryUI = registryUIContent.replace(
  /export const ui: Registry\[\"items\"\] = \[/,
  (match) => `${match}\n${newUIEntry}`
)

fs.writeFileSync(filePaths.registryUI, updatedRegistryUI)

console.log(`✅ Component "${componentNameKebab}" created successfully.`)
