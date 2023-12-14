import { relations } from "drizzle-orm";
import { text, timestamp, pgTable, serial, integer } from "drizzle-orm/pg-core"
import { users } from "./users";
import { posts } from "./posts";

export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
    userId: text('user_id').references(() => users.id),
    postId: integer('post_id').references(() => posts.id)
});

export const commentsRelations = relations(comments, ({ one }) => ({
    post: one(posts, {
        fields: [comments.postId],
        references: [posts.id]
    }),
    user: one(users, {
        fields: [comments.userId],
        references: [users.id]
    })
}));
