import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { db } from '@/db'

function PostCard(post: Post) {
    return (
        <div className="mb-8">
            <h2 className="mb-1 text-xl">
                <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.publishedAt} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
            </time>

        </div>
    )
}

export default async function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

    return (
        <div className="mx-auto max-w-xl py-8">
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}