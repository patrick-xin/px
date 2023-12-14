import { type Options } from "rehype-pretty-code"

export const rehypePrettyCodeOptions: Partial<Options> = {
    theme: { dark: 'material-theme', light: "github-light" },
    keepBackground: false,
    defaultLang: "js"
}