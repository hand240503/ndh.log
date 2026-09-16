const fs = require('fs');
let page = fs.readFileSync('src/app/page.jsx', 'utf8');

const startIdx = page.indexOf('const timeline = [');
const endIdx = page.indexOf('return (');

if (startIdx !== -1 && endIdx !== -1) {
    const replacement = `// Đọc dữ liệu Timeline từ file home.md
  const filePath = path.join(process.cwd(), 'content/pages/home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  const timeline = (data.timeline || []).map(item => {
    const processedContent = remark().use(html).processSync(item.content).toString();
    const inlineHtml = processedContent.replace(/^<p>/, '').replace(/<\\/p>\\n?$/, '');
    return { ...item, content: inlineHtml };
  });

  `;
    page = page.substring(0, startIdx) + replacement + page.substring(endIdx);
    fs.writeFileSync('src/app/page.jsx', page);
}
