import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import SectionHeader from "@/components/SectionHeader";
import PostItem from "@/components/PostItem";
import ShelfItem from "@/components/ShelfItem";
import ProjectCard from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";

export default function Home() {
  // Đọc dữ liệu Timeline từ file home.md
  const filePath = path.join(process.cwd(), "content/pages/home.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  const timeline = (data.timeline || []).map((item) => {
    const processedContent = remark()
      .use(html)
      .processSync(item.content)
      .toString();
    const inlineHtml = processedContent
      .replace(/^<p>/, "")
      .replace(/<\/p>\n?$/, "");
    return { ...item, content: inlineHtml };
  });

  return (
    <main className="main-wrapper">
      <div className="main-container">
        <div className="main-content page">
          <header className="hero hero-index">
            <div className="hero-wrapper">
              <div>
                <h1 className="flex-align-center gap">Hey, I'm Tania!</h1>
                <p className="hero-description hero-tagline">
                  Principal software engineer, writer, all-around nerd.
                </p>
                <header className="heading small">
                  <div className="heading-row">
                    <h2>
                      <span>A brief timeline</span>
                    </h2>
                  </div>
                </header>
                <ul className="hero-eras">
                  {timeline.map((item, i) => (
                    <TimelineItem
                      key={i}
                      dates={item.dates}
                      content={item.content}
                    />
                  ))}
                </ul>
                <p className="hero-also">
                  <span className="hero-also-label">Also: </span> city explorer,
                  weight lifter, brick clicker, accordion enthusiast, biker,
                  Magic gatherer, webmaster.
                </p>
              </div>
              <div className="hero-image-container">
                <img src="/ram.png" className="hero-image" alt="RAM Ram" />
                <aside className="hero-bubble">
                  Can't remember how to spell my name? Just go to{" "}
                  <a href="https://tania.dev">tania.dev</a>!
                </aside>
              </div>
            </div>
          </header>
        </div>
      </div>
    </main>
  );
}
