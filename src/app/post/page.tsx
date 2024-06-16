import React from "react";
import PostList from "@/components/postList";

export const metadata = {
  title: '文章',
  description: '阅读我的文章.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">我的文章</h1>
      <PostList />
    </section>
  )
}
