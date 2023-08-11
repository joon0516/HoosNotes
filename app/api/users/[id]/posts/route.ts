import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";
import Post from "@/models/post";

export const GET = async (request: NextRequest, { params }: any) => {
  try {
    await connectToDB();

    const posts = await Post.find({ creator: params.id }).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};
