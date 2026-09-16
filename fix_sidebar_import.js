const fs = require('fs');
let sidebar = fs.readFileSync('src/components/Sidebar.jsx', 'utf8');

if (!sidebar.includes('import { assetPrefix }')) {
    sidebar = sidebar.replace('"use client";', '"use client";\nimport { assetPrefix } from "@/utils/assetPrefix";\n');
    fs.writeFileSync('src/components/Sidebar.jsx', sidebar);
}
