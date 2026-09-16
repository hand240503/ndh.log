const fs = require('fs');
const layout = `import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "ndh.log",
  description: "Hệ thống ghi chép cá nhân – zero-cost, không database, toàn bộ trong Git.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add("is-dark")
                } else {
                  document.documentElement.classList.add("is-light")
                }
              } catch (_) {}
            \`,
          }}
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="data:image/x-icon;,"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="layout">
          <Sidebar />
          <main>
            <PageTransition>{children}</PageTransition>
            
            <footer style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-muted)" }}>
              ndh.log — nội dung là Markdown, lưu trữ trên GitHub, không database.
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
`
fs.writeFileSync('src/app/layout.jsx', layout);
