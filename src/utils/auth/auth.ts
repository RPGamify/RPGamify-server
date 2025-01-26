import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../../db";
import {
  account,
  session,
  user,
  verification,
} from "../../db/schema/auth-schema";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    // We're using Drizzle as our database
    provider: "sqlite",
    schema: {
      user,
      session,
      verification,
      account,
    },
  }),
  emailAndPassword: {
    enabled: true, // If you want to use email and password auth
  },
  trustedOrigins: ["http://localhost:5173"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
