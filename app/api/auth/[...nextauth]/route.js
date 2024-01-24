import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        await connectToDB();
        const sessionUser = await User.findOne({
          email: session.user.email,
        });
        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.error("Error during session callback:", error);
        throw error;
      }
    },
    async signIn({ profile, account, isNewUser }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({
          email: profile.email,
        });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        // Custom logic based on isNewUser or other parameters

        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        throw error;
      }
    },
    // Add other callbacks as needed
  },
});

export { handler as GET, handler as POST };
