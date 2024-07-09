import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Blog from "@/models/newBlog";
export async function PUT(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');
    try {
        const body = await req.json();
        const { title, content } = body;
        
        if (!id || !title || !content) {
            return new NextResponse(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }
        
        const updatedblog = { id, title, content };
        await connectDB();
        await Blog.findById({_id : id})
        await Blog.updateOne({title : title,content : content})        
        return new NextResponse(JSON.stringify(updatedblog), { status: 200 });
    } catch (error) {
        console.error('Error occurred:', error);
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
