import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  course: {
    type: String,
    required: [true, "Course name is required."],
  },
  link: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  tag: {
    type: String,
    required: false,
  },
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
