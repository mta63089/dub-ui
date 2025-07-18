import { type Registry } from "shadcn/registry"

export const blocks: Registry["items"] = [
  {
    name: "example-form",
    type: "registry:block",
    description: "A form",
    dependencies: ["zod"],
    registryDependencies: ["card", "button", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/example-form.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "mobile-header",
    type: "registry:block",
    description: "A header for mobile version of a web app",
    dependencies: ["zod"],
    registryDependencies: ["card", "button", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/mobile-header.tsx",
        type: "registry:block",
      },
    ],
  },
]
