import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  redirect: "/home",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "user@domain" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        //look up a user as a singleton
        //ie: { id: "1", email: "user@domain" }
        if (user) {
          // returned user is stored in the JWT
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
const config = {
  credentials: {
    accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY,
  },
  region: process.env.NEXT_AUTH_AWS_REGION,
};

export default (req, res) => NextAuth(req, res, options);
