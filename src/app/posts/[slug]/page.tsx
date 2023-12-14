import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from '@/components/post/mdx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { posts, users } from '@/db/schema';
import PostHeader from '@/components/post/header';
import { Suspense } from 'react';
import CommentForm from '@/components/post/comment-form';
import PostComment from '@/components/post/comment';
import { uuid } from 'drizzle-orm/pg-core';



export const generateStaticParams = async () =>
    allPosts.map((post) => ({
        category: post.category,
        slug: post.slug,
    }));

export const generateMetadata = ({
    params,
}: {
    params: { category: string; slug: string };
}) => {
    const post = allPosts.find(
        (p) => p.category === params.category && p.slug === params.slug,
    );
    if (!post) {
        return {};
    }
    return {
        title: post.title,
        description: post.description,
        // openGraph: {
        //     title: post.title,
        //     description: post.description,
        //     type: "article",
        //     url: absoluteUrl(`${post.category}/${post.slug}`),
        //     images: [
        //         {
        //             url: post.thumbnail.url,
        //             width: 1200,
        //             height: 630,
        //             alt: siteConfig.name,
        //         },
        //     ],
        // },
        // twitter: {
        //     card: "summary_large_image",
        //     title: post.title,
        //     description: post.description,
        //     images: [siteConfig.assets.ogImage],
        //     creator: "@alpesdream",
        // },
    };
};

const PostLayout = async ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post.slug === params.slug)


    if (!post) throw Error('No post found')

    const MDXContent = useMDXComponent(post.body.code)
    return (
        <div className="max-w-2xl w-[55vw] mx-auto">
            <PostComment slug={params.slug} />

            <article >
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <Suspense fallback={<p>Loading feed...</p>}>
                    <PostHeader slug={params.slug} />
                </Suspense>

                <Image alt='image' src={post.image} width={600} height={400} className='object-cover w-full aspect-video' />


                <MDXContent components={mdxComponents} />
            </article>

        </div>

    )
}

export default PostLayout