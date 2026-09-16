const fs = require('fs');
let page = fs.readFileSync('src/app/page.jsx', 'utf8');

const regex = /const timeline = \[[\s\S]*?const latestPosts = \[/;
const replacement = `// Đọc dữ liệu Timeline từ file home.md
  const filePath = path.join(process.cwd(), 'content/pages/home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  const timeline = (data.timeline || []).map(item => {
    const processedContent = remark().use(html).processSync(item.content).toString();
    const inlineHtml = processedContent.replace(/^<p>/, '').replace(/<\\/p>\\n?$/, '');
    return { ...item, content: inlineHtml };
  });

  const latestPosts = [`;

page = page.replace(regex, replacement);

if (!page.includes('import { remark }')) {
    page = page.replace('import matter from "gray-matter";', `import matter from "gray-matter";\nimport { remark } from "remark";\nimport html from "remark-html";`);
}

fs.writeFileSync('src/app/page.jsx', page);
