import { DefaultSession } from "next-auth";

// Extend the DefaultSession from the user with access_token
export type ExtendedUser = DefaultSession["user"] & {
    accessToken : String;
}

declare module "next-auth" {
    // Extend the user interface with access_token
    interface User {
        token: String;
    }

    // Extend session interface with all the extender user
    interface Session {
        user: ExtendedUser;
    }
}
