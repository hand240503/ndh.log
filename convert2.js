const fs = require('fs');
let html = fs.readFileSync('tania_main.html', 'utf8');

html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/<!--.*?-->/g, ''); 
html = html.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr>/g, '<hr />');

const jsx = `export default function Home() {
  return (
    <main className="main-wrapper">
      <div className="main-contanier">
        <div className="main-content page">
          ${html}
        </div>
      </div>
    </main>
  );
}`;

fs.writeFileSync('src/app/page.jsx', jsx);
console.log('Regenerated page.jsx');
