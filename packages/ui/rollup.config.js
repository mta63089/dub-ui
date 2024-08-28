import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/index.js"
  },
  external: ["react/jsx-runtime"],
  plugins: [typescript()]
}
