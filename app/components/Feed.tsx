"use client";

import { useState, useEffect } from "react";

import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }: any) => {
  return (
    <div>
      {data.map((post: any) => (
        <PostCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState<any[]>([]);

  const [searchText, setSearchText] = useState<string>();
  const [searchTimeout, setSearchTimeout] = useState<any>();
  const [searchedResults, setSearchedResults] = useState<any[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/post");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext: any) => {
    const regex = new RegExp(searchtext, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.course) ||
        regex.test(item.link) ||
        regex.test(item.description) ||
        regex.test(item.tag)
    );
  };

  function handleSearchChange(e: any) {
    clearTimeout(searchTimeout);
    setSearchText(e);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e);
        setSearchedResults(searchResult);
      }, 500)
    );
  }

  const handleTagClick = (tagName: any) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="w-full">
      <form>
        <div className="feed_search relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by course, description, or tag (e.g. CS 2100)"
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
            required
            className="search_bar"
          />
        </div>
      </form>

      <div className="w-full">
        {searchText ? (
          <PostCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PostCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
      </div>
    </section>
  );
};

export default Feed;
