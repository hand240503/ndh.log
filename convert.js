const fs = require('fs');
let html = fs.readFileSync('tania_main.html', 'utf8');

html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/<!--.*?-->/g, ''); 
// Fix self-closing tags
html = html.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr>/g, '<hr />');

// Remove any inline styles if there are any that aren't JSX compatible (none expected)

const jsx = `export default function Home() {
  return (
    <main>
      ${html}
    </main>
  );
}`;

fs.writeFileSync('src/app/page.jsx', jsx);
console.log('Converted successfully!');
