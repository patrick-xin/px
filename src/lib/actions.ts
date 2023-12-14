'use server';

import { db } from "@/db";
import { comments, posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { sleep } from "./utils";

export async function incrementViews(slug: string) {
    const data = await db.query.posts.findFirst({ columns: { view_count: true }, where: eq(posts.slug, slug) })
    const views = data?.view_count ?? 0;
    await db.update(posts).set({ view_count: views + 1 }).where(eq(posts.slug, slug))

    revalidatePath(`/posts/${slug}`)
}

export async function likePost({ slug, likes }: { slug: string, likes: number }) {
    await sleep()
    await db.update(posts).set({ like_count: likes + 1 }).where(eq(posts.slug, slug));

    revalidatePath(`/posts/${slug}`)
}

export async function leaveComment(formData: FormData) {


    const content = formData.get('content')?.toString()
    const slug = formData.get('slug') as string

    // await db.insert(comments).values({ content, postId: "391b0645-123a-4284-9faa-7c90dd78a02d", userId: "c79327ee-9a22-11ee-b9d1-0242ac120002" })
    revalidatePath(`/posts/${slug}`)
}