"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/app/components/Form";

const EditPost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get(`id`);

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    course: "",
    link: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();

      setPost({
        course: data.course,
        link: data.link,
        description: data.description,
        tag: data.tag,
      });
    };

    if(postId) getPostDetails();
  }, [postId]);

  const updatePost = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postId) return alert("Post ID not found");

    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          course: post.course,
          link: post.link,
          description: post.description,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePost}
    />
  );
};

export default EditPost;
