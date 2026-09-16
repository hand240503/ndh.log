"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Bài viết" },
  { href: "/blog", label: "Chủ đề" },
  { href: "/about", label: "Giới thiệu" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", gap: 26 }}>
      {NAV_LINKS.map(({ href, label }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: 13.5,
              color: isActive ? "var(--ink)" : "var(--muted)",
              textDecoration: "none",
              paddingBottom: 3,
              borderBottom: isActive
                ? "1.5px solid var(--accent)"
                : "1.5px solid transparent",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}