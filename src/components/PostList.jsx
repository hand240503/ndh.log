"use client";

import Link from "next/link";
import AnimatedRows from "./AnimatedRows";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "long", day: "numeric"
  });
}

function PostRow({ post }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "12px 0",
      gap: 16,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Link href={`/blog/${post.slug}`} style={{
          textDecoration: "none",
          color: "var(--ink)",
          fontSize: 16,
          fontWeight: 500,
          display: "block",
          marginBottom: 4,
          lineHeight: 1.4,
        }}>
          {post.title}
        </Link>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(post.tags || []).map(tag => (
            <span key={tag} style={{
              fontSize: 13,
              color: "var(--muted)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div style={{ fontSize: 14, color: "var(--muted)", whiteSpace: "nowrap", paddingTop: 2 }}>
        {formatDate(post.date)}
      </div>
    </div>
  );
}

export default function PostList({ posts }) {
  return (
    <AnimatedRows
      items={posts}
      renderItem={(post) => <PostRow post={post} />}
    />
  );
}