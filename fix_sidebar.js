const fs = require('fs');
let sidebar = fs.readFileSync('src/components/Sidebar.jsx', 'utf8');

if (!sidebar.includes('import { assetPrefix }')) {
    sidebar = sidebar.replace('import React', "import { assetPrefix } from '@/utils/assetPrefix';\nimport React");
}

sidebar = sidebar.replace(/src="\/static\//g, 'src={`${assetPrefix}/static/');
sidebar = sidebar.replace(/src="\/ram\.png"/g, 'src={`${assetPrefix}/ram.png`}');

fs.writeFileSync('src/components/Sidebar.jsx', sidebar);
