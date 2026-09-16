"use client";

import { useEffect, useRef } from "react";

/**
 * Nhan vao 1 mang items va render callback.
 * Moi item se fade+slide khi scroll toi.
 */
export default function AnimatedRows({ items, renderItem }) {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {items.map((item, i) => (
        <div
          key={item.slug ?? i}
          ref={(el) => (refs.current[i] = el)}
          style={{
            opacity: 0,
            transform: "translateY(18px)",
            transition: `opacity 0.42s ease ${i * 60}ms, transform 0.42s ease ${i * 60}ms`,
          }}
        >
          {renderItem(item, i)}
        </div>
      ))}
    </>
  );
}