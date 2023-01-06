import React from 'react';
import Link from 'next/link';

function PostInfo({ title, role, description, date}) {
  return (
    <article
      className="mb-6 p-5 relative shadow-lg border-gray-800 dark:border-pink-700 bg-gray-50 dark:bg-gray-800 border-r-8 transform md:hover:scale-105 transition-all hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <header className="flex items-center justify-between">
        <h3 className="text-2xl font-bold dark:text-white">
            {title}
        </h3>

        <span className="text-xs text-gray-600 dark:text-gray-400">{date}</span>
      </header>

      <header className="flex items-center justify-between">
        <h2 className="mt-1 italic dark:text-white">
            {role}
        </h2>
      </header>

      <section className="">
        <p className="text-lg mt-4 dark:text-gray-400">
            {description}
        </p>
      </section>

      
    </article>
  );
}

export default PostInfo;
