const fs = require('fs');

let page = fs.readFileSync('src/app/page.jsx', 'utf8');

// Thêm các thư viện cần thiết vào đầu file
const imports = `import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
`;

page = page.replace('import SectionHeader from', imports + 'import SectionHeader from');

// Xóa mảng timeline cũ 
const timelineRegex = /const timeline = \[\s*\{[\s\S]*?\}\s*\];/;
page = page.replace(timelineRegex, `// Đọc dữ liệu Timeline từ file home.md (Zero-cost Database)
  const filePath = path.join(process.cwd(), 'content/pages/home.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  const timeline = data.timeline || [];`);

// Sửa lại map function để dùng prop content
const mapRegex = /<TimelineItem key=\{i\} dates=\{item\.dates\}>[\s\S]*?<\/TimelineItem>/g;
page = page.replace(mapRegex, `<TimelineItem key={i} dates={item.dates} content={item.content} />`);

fs.writeFileSync('src/app/page.jsx', page);
