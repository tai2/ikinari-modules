import urlResolve from "rollup-plugin-url-resolve"
import resolve from "@rollup/plugin-node-resolve"
import cjs from "rollup-plugin-cjs-es"

export default {
  plugins: [
    resolve(),
    urlResolve(),
    cjs({
      nested: true,
      exportType: "default",
    }),
  ],
}
