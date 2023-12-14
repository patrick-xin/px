import { relations } from "drizzle-orm";
import { text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core"
import { users } from "./users";
import { posts } from "./posts";

export const comments = pgTable('comments', {
    id: uuid('uuid1').defaultRandom().primaryKey(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
    userId: text('user_id').references(() => users.id),
    postId: uuid('post_id').references(() => posts.id)
});

export const commentsRelations = relations(comments, ({ one }) => ({
    post: one(posts, {
        fields: [comments.id],
        references: [posts.id]
    }),
    user: one(users, {
        fields: [comments.id],
        references: [users.id]
    })
}));
