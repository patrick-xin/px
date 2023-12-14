'use client';

import { likePost } from "@/lib/actions";


const PostLikes = ({ likes, slug }: { likes: number, slug: string }) => {
    return <div>
        {likes}
        <button onClick={() => { likePost({ likes, slug }) }}>like</button>
    </div>;
};

export default PostLikes;
