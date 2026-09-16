const fs = require('fs');
let layout = fs.readFileSync('src/app/layout.jsx', 'utf8');

// The file currently has literal `n and syntax error
layout = layout.replace('</main>`n        </div>', '</main>\n        </div>');
fs.writeFileSync('src/app/layout.jsx', layout);
