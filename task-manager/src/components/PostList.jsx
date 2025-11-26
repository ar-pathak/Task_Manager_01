import React from 'react'
import { blogPosts } from '../utils/mockData'
import PostCard from './PostCard'


function PostList() {
  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <header className="mb-10 space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Our Articles
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Discover tutorials, insights, and practical guides from across the tech world.
          </p>
        </header>

        <div
          className="
      grid gap-7
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    "
        >
          {blogPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default PostList