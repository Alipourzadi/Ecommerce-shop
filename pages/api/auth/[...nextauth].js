import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";

import clientPromise from "./lib/mongodb";
import User from "@/models/user";
import db from "@/utils/db";

db.connectDb();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = User.findOne({ email });

        if (user) {
          return signinUser(password, user);
        } else {
          throw new Error("این ایمیل وجود ندارد!");
        }
      },
    }),
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const user = await User.findById(token.sub);
      session.user.id = user._id || token.sub;
      session.user.role = user.role || "user";

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});

async function signinUser(password, user) {
  if (!password) {
    throw new Error("رمز عبور خود را وارد کنید!");
  }
  const testPassword = (async () =>
    await bcrypt.compare(password, user.password))();
  if (!testPassword) {
    throw new Error("ایمیل یا رمز عبور اشتباه است!");
  }
  return user;
}
