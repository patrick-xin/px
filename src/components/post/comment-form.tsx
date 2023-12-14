import { leaveComment } from "lib/actions";

const CommentForm = ({ slug }: { slug: string }) => {


    return (
        <div>
            <form action={leaveComment}>

                <input id="content" name="content" />
                <button type="submit">
                    comment
                </button>
                <input type="hidden" name='slug' id={slug} value={slug} />

            </form>

        </div>
    );
};

export default CommentForm;
