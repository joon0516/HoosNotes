"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/app/components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
  
      setMyPosts(data);
    }

    if(session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post: any) => {
    router.push(`/update-post?id=${post._id}`)
  };

  const handleDelete = async (post: any) => {
    const confirmed = confirm("Are you sure you want to delete this post?");

    if (confirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE"
        });

        const filteredPosts = myPosts.filter((p) => {
          p._id !== post._id
        })

        setMyPosts(filteredPosts);

        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your profile"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
