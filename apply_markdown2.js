const fs = require('fs');

let page = fs.readFileSync('src/app/page.jsx', 'utf8');

// The block to replace:
const startString = `const timeline = [`;
const endString = `  const latestPosts = [`;

const startIndex = page.indexOf(startString);
const endIndex = page.indexOf(endString);

if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `// Đọc dữ liệu Timeline từ file home.md
  const filePath = path.join(process.cwd(), 'content/pages/home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  const timeline = (data.timeline || []).map(item => {
    // Parse Markdown thành HTML an toàn
    const processedContent = remark().use(html).processSync(item.content).toString();
    // Xóa thẻ <p> bọc ngoài do remark tạo ra (vì đoạn này là inline)
    const inlineHtml = processedContent.replace(/^<p>/, '').replace(/<\\/p>\\n?$/, '');
    return { ...item, content: inlineHtml };
  });

`;
    page = page.substring(0, startIndex) + replacement + page.substring(endIndex);
}

// Ensure remark imports are present
if (!page.includes('import { remark }')) {
    page = page.replace('import matter from "gray-matter";', `import matter from "gray-matter";\nimport { remark } from "remark";\nimport html from "remark-html";`);
}

fs.writeFileSync('src/app/page.jsx', page);
