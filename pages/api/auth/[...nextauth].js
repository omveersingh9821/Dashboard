import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: '1091834768364-2b31urjsj5pp9a6o3mfbi4g6oihp5ego.apps.googleusercontent.com',
        clientSecret:'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'
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)


GoogleProvider({
    clientId: '1091834768364-2b31urjsj5pp9a6o3mfbi4g6oihp5ego.apps.googleusercontent.com',
    clientSecret:'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'
})