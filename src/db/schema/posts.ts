import { text, integer, pgTable, uuid } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm";
import { comments } from "./comments";

export const posts = pgTable('posts', {
    id: uuid('uuid1').defaultRandom(),
    slug: text('slug').unique().primaryKey().notNull(),
    view_count: integer('view_count').default(0),
    like_count: integer('like_count').default(0),
});

export const postsRelations = relations(posts, ({ many }) => ({
    comments: many(comments),
}));


