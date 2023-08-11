"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }: any) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className="post_card">
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={handleProfileClick}
      >
        <Image
          src={post.creator.image}
          alt="user image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-col p-2">
          <h3 className="font-medium">{post.creator.username}</h3>
          <p>{post.creator.email}</p>
        </div>
      </div>

      <div className="mt-2">
        <p className="font-semibold my-1 text-lg">{post.course}</p>
        <div className="cursor-pointer my-1 font-medium flex">
          <p className="mr-1.5">Link: </p>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-blue-600 hover:text-blue-800 visited:text-purple-600 truncate block"
          >
            {post.link}
          </a>
        </div>
        <p className="font-medium">Description: </p>
        <p className="max-h-44 overflow-y-auto">{post.description}</p>
        <div className="flex justify-between mt-2">
          <p
            className="cursor-pointer text-gray-500"
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            {post.tag}
          </p>

          {session?.user.id === post.creator._id && pathName === "/profile" && (
            <div className="">
              <p
                className="cursor-pointer inline-block px-1 text-md text-gray-700 hover:text-orange-500"
                onClick={handleEdit}
              >
                Edit
              </p>
              <p
                className="cursor-pointer inline-block px-1 text-md text-gray-700 hover:text-orange-500"
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
