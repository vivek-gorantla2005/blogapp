import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectDB } from "@/utils/db";

const handler = nextAuth({
    providers:[
        GoogleProvider({
            clientId :process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ],
    callbacks:{
        async session({session,token}){
            const sessionUser = await User.findOne({email :session.user.email})
            session.user.id = sessionUser._id;
            return session
        },
        async signIn({profile}){
            console.log(profile)
            try{
                await connectDB()
                const userExists = await User.findOne({email: profile.email})
                if(!userExists){
                    const user = await User.create({
                        name: profile.name,
                        email: profile.email,
                        image: profile.picture
                    })
                }
                return true
            }catch(err){
                console.log(err)
            }
        }
    }
})

export {handler as GET,handler as POST}