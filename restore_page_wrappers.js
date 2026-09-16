const fs = require('fs');
let page = fs.readFileSync('src/app/page.jsx', 'utf8');

// Replace the `<>` at the start of the return block with the wrappers
page = page.replace('<>', `<main className="main-wrapper">
      <div className="main-contanier">
        <div className="main-content page">`);
        
// Replace the `</>` at the end of the return block with the closing tags
page = page.replace('</>', `</div>
      </div>
    </main>`);

fs.writeFileSync('src/app/page.jsx', page);
