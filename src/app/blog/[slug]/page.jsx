import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import BlogContent from "@/components/BlogContent";

export function generateStaticParams() {
  return getAllPostSlugs();
}

const TAG_COLORS = {
  network:  "#1f7a72",
  devops:   "#3457b2",
  code:     "#2e7d46",
  nextjs:   "#2e7d46",
  english:  "#9c4670",
  math:     "#a6740a",
  default:  "#5b4b8a",
};
function tagColor(tag) {
  return TAG_COLORS[tag?.toLowerCase()] ?? TAG_COLORS.default;
}
function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr + "T00:00:00").toLocaleDateString("vi-VN", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const mainTag = post.tags?.[0];
  const color = tagColor(mainTag);

  return (
    <>
      {/* Back link */}
      <Link
        href="/"
        style={{
          display: "inline-block",
          fontSize: 13,
          color: "var(--muted)",
          textDecoration: "none",
          margin: "34px 0 26px",
        }}
      >
        ← Quay lại danh sách bài viết
      </Link>

      {/* Topic label */}
      {mainTag && (
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            marginBottom: 14,
            color,
          }}
        >
          <span
            style={{
              width: 7, height: 7, borderRadius: "50%",
              background: color, display: "inline-block",
            }}
          />
          {mainTag}
        </div>
      )}

      {/* Title */}
      <h1
        style={{
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 1.25,
          margin: "0 0 16px",
          maxWidth: 680,
        }}
      >
        {post.title}
      </h1>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          gap: 18,
          flexWrap: "wrap",
          marginBottom: 36,
        }}
      >
        {post.date && (
          <span style={{ fontSize: 12.5, color: "var(--muted-2)" }}>
            {formatDate(post.date)}
          </span>
        )}
        {post.tags?.slice(1).map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12.5,
              color: "var(--muted-2)",
              paddingLeft: 14,
              borderLeft: "1px solid var(--line)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 660 }}>
        <BlogContent html={post.contentHtml} />
      </div>
    </>
  );
}
