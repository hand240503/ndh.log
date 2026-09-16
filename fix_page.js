const fs = require('fs');
let page = fs.readFileSync('src/app/page.jsx', 'utf8');

if (!page.includes('import { assetPrefix }')) {
    page = page.replace('import fs from "fs";', 'import { assetPrefix } from "@/utils/assetPrefix";\nimport fs from "fs";');
}

page = page.replace(/src="\/ram\.png"/g, 'src={`${assetPrefix}/ram.png`}');
page = page.replace(/src="\/static\/(.+?)"/g, 'src={`${assetPrefix}/static/$1`}');

fs.writeFileSync('src/app/page.jsx', page);
