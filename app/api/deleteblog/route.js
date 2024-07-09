import { NextResponse } from "next/server";
import Blog from "@/models/newBlog";
import { connectDB } from "@/utils/db";

export async function DELETE(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');

    try {
        if (!id) {
            return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
        }

        await connectDB();

        const blog = await Blog.findByIdAndDelete(id); 
        console.log(blog);
        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ "deleted blog": blog }, { status: 200 });

    } catch (e) {
        console.error("Error deleting blog:", e); // Log the error
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
