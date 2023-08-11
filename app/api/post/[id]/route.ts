import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";
import Post from "@/models/post";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");

    if (!post) return new Response("Post not found ", { status: 404 });

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all the posts", { status: 500 });
  }
};

export const PATCH = async (request: NextRequest, { params }: any) => {
  const { course, link, description, tag } = await request.json();

  try {
    await connectToDB();

    const exisitingPost = await Post.findById(params.id);

    if (!exisitingPost) return new Response("Post not found ", { status: 404 });

    exisitingPost.course = course;
    exisitingPost.link = link;
    exisitingPost.description = description;
    exisitingPost.tag = tag;

    await exisitingPost.save();

    return new Response(JSON.stringify(exisitingPost), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the post", { status: 500 });
  }
};

export const DELETE = async (request: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);

    return new Response("The post has been deleted.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the post", { status: 500 });
  }
};
