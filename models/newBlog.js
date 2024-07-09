import { Schema, model, models } from "mongoose";
const newblog = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


const Blog = models.Blog || model('Blog', newblog);

export default Blog;
