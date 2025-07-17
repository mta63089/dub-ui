import React from "react"

interface FileUploadProps extends React.ComponentProps<"input"> {
  className?: string
  children?: React.ReactNode
}

function FileUpload({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <label
      htmlFor="file-upload"
      className="relative flex h-48 w-80 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#3a9289] bg-[#e7e7e7] transition"
    >
      <input id="file-upload" type="file" className="hidden" {...props} />
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-2 h-8 w-8"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" fill="white" />
        <path
          d="M23 16.8301V19.7582C23 20.1465 22.8457 20.5189 22.5711 20.7934C22.2966 21.068 21.9242 21.2222 21.5359 21.2222H11.2875C10.8992 21.2222 10.5269 21.068 10.2523 20.7934C9.97773 20.5189 9.82349 20.1465 9.82349 19.7582V16.8301"
          stroke="#545454"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0718 12.4379L16.4116 8.7778L12.7515 12.4379"
          stroke="#545454"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.4119 8.77776L16.4119 17.5621"
          stroke="#545454"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="mb-2 text-center text-sm text-gray-700">
        Drag and drop file here
      </p>
      <div className="rounded-md bg-black/80 px-4 py-2 transition-colors hover:bg-[#122A26]/80">
        <p className="text-center text-sm font-medium text-white">
          Or browse files
        </p>
      </div>
    </label>
  )
}

export { FileUpload, type FileUploadProps }
