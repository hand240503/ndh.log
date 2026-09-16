const fs = require('fs');

const pageContent = `import SectionHeader from "@/components/SectionHeader";
import PostItem from "@/components/PostItem";
import ShelfItem from "@/components/ShelfItem";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const latestPosts = [
    {
      title: "Setting up a custom React setup with Vite",
      href: "/vite-react-typescript-tailwind-spa/",
      date: "2024",
      tags: ["vite", "react"]
    },
    {
      title: "CSS vs. JavaScript grid based game loops",
      href: "/css-vs-javascript-grid/",
      date: "2024",
      tags: ["javascript", "css"]
    },
    {
      title: "Understanding recursion by creating a generic tree model",
      href: "/understanding-recursion-generic-tree-model/",
      date: "2024",
      tags: ["javascript", "recursion"]
    },
    {
      title: "Building a game with TypeScript",
      href: "/game-development-typescript/",
      date: "2023",
      tags: ["typescript", "gaming"]
    },
    {
      title: "How to create an image slider in React",
      href: "/image-slider-react/",
      date: "2023",
      tags: ["react", "css"]
    }
  ];

  const shelves = [
    {
      title: "Code snippets",
      href: "/shelves/snippets/",
      count: 28,
      description: "Code snippets and components I use frequently."
    },
    {
      title: "Essays",
      href: "/shelves/essays/",
      count: 26,
      description: "Thoughts on software engineering, career, and life."
    },
    {
      title: "Technical guides",
      href: "/shelves/guides/",
      count: 36,
      description: "In-depth tutorials and technical articles."
    },
    {
      title: "Resources",
      href: "/shelves/resources/",
      count: 2,
      description: "Tools, books, and courses I recommend."
    }
  ];

  const series = [
    {
      title: "JavaScript",
      href: "/series/javascript/",
      description: "A comprehensive guide to JavaScript from beginners to advanced.",
      thumbnail: "/static/e2bb92147715bd5b61e25eecb2d295f7/javascript.png"
    },
    {
      title: "Redesigns of this website",
      href: "/series/redesigns/",
      description: "This site gets tweaked a lot. Read about it!",
      thumbnail: "/static/07f5a193c5a1357203c0389b1002fb71/floppylogo.png"
    }
  ];

  const projects = [
    {
      year: "2022",
      title: "Keyboard Accordion",
      repoLink: "https://github.com/taniarascia/accordion",
      description: "Play the accordion online!",
      links: [
        { label: "Article", href: "/musical-instrument-web-audio-api/" },
        { label: "Demo", href: "https://www.keyboardaccordion.com", target: "_blank", rel: "noreferrer" },
        { label: "Source", href: "https://github.com/taniarascia/accordion", target: "_blank", rel: "noreferrer" }
      ]
    },
    {
      year: "2020",
      title: "TakeNote",
      repoLink: "https://github.com/taniarascia/takenote",
      description: "Open source notes app",
      links: [
        { label: "Article", href: "/building-takenote/" },
        { label: "Demo", href: "https://takenote.dev", target: "_blank", rel: "noreferrer" },
        { label: "Source", href: "https://github.com/taniarascia/takenote", target: "_blank", rel: "noreferrer" }
      ]
    },
    {
      year: "2019",
      title: "Chip8",
      repoLink: "https://github.com/taniarascia/chip8",
      description: "Retro game emulator",
      links: [
        { label: "Article", href: "/writing-an-emulator-in-javascript-chip8/" },
        { label: "Demo", href: "https://taniarascia.github.io/chip8", target: "_blank", rel: "noreferrer" },
        { label: "Source", href: "https://github.com/taniarascia/chip8", target: "_blank", rel: "noreferrer" }
      ]
    },
    {
      year: "2021",
      title: "Sokoban",
      repoLink: "https://github.com/taniarascia/sokoban",
      description: "Web-based Sokoban",
      links: [
        { label: "Article", href: "/sokoban-game/" },
        { label: "Demo", href: "https://taniarascia.github.io/sokoban", target: "_blank", rel: "noreferrer" },
        { label: "Source", href: "https://github.com/taniarascia/sokoban", target: "_blank", rel: "noreferrer" }
      ]
    },
    {
      year: "2015",
      title: "New Moon",
      repoLink: "https://github.com/taniarascia/new-moon",
      description: "Your new favorite theme",
      links: [
        { label: "Demo", href: "https://taniarascia.github.io/new-moon", target: "_blank", rel: "noreferrer" },
        { label: "Source", href: "https://github.com/taniarascia/new-moon", target: "_blank", rel: "noreferrer" }
      ]
    },
    {
      year: "2019",
      title: "Snek",
      repoLink: "https://github.com/taniarascia/snek",
      description: "A terminal-based Snake",
      links: [
        { label: "Article", href: "/snake-game-in-javascript/" },
        { label: "Source", href: "https://github.com/taniarascia/snek", target: "_blank", rel: "noreferrer" }
      ]
    }
  ];

  return (
    <>
      <header className="hero hero-index">
        <div className="hero-wrapper">
          <div>
            <h1 className="flex-align-center gap">Hey, I'm Tania!</h1>
            <p className="hero-description hero-tagline">
              Principal software engineer, writer, all-around nerd.
            </p>
            <header className="heading small">
              <div className="heading-row">
                <h2><span>A brief timeline</span></h2>
              </div>
            </header>
            <ul className="hero-eras">
              <li><span className="era-dates">1998–2006</span><span className="era-description">Geocities kid, forum-goer, gamer, lover of obscure '80s bands.</span></li>
              <li><span className="era-dates">2007–2014</span><span className="era-description"><a href="/professional-cook/">Professional chef</a>: Culinary degree, 60-hour weeks in Chicago kitchens, line cook to chef-manager by 22.</span></li>
              <li><span className="era-dates">2014–2020</span><span className="era-description"><a href="/career-change/">Career change</a>: Unpaid intern by day, cook by night, then junior dev to senior engineer. <a href="/blog/">Wrote everything down</a> along the way.</span></li>
              <li><span className="era-dates">2021–now</span><span className="era-description"><a href="/me/">Principal software engineer</a>: Building design systems, setting technical direction, shipping features, and still documenting: <a href="/blog/">177 posts</a>, <a href="/publications/">40+ publications</a>, and <a href="https://github.com/taniarascia" target="_blank" rel="noreferrer">20,000+ stars on GitHub</a>.</span></li>
            </ul>
            <p className="hero-also">
              <span className="hero-also-label">Also: </span> city explorer, weight lifter, brick clicker, accordion enthusiast, biker, Magic gatherer, webmaster.
            </p>
          </div>
          <div className="hero-image-container">
            <img src="/ram.png" className="hero-image" alt="RAM Ram" />
            <aside className="hero-bubble">
              Can't remember how to spell my name? Just go to <a href="https://tania.dev">tania.dev</a>!
            </aside>
          </div>
        </div>
      </header>

      <section className="section-index">
        <SectionHeader 
          title="Latest" 
          buttonLabel="All Posts" 
          buttonLink="/blog/" 
        />
        <div className="posts">
          {latestPosts.map((post, i) => (
            <PostItem key={i} {...post} />
          ))}
        </div>
      </section>

      <section className="section-index">
        <SectionHeader 
          title="Shelves" 
          icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf9JREFUWEflmD9Lw0AYxk1DKYpDJxddFLoE/QDOgiDiIK466RcQCeJncHX1MzgUlQo6OjpULS2KUqlLPoCIEitceAr3ppf3EvPngl2Oa+6SJ788773vnTWh+ZuftYaaQ6Vhr+9DK8k8zNGebJxAKuihcy6BqPgnol99bkn/v936Un/lWGYQl6iSoLECIYwSq/U2BJnG5o+WpZ7OKmPJgqguyRBBYwWqhC066xKJvVY0wZvBpxj/sjslzQNReFSX5IhgaQR27tfEmztLl6JVEdueC0h5X7Zor7yqaEEQ+O68gHj9aFq0126wnCYmaJxA+mlptFKClBxIgSD6lCQ8GdeLVukEImrjek+1OIJkUi+GCBorkAsOVdRyaSU1gsYLRHQh11IPrs58S+sdR45G8589+O8EppVRRlGcNsHcBep6TpVJMvdg4QJRQXO5mBPKfdrMc3HuAvFAFA1csHA5l9aB6KMexP1ry8EV3/cjt76hitp4gSovgsTC6UfkV6bRisHUe42DoBKPTdBYgdSLEEpPENLaF0/WHfHIXrcbSZLdFxsnkJJEH+UYdxZDDUrPZrZ2DsWQx3ZbtP1+P5Kk9tmMcQIpibSO32zbFhvjfdfVIpn7+WBmArkUF/c6FXrRbI71ojbBuAK48cYLxAtAKH0hZJjCCJZGIGeFwglyAn8Bt6aWR2TfwTgAAAAASUVORK5CYII="
          description="Everything I've written, categorized by topic." 
          buttonLabel="All Shelves" 
          buttonLink="/shelves/" 
        />
        <div className="cards cards-half">
          {shelves.map((shelf, i) => (
            <ShelfItem key={i} {...shelf} />
          ))}
        </div>
      </section>

      <section className="section-index">
        <SectionHeader 
          title="Series" 
        />
        <div className="posts">
          {series.map((item, i) => (
            <PostItem key={i} isDetailed={true} {...item} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader 
          title="Projects" 
          icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC"
          description="Open-source projects I've worked on over the years." 
          buttonLabel="All Projects" 
          buttonLink="/projects/" 
        />
        <div className="cards">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
`
fs.writeFileSync('src/app/page.jsx', pageContent);
