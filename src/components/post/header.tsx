import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import PostViews from "./view";
import PostLikes from "./like";
import { sleep } from "lib/utils";
import SignIn from "../sign-in";


const PostHeader = async ({ slug }: { slug: string }) => {
    await sleep()
    const stats = await db.query.posts.findFirst({ where: eq(posts.slug, slug) })


    return (
        <div>
            <SignIn />
            likes:  {stats?.like_count ?? 0}
            views:{stats?.view_count ?? 0}
            <PostViews slug={slug} />
            <PostLikes slug={slug} likes={stats?.like_count ?? 0} />
        </div>
    );
};

export default PostHeader;
