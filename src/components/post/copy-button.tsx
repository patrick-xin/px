'use client'

import { useEffect, useState } from "react";

const CodeCopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);
    const onClick = () => {
        navigator.clipboard.writeText(code)
        setCopied(true);
    };
    useEffect(() => {
        const timer = setTimeout(() => setCopied(false), 2000);

        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <button className="absolute text-sm right-2 top-1.5 z-50" onClick={onClick}>
            {copied ? 'Copied' : 'Copy'}
        </button>
    )
}

export default CodeCopyButton