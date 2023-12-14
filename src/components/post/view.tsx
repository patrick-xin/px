'use client';

import { incrementViews } from "lib/actions";
import { useEffect } from "react";

const PostViews = ({ slug }: { slug: string }) => {
    useEffect(() => {
        incrementViews(slug)
    }, [slug])
    return <div>PostViews</div>;
};

export default PostViews;
