"use client";
import { assetPrefix } from "@/utils/assetPrefix";


import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    }
  }, []);

  // HÃ m xá»­ lÃ½ Ä‘á»•i theme
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("is-dark");
      document.documentElement.classList.add("is-light");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("is-light");
      document.documentElement.classList.add("is-dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <aside className="select-none sidebar">
      <section className="mb-8 sidebar-section">
        <div className="flex items-center justify-between sidebar-title-link">
          <Link
            className="flex items-center gap-2"
            href="/"
            aria-current="page"
          >
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAbNJREFUWEdjZCARSEnJ/ydRC4ryZ88eMpKinyTFIIMH3IH8QmZYQ4ib4yXY45MmLSAlADDU5uUlgMW+/hAH0x/fncIbSBiSg9aBMIe1de5C8fWWnX/B/IvHjMD0hg17yArBR4+egPXBQlDf6hyYf2yfJ96QhIfgkHPgtZvsYJ/de/ANbwhKSUHS0rNnkDQKA2ZmqijJZ82a/eC0jR6CMPW4QhJnCA5bB8LSWkiII94QDIy6gRJDuEKS6iE4aByIK+2R6kBYyMHSOnpaJDsEB70DcRWGgyYEB70DYSFFarUCKwdhuZhmaXDQOBDdh7A6mdSQg6lHDzmKQ3DIOJDcECNWH9nlILEWUKqOYgcumWdPqRtQ9Fs5bQfzlRS4UOpkkmsSmKmD1oEwh509tZYqIXjt2h2wObEJ5WA6JukgZSE4aB0I64vA0gQsBJWVZcgKybt3IX0SqoXgqAMpTYOjITgagiTm5ZGTi3GV7Og1CbHlIXrIwQIeVpPA6mSi+8WD3oG4fLR4QSeJqQ6/crJDcNA6EOZfXAOYVA0+PIahj7gSPcI6aBxIL4cQaw/Jo/zEGkwtdQBrbfJHElv02wAAAABJRU5ErkJggg=="
                className="navbar-logo"
                alt="ndh.logs"
                title="ðŸ’¾"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">ndh.logs</span>
          </Link>

          {/* CÃ¡c nÃºt báº¥m */}
          <div className="flex items-center gap-3">
            {/* NÃºt chá»n Color */}
            <div className="dropdown tooltip-container">
              <button className="navbar-button p-2 rounded-md hover:bg-[var(--color-background-alternate)] transition-colors">
                <div
                  className="w-4 h-4 rounded-full circle"
                  style={{ backgroundColor: "var(--theme-blue)" }}
                ></div>
              </button>
            </div>

            {/* NÃºt Ä‘á»•i Theme */}
            <div className="tooltip-container">
              <button
                onClick={toggleTheme}
                className="navbar-button p-2 rounded-md hover:bg-[var(--color-background-alternate)] transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                title="Toggle Theme"
              >
                {/* Äá»•i icon dá»±a trÃªn dark mode */}
                {mounted && isDark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 sidebar-section">
        <div className="sidebar-content">
          <p>
            I'm <a href="/me/">Hạ</a>, a systems administrator focused on
            infrastructure, networking, and DevOps. This is my journey of
            continuous effort, learning, and moving forward.
          </p>
        </div>
      </section>
      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          <a href="/blog/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmT9IQkEcx7XmJ4QRBBItbZGiLc7SVtmQ0GJbRottDRaKRlMQ5BI4SdIgLQk6iAkiRJNiW7VE5WTSoNAiZfi7fuK7ON97vhPu3fJ793535/f3ud/94Wk2MYokSd2eK5VKQQu/3w+Wd73dbptZGnrvmU7DCIwcRiDA6EkUbCwSAxuOhrnUkR6LpCJB4QTi1JZLZQguuB8E6131gs1kM2Dj5/Ghfrq9Ur32UIPxaJL/CBpGYKvVgohqVRIZlumZ6WGLjulLX6VluYwNHXYH+R2tBA0n0OEkkbJKvV4f6rfb7eDPHSfBSo1vsO6zbVk/1TlIExRW4EgJN9DJarXKhggGya6w2SVEX9/fwG5dH4HVTFB4gfQqVit4L+CEps8vU2CRXKVSgbrL5SLEso9gE0+50QgKL1AtMVzFvo056HJ/d0u6fnrArO+uycjF4+QkwtLpdEYjKLxAtVOMOUeTy19OQIxLCxawizukjiV0EIJHvC1pXsXCC1SaYvcyIaJEbna+De3cgR+wF4kq2GKhqI+g8AJZU6w252hym75TiNmzQla3boLCC6SnWG/O4X2y2WjyISi8QJxivTlHB8o9B4UVaLGQE6D1cUMg/J2t9AnB2ucw52w2mwwizozuVWwcgaUvIJAvwCeb/tnK2ueUNnhuOdgnKLpAJPKUnIRHVs4pkeO+DyJBwwikCeE3HHzPWrXox5s3t5OEJiiMQPzsppRTvPyab9TCChwgQjY8qkiSxAuabBzNX1hNJpPwAsdCSuugQ/8C0DrYONr/AqWg4EdKn+XrAAAAAElFTkSuQmCC"
              alt=""
            />
            Blog
          </a>
          <a href="/shelves/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAf9JREFUWEflmD9Lw0AYxk1DKYpDJxddFLoE/QDOgiDiIK466RcQCeJncHX1MzgUlQo6OjpULS2KUqlLPoCIEitceAr3ppf3EvPngl2Oa+6SJ788773vnTWh+ZuftYaaQ6Vhr+9DK8k8zNGebJxAKuihcy6BqPgnol99bkn/v936Un/lWGYQl6iSoLECIYwSq/U2BJnG5o+WpZ7OKmPJgqguyRBBYwWqhC066xKJvVY0wZvBpxj/sjslzQNReFSX5IhgaQR27tfEmztLl6JVEdueC0h5X7Zor7yqaEEQ+O68gHj9aFq0126wnCYmaJxA+mlptFKClBxIgSD6lCQ8GdeLVukEImrjek+1OIJkUi+GCBorkAsOVdRyaSU1gsYLRHQh11IPrs58S+sdR45G8589+O8EppVRRlGcNsHcBep6TpVJMvdg4QJRQXO5mBPKfdrMc3HuAvFAFA1csHA5l9aB6KMexP1ry8EV3/cjt76hitp4gSovgsTC6UfkV6bRisHUe42DoBKPTdBYgdSLEEpPENLaF0/WHfHIXrcbSZLdFxsnkJJEH+UYdxZDDUrPZrZ2DsWQx3ZbtP1+P5Kk9tmMcQIpibSO32zbFhvjfdfVIpn7+WBmArkUF/c6FXrRbI71ojbBuAK48cYLxAtAKH0hZJjCCJZGIGeFwglyAn8Bt6aWR2TfwTgAAAAASUVORK5CYII="
              alt=""
            />
            Shelves
          </a>
          <a href="/projects/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXlJREFUWEdjZBjkgHGQu48Bw4FcXFz/B9LR3759Q3HT0HEgesh9DQ1CCUju1evA/K9brFDFfY6B+d8OOKOIcznsBfPPnz+PIn7/9n28ERQUBrEXFpLwEBxyDhzIdEhUCA5aB5qZmWF124cPH6jq5i9fvqCY9+3bNzAfZg/ONDjqQGi4Df8Q3D/VEmuaM4zeTpW0SHEIDnoHwoKJ2rkXZi7FIThkHEgoqg+5e2JNk3Y78adVqoXgoHUgvdIeLPhJrkmGjAOTFiZRpdyDGTIpeBJW88gOwUHvQKoGHwMDA3ruHf5pEOZDq8bDVA3MXcWGsL4HirlEtwfRc/GgdyClwUco7aFXrQRb1NQuB2nuwPNLsde5sPYhrjoZFjJGa1dj7YOgxwzZaXDQO5DcNIir1YLLPLJDcNA7kNhi5li9LdgvbkuWkeSnJW4upPWLyS0HB8yBJAUHljoX1lohZA7d0iCpmYNgQQ1TMDrCSiCOCQ4BE0oj9JYf9KP8AAwOCkcMzeo6AAAAAElFTkSuQmCC"
              alt=""
            />
            Projects
          </a>
          <a href="/me/">
            <img
              src={`${assetPrefix}/static/floppylogo-0c07fbe46fbceda7efdfb169dd4ef14a.png`}
              alt=""
            />
            About me
          </a>
        </nav>
      </section>
    </aside>
  );
}
