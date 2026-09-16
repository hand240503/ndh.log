const fs = require('fs');

const filePath = 'content/pages/home.md';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the specific block
const oldBlock = `- dates: "1998–2006"\n    content: "Geocities kid, forum-goer, gamer, lover of obscure '80s bands."`;
const newBlock = `- dates: "2022–2026"\n    content: "Sinh viên ngành Công nghệ Thông tin tại **[VKU (Đại học CNTT & TT Việt - Hàn)](https://vku.udn.vn/vi/)**."`;

if (content.includes(oldBlock)) {
    content = content.replace(oldBlock, newBlock);
} else {
    // Fallback if formatting was slightly different
    content = content.replace(/dates: "?1998.2006"?/, 'dates: "2022-2026"');
    content = content.replace(/content: "?Geocities kid, forum-goer, gamer, lover of obscure '80s bands\.?"?/, 'content: "Học tại **[VKU (Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn)](https://vku.udn.vn/vi/)**."');
}

fs.writeFileSync(filePath, content, 'utf8');
