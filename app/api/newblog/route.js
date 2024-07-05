import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/db';
import User from '@/models/user';
import Blog from '@/models/newBlog';
// Handle POST requests
export async function POST(req) {
  try {
    const { title, content, userID } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    // Log data for debugging
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('userID:', userID);

    await connectDB()

    const user = await User.findById(userID);
    if(!user){
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const newBlog = new Blog({ author: user, title, content });
    await newBlog.save();
    return NextResponse.json({ message: 'Blog post submitted successfully', data: { title, content } });
  } catch (error) {
    // Handle errors
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}


