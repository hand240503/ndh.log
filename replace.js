const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            const ext = path.extname(file);
            if (['.js', '.jsx', '.md', '.json', '.yml', '.yaml', '.html', '.css'].includes(ext)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:\\project\\ndh.log');
let changedCount = 0;
files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes('ndh.log')) {
            content = content.replaceAll('ndh.log', 'ndh.log');
            fs.writeFileSync(file, content, 'utf8');
            console.log('Updated', file);
            changedCount++;
        }
    } catch (e) {
        // skip binary or unreadable
    }
});
console.log('Total files updated:', changedCount);
