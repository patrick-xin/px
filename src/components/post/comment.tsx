import { db } from "@/db";
import CommentForm from "./comment-form";
import { eq } from "drizzle-orm";
import { comments } from "@/db/schema";



const PostComment = async ({ slug }: { slug: string }) => {


    return (
        <div>
            <CommentForm slug={slug} />
        </div>
    );
};

export default PostComment;
