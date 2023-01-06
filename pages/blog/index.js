import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../../components/header';
import PostInfo from '../../components/postInfo';

export default function PostList({ sortedPosts }) {
  const [posts] = useState(sortedPosts);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = posts.filter((post) =>
      post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm]);

  const postUI =
    filteredPosts &&
    filteredPosts.map(
      ({ frontmatter: { title, description, date, tags }, slug }) => (
        <PostInfo
          title={title}
          description={description}
          date={date}
          tags={tags}
          slug={slug}
        />
      )
    );
}
