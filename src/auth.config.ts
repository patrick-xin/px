import type { NextAuthConfig } from 'next-auth';
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from '@/db';

export const authConfig = {
    providers: [],
    adapter: DrizzleAdapter(db),
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;
            return session;
        }
    },
} satisfies NextAuthConfig;