const fs = require('fs');

let page = fs.readFileSync('src/app/page.jsx', 'utf8');

// Add remark imports if not exists
if (!page.includes('import { remark }')) {
    page = page.replace('import matter from \'gray-matter\';', `import matter from 'gray-matter';\nimport { remark } from 'remark';\nimport html from 'remark-html';`);
}

// Modify the read function to parse markdown
const readFuncRegex = /const timeline = data\.timeline \|\| \[\];/;
const replacement = `const timeline = (data.timeline || []).map(item => {
    const processedContent = remark().use(html).processSync(item.content).toString();
    return { ...item, content: processedContent };
  });`;

page = page.replace(readFuncRegex, replacement);

fs.writeFileSync('src/app/page.jsx', page);
