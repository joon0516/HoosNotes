import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }: any) => {
  return (
    <section className="mx-auto w-full max-w-xl flex-col">
      <h1 className="text-2xl font-semibold">{type} Post</h1>
      {/* <p className="text-xl">Share your notes with the world!</p> */}

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mx-auto w-full max-w-xl flex-col">
          <label>
            <span>
              Course<span className=""> (CS 2100, APMA 3100, etc)</span>
            </span>
            <input
              type="text"
              value={post.course}
              onChange={(e) => setPost({ ...post, course: e.target.value })}
              placeholder="Course Name"
              required
              className="flex form_input mb-2"
            ></input>
          </label>

          <label>
            <span>Link</span>
            <input
              type="text"
              value={post.link}
              onChange={(e) => setPost({ ...post, link: e.target.value })}
              placeholder="Link"
              className="flex form_input mb-2"
            ></input>
          </label>

          <label>
            <span>Description</span>
            <textarea
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              placeholder="Write your description here"
              required
              className="flex form_textarea mb-2"
            />
          </label>

          <label>
            <span>
              Tag<span className=""> (#DSA, #CS, #HashTable, etc)</span>
            </span>
            <input
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              placeholder="#tag"
              className="flex form_input mb-2"
            />
          </label>

          <div>
            {/* <Link href="/" className="nav_btn">Cancel</Link> */}
            <button
              type="submit"
              disabled={submitting}
              className="nav_btn mt-2"
            >
              {submitting
                ? type === "Create"
                  ? `Creating...`
                  : `Editing...`
                : type}
            </button>
          </div>
        </div>
      </form>

      <p className="text-sm mt-5">
        *Any posts that violate the{" "}
        <a href="https://honor.virginia.edu/" className="UVAOrange font-semibold hover:text-orange-700">
          Honor Code
        </a>{" "}
        of the University of Virginia will be removed.
      </p>
    </section>
  );
};

export default Form;
