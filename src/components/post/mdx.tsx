
import Link from "next/link"
import Children from 'react-children-utilities'

import CodeCopyButton from "./copy-button"

import type { MDXComponents } from "mdx/types"

export const mdxComponents: MDXComponents = {
    h2: ({ children }) => {
        return (
            <h2
                data-heading
                className="group my-4 mb-0 flex scroll-mt-20 items-center font-heading text-2xl font-bold capitalize 
        tracking-wide lg:mt-8 lg:text-2xl"
            >
                {children}
            </h2>
        );
    },
    h3: ({ children }) => {
        return (
            <h3

                data-heading
                className="group my-4 flex lg:mt-8 scroll-mt-20 items-center font-code text-xl font-semibold capitalize"
            >
                {children}
            </h3>
        );
    },
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    pre: ({ children, ...props }) => {
        const code = Children.onlyText(children)
        return <pre {...props}>
            <CodeCopyButton code={code} />
            {children}
        </pre>
    },
    p: ({ children }) => <p className="py-6">{children}</p>,
}