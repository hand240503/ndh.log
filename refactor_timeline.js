const fs = require('fs');
let page = fs.readFileSync('src/app/page.jsx', 'utf8');

// 1. Add import
if (!page.includes('import TimelineItem')) {
    page = page.replace('import ProjectCard from "@/components/ProjectCard";', 'import ProjectCard from "@/components/ProjectCard";\nimport TimelineItem from "@/components/TimelineItem";');
}

// 2. Add the timeline data array
const timelineData = `
  const timeline = [
    {
      dates: "1998–2006",
      content: <>Geocities kid, forum-goer, gamer, lover of obscure '80s bands.</>
    },
    {
      dates: "2007–2014",
      content: <><a href="/professional-cook/">Professional chef</a>: Culinary degree, 60-hour weeks in Chicago kitchens, line cook to chef-manager by 22.</>
    },
    {
      dates: "2014–2020",
      content: <><a href="/career-change/">Career change</a>: Unpaid intern by day, cook by night, then junior dev to senior engineer. <a href="/blog/">Wrote everything down</a> along the way.</>
    },
    {
      dates: "2021–now",
      content: <><a href="/me/">Principal software engineer</a>: Building design systems, setting technical direction, shipping features, and still documenting: <a href="/blog/">177 posts</a>, <a href="/publications/">40+ publications</a>, and <a href="https://github.com/taniarascia" target="_blank" rel="noreferrer">20,000+ stars on GitHub</a>.</>
    }
  ];
`;

if (!page.includes('const timeline =')) {
    page = page.replace('export default function Home() {', 'export default function Home() {' + timelineData);
}

// 3. Replace the ul block with the map function
const ulRegex = /<ul className="hero-eras">[\s\S]*?<\/ul>/;
page = page.replace(ulRegex, `<ul className="hero-eras">
                {timeline.map((item, i) => (
                  <TimelineItem key={i} dates={item.dates}>
                    {item.content}
                  </TimelineItem>
                ))}
              </ul>`);

fs.writeFileSync('src/app/page.jsx', page);
