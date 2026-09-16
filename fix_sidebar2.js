const fs = require('fs');
let sidebar = fs.readFileSync('src/components/Sidebar.jsx', 'utf8');

// Replace corrupted ones if any
sidebar = sidebar.replace(/src=\{\`\$\{assetPrefix\}\/static\/(.+?)\"/g, 'src={`${assetPrefix}/static/$1`}');
sidebar = sidebar.replace(/src=\{\`\$\{assetPrefix\}\/ram\.png\"/g, 'src={`${assetPrefix}/ram.png`}');

// Also check if any plain string `src="/static/...` exists and fix it completely
sidebar = sidebar.replace(/src="\/static\/(.+?)"/g, 'src={`${assetPrefix}/static/$1`}');
sidebar = sidebar.replace(/src="\/ram\.png"/g, 'src={`${assetPrefix}/ram.png`}');

fs.writeFileSync('src/components/Sidebar.jsx', sidebar);
