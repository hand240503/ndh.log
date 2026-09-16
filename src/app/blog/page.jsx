import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

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

export default function BlogIndexPage() {
  const posts = getAllPosts();

  // Nhóm theo tag đầu tiên
  const tagMap = {};
  posts.forEach((post) => {
    const tag = post.tags?.[0] || "Khác";
    if (!tagMap[tag]) tagMap[tag] = [];
    tagMap[tag].push(post);
  });

  return (
    <>
      {/* Page head */}
      <div style={{ padding: "40px 0 8px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            margin: "0 0 8px",
          }}
        >
          Chủ đề
        </h1>
        <p
          style={{
            color: "var(--muted)",
            fontSize: 14.5,
            marginBottom: 28,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Mỗi chủ đề gom các bài viết liên quan, để dễ ôn lại theo mạch kiến thức thay vì theo thời gian.
        </p>
      </div>

      {/* Topic rows */}
      <div>
        {Object.entries(tagMap).map(([tag, tagPosts]) => {
          const color = tagColor(tag);
          const lastPost = tagPosts.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
          return (
            <div
              key={tag}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 9, height: 9, borderRadius: "50%",
                    background: color, display: "inline-block", flexShrink: 0,
                  }}
                />
                <Link
                  href={`/?tag=${tag}`}
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: 18,
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "var(--ink)",
                  }}
                >
                  {tag}
                </Link>
                <span style={{ fontSize: 13, color: "var(--muted-2)" }}>
                  {tagPosts.length} bài viết
                </span>
              </div>
              <div style={{ fontSize: 12.5, color: "var(--muted-2)" }}>
                cập nhật {formatDate(lastPost?.date)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
