import { NextResponse } from "next/server";
import Blog from "@/models/newBlog";
import { connectDB } from "@/utils/db";
export async function GET(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const userid = url.searchParams.get('userid');

    if(userid){
        console.log(userid)
        await connectDB();
        const user = await Blog.find({author: userid})
        if(user){
            console.log(user)
            return NextResponse.json(user)
        }else{
            return NextResponse.json({error: 'User not found'})
        }
    }else{
        return NextResponse.json({error: 'Invalid request'})
    }
    

}
