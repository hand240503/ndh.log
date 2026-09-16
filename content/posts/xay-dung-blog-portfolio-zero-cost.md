---
title: "XÃ¢y dá»±ng Blog & Portfolio cÃ¡ nhÃ¢n: Kiáº¿n trÃºc tÄ©nh Zero-Cost tá»« Git Ä‘áº¿n CDN"
date: "2026-09-14"
tags: ["Architecture", "Next.js", "SSG", "Decap CMS", "GitHub Pages", "CI/CD"]
excerpt: "PhÃ¢n tÃ­ch chi tiáº¿t kiáº¿n trÃºc há»‡ thá»‘ng Blog & Portfolio tÄ©nh chi phÃ­ 0Ä‘: tá»« luá»“ng dá»¯ liá»‡u Git-based, AST Markdown pipeline, xÃ¡c thá»±c PKCE Ä‘áº¿n tá»± Ä‘á»™ng hÃ³a CI/CD."
coverImage: ""
---

Khi xÃ¢y dá»±ng má»™t trang web cÃ¡ nhÃ¢n hay blog ká»¹ thuáº­t, bÃ i toÃ¡n thÆ°á»ng gáº·p lÃ : LÃ m sao Ä‘á»ƒ cÃ³ má»™t há»‡ sinh thÃ¡i vá»«a **hiá»‡n Ä‘áº¡i, táº£i nhanh, viáº¿t bÃ i tiá»‡n lá»£i**, vá»«a **hoÃ n toÃ n lÃ m chá»§ dá»¯ liá»‡u**, nhÆ°ng **chi phÃ­ váº­n hÃ nh hÃ ng thÃ¡ng báº±ng 0 Ä‘á»“ng**?

BÃ i viáº¿t nÃ y ghi láº¡i toÃ n bá»™ quÃ¡ trÃ¬nh thiáº¿t káº¿, kiáº¿n trÃºc ká»¹ thuáº­t vÃ  cÃ¡ch triá»ƒn khai há»‡ thá»‘ng Blog & Portfolio Ä‘ang cháº¡y trÃªn chÃ­nh website nÃ y.

---

## 1. CÃ´ng nghá»‡ sá»­ dá»¥ng (SÆ¡ lÆ°á»£c)

Há»‡ thá»‘ng Ä‘Æ°á»£c chá»n lá»c ká»¹ cÃ ng theo tiÃªu chÃ­: gá»n nháº¹, tiÃªu chuáº©n má»Ÿ, báº£o trÃ¬ tháº¥p vÃ  miá»…n phÃ­ trá»n Ä‘á»i:

* **Next.js 16 (App Router)**: Framework cá»‘t lÃµi, cháº¡y á»Ÿ cháº¿ Ä‘á»™ tÄ©nh hoÃ n toÃ n (`output: 'export'`).
* **Tailwind CSS + Typography**: Thiáº¿t káº¿ giao diá»‡n theo mÃ´ hÃ¬nh utility-first, sá»­ dá»¥ng plugin `@tailwindcss/typography` (`.prose`) Ä‘á»ƒ tá»± Ä‘á»™ng Ä‘á»‹nh dáº¡ng bÃ i viáº¿t.
* **Unified / Remark / Rehype + Highlight.js**: Bá»™ cÃ´ng cá»¥ AST phÃ¢n tÃ­ch Markdown thÃ nh HTML vÃ  tÃ´ mÃ u cÃº phÃ¡p code block (theme GitHub Dark).
* **Decap CMS + DecapBridge (PKCE)**: Giao diá»‡n quáº£n trá»‹ ná»™i dung trá»±c quan cháº¡y ngay trÃªn trÃ¬nh duyá»‡t, lÆ°u commit trá»±c tiáº¿p vÃ o Git.
* **GitHub Actions & GitHub Pages**: ÄÆ°á»ng á»‘ng CI/CD tá»± Ä‘á»™ng hÃ³a viá»‡c build vÃ  máº¡ng lÆ°á»›i mÃ¡y chá»§ CDN phá»¥c vá»¥ trang tÄ©nh toÃ n cáº§u.

---

## 2. Kiáº¿n trÃºc há»‡ thá»‘ng (PhÃ¢n tÃ­ch ká»¹ cÃ ng)

Triáº¿t lÃ½ ná»n táº£ng cá»§a toÃ n bá»™ há»‡ thá»‘ng lÃ : **"Má»i thá»© báº¯t Ä‘áº§u vÃ  káº¿t thÃºc á»Ÿ Git"** (*Git as the Single Source of Truth*). KhÃ´ng cÃ³ cÆ¡ sá»Ÿ dá»¯ liá»‡u (Database), khÃ´ng cÃ³ mÃ¡y chá»§ á»©ng dá»¥ng cháº¡y ngáº§m (No Server Runtime).

### 2.1. Luá»“ng dá»¯ liá»‡u má»™t chiá»u (Unidirectional Data Flow)

Há»‡ thá»‘ng váº­n hÃ nh theo má»™t chu trÃ¬nh khÃ©p kÃ­n, má»™t chiá»u, khÃ´ng phÃ¡t sinh báº¥t ká»³ tráº¡ng thÃ¡i Ä‘á»™ng (state) nÃ o á»Ÿ phÃ­a mÃ¡y chá»§:

```
[TÃ¡c giáº£] 
   â”‚
   â”œâ”€â–º Viáº¿t bÃ i qua Decap CMS (/admin) hoáº·c chá»‰nh sá»­a file .md cá»¥c bá»™
   â”‚
   â–¼
[GitHub Repository] (LÆ°u trá»¯ mÃ£ nguá»“n + thÆ° má»¥c content/)
   â”‚
   â”œâ”€â–º Push trigger kÃ­ch hoáº¡t Webhook
   â”‚
   â–¼
[GitHub Actions CI/CD] 
   â”‚
   â”œâ”€â–º npm ci
   â”œâ”€â–º next build (SSG prerender: quÃ©t content/ -> biÃªn dá»‹ch ra HTML/CSS/JS tÄ©nh)
   â”‚
   â–¼
[ThÆ° má»¥c tÄ©nh ./out] 
   â”‚
   â”œâ”€â–º actions/deploy-pages
   â”‚
   â–¼
[GitHub Pages CDN] â”€â”€â”€â”€â–º [Äá»™c giáº£ truy cáº­p] (Táº£i file tÄ©nh, TTFB siÃªu tá»‘c)
```

Táº¥t cáº£ cÃ¡c thay Ä‘á»•i vá» ná»™i dung Ä‘á»u Ä‘Æ°á»£c biá»ƒu diá»…n dÆ°á»›i dáº¡ng cÃ¡c **Git Commit**. Äiá»u nÃ y mang láº¡i nhá»¯ng Æ°u Ä‘iá»ƒm vÆ°á»£t trá»™i:
1. **Lá»‹ch sá»­ phiÃªn báº£n tuyá»‡t Ä‘á»‘i**: Má»i bÃ i viáº¿t Ä‘á»u cÃ³ commit log rÃµ rÃ ng, cÃ³ thá»ƒ rollback vá» báº¥t ká»³ thá»i Ä‘iá»ƒm nÃ o.
2. **Sao lÆ°u phÃ¢n tÃ¡n (Distributed Backup)**: Chá»‰ cáº§n lá»‡nh `git clone`, toÃ n bá»™ bÃ i viáº¿t, dá»± Ã¡n vÃ  mÃ£ nguá»“n Ä‘Æ°á»£c táº£i vá» mÃ¡y cÃ¡ nhÃ¢n nguyÃªn váº¹n.

---

### 2.2. Content Model & Táº§ng truy xuáº¥t dá»¯ liá»‡u (Data Access Layer)

Ná»™i dung khÃ´ng náº±m trong báº£ng cÆ¡ sá»Ÿ dá»¯ liá»‡u mÃ  Ä‘Æ°á»£c phÃ¢n bá»• vÃ o cÃ¡c tá»‡p Markdown pháº³ng cÃ³ cáº¥u trÃºc:

* `content/posts/*.md`: Chá»©a cÃ¡c bÃ i viáº¿t blog kÃ¨m metadata (tiÃªu Ä‘á», ngÃ y Ä‘Äƒng, tags, mÃ´ táº£ tÃ³m táº¯t).
* `content/projects/*.md`: Chá»©a cÃ¡c case-study dá»± Ã¡n portfolio kÃ¨m tech stack, vai trÃ², Ä‘Æ°á»ng link live demo/repo.

Táº¡i táº§ng logic dá»¯ liá»‡u (`src/lib/posts.js` vÃ  `src/lib/projects.js`), thÆ° viá»‡n `gray-matter` Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ bÃ³c tÃ¡ch **Frontmatter** (pháº§n header YAML) ra khá»i pháº§n ná»™i dung Markdown:

```javascript
// Äá»c ná»™i dung file Markdown vÃ  bÃ³c tÃ¡ch metadata
const fileContents = fs.readFileSync(fullPath, "utf8");
const { data, content } = matter(fileContents);
```

---

### 2.3. Pipeline biáº¿n Ä‘á»•i Markdown thÃ´ng qua AST (Abstract Syntax Tree)

Thay vÃ¬ dÃ¹ng Regex hoáº·c cÃ¡c bá»™ chuyá»ƒn Ä‘á»•i thÃ´ sÆ¡ dá»… dÃ­nh lá»—i báº£o máº­t XSS, dá»± Ã¡n sá»­ dá»¥ng há»‡ sinh thÃ¡i **Unified**:

```
Markdown thÃ´ (String)
   â”‚
   â–¼ [remark-parse]
Markdown AST (mdast)
   â”‚
   â–¼ [remark-rehype]
HTML AST (hast)
   â”‚
   â–¼ [rehype-highlight]  <-- PhÃ¢n tÃ­ch cÃº phÃ¡p code vÃ  gáº¯n class hljs-*
Tokenized HTML AST
   â”‚
   â–¼ [rehype-stringify]
HTML String an toÃ n hoÃ n chá»‰nh
```

ToÃ n bá»™ quÃ¡ trÃ¬nh parse cÃº phÃ¡p vÃ  tÃ´ mÃ u code diá»…n ra **ngay táº¡i thá»i Ä‘iá»ƒm build (Build-time)**, Ä‘á»™c giáº£ khi truy cáº­p sáº½ nháº­n ngay HTML Ä‘Ã£ Ä‘Æ°á»£c tÃ´ mÃ u sáºµn mÃ  khÃ´ng cáº§n trÃ¬nh duyá»‡t pháº£i cháº¡y thÆ° viá»‡n JavaScript náº·ng ná» Ä‘á»ƒ highlight láº¡i.

---

### 2.4. Static Site Generation (SSG) vá»›i Next.js 16 App Router

Trang sá»­ dá»¥ng Ä‘á»‹nh tuyáº¿n Ä‘á»™ng cá»§a Next.js `[slug]` káº¿t há»£p hÃ m `generateStaticParams()`:

```javascript
// Next.js sáº½ gá»i hÃ m nÃ y lÃºc build Ä‘á»ƒ duyá»‡t toÃ n bá»™ file markdown
export function generateStaticParams() {
  return getAllPostSlugs();
}

// Render sáºµn tá»«ng trang bÃ i viáº¿t thÃ nh file HTML váº­t lÃ½
export default async function BlogPostPage({ params }) {
  const { slug } = await params; // CÃº phÃ¡p Promise cá»§a Next.js 16
  const post = await getPostBySlug(slug);
  return <BlogContent html={post.contentHtml} />;
}
```

Khi cháº¡y `next build`, Next.js sáº½ sinh ra cáº¥u trÃºc cÃ¢y thÆ° má»¥c tÄ©nh tÆ°Æ¡ng á»©ng trong `./out`:
* `out/index.html`
* `out/blog/index.html`
* `out/blog/hello-world/index.html`
* `out/projects/index.html`
* `out/projects/sample-project/index.html`

Äá»“ng thá»i, cáº¥u hÃ¬nh `basePath: isProd ? "/ndh.log" : ""` giÃºp website tÆ°Æ¡ng thÃ­ch tá»± Ä‘á»™ng: khi cháº¡y local lÃ  gá»‘c `/`, khi Ä‘áº©y lÃªn GitHub Pages sáº½ tá»± khá»›p vá»›i subpath `/ndh.log/` mÃ  khÃ´ng bá»‹ lá»—i 404 tÃ i nguyÃªn CSS/JS.

---

### 2.5. CÆ¡ cháº¿ xÃ¡c thá»±c PKCE vá»›i DecapBridge cho CMS trÃªn ná»n táº£ng tÄ©nh

Má»™t thÃ¡ch thá»©c lá»›n cá»§a CMS ná»n táº£ng tÄ©nh trÃªn GitHub Pages lÃ : **GitHub OAuth báº¯t buá»™c pháº£i cÃ³ mÃ¡y chá»§ bÃ­ máº­t (Client Secret) Ä‘á»ƒ trao Ä‘á»•i Access Token**, trong khi GitHub Pages chá»‰ lÃ  hosting tÄ©nh.

Há»‡ thá»‘ng giáº£i quyáº¿t triá»‡t Ä‘á»ƒ váº¥n Ä‘á» nÃ y báº±ng viá»‡c á»©ng dá»¥ng chuáº©n **OAuth 2.0 PKCE (Proof Key for Code Exchange)** thÃ´ng qua dá»‹ch vá»¥ trung gian **DecapBridge**:
1. Khi báº¥m **Login**, Decap CMS sinh ra má»™t cáº·p khÃ³a máº­t mÃ£ ngáº«u nhiÃªn (`code_verifier` vÃ  `code_challenge`).
2. TrÃ¬nh duyá»‡t gá»­i `code_challenge` sang GitHub.
3. Sau khi ngÆ°á»i dÃ¹ng Ä‘á»“ng Ã½, GitHub tráº£ vá» authorization code.
4. TrÃ¬nh duyá»‡t gá»­i láº¡i `code` cÃ¹ng `code_verifier` nguyÃªn báº£n cho Git Gateway Ä‘á»ƒ Ä‘á»‘i chiáº¿u vÃ  cáº¥p quyá»n ghi vÃ o repository.

Nhá» Ä‘Ã³, tÃ¡c giáº£ cÃ³ thá»ƒ má»Ÿ trÃ¬nh duyá»‡t trÃªn Ä‘iá»‡n thoáº¡i hoáº·c báº¥t ká»³ mÃ¡y tÃ­nh nÃ o, truy cáº­p `/admin/`, Ä‘Äƒng nháº­p 1 cháº¡m qua tÃ i khoáº£n GitHub vÃ  viáº¿t bÃ i mÃ  khÃ´ng cáº§n pháº£i cÃ i Ä‘áº·t báº¥t ká»³ server backend nÃ o.

---

### 2.6. MÃ´ hÃ¬nh báº£o máº­t & Hiá»‡u nÄƒng Zero-Cold-Start

* **Báº£o máº­t tuyá»‡t Ä‘á»‘i**: VÃ¬ khÃ´ng cÃ³ cÆ¡ sá»Ÿ dá»¯ liá»‡u hay runtime backend, káº» táº¥n cÃ´ng khÃ´ng thá»ƒ thá»±c hiá»‡n SQL Injection, RCE (Remote Code Execution) hay táº¥n cÃ´ng vÃ o cÃ¡c endpoint quáº£n trá»‹.
* **Thá»i gian Ä‘Ã¡p á»©ng siÃªu nhanh (0ms Cold Start)**: CÃ¡c trang Ä‘Æ°á»£c CDN cá»§a GitHub Pages phÃ¢n phá»‘i trá»±c tiáº¿p tá»« bá»™ nhá»› Ä‘á»‡m táº¡i rÃ¬a máº¡ng (Edge Cache), Ä‘áº¡t Ä‘iá»ƒm sá»‘ Google Lighthouse gáº§n nhÆ° tá»‘i Ä‘a.

---

## 3. CÃ¡ch triá»ƒn khai (SÆ¡ lÆ°á»£c)

Quy trÃ¬nh triá»ƒn khai há»‡ sinh thÃ¡i nÃ y gá»“m 4 bÆ°á»›c chÃ­nh:

1. **Khá»Ÿi táº¡o mÃ£ nguá»“n**: Dá»±ng dá»± Ã¡n Next.js App Router, cáº¥u hÃ¬nh file `next.config.js` vá»›i cá» `output: "export"`.
2. **Cáº¥u hÃ¬nh CMS**: Táº¡o file `public/admin/index.html` (nhÃºng thÆ° viá»‡n Decap CMS) vÃ  `public/admin/config.yml` (khai bÃ¡o cÃ¡c collection bÃ i viáº¿t, dá»± Ã¡n).
3. **TÃ­ch há»£p DecapBridge**: ÄÄƒng kÃ½ trang web táº¡i DecapBridge Ä‘á»ƒ láº¥y endpoint PKCE gáº¯n vÃ o `config.yml`.
4. **Tá»± Ä‘á»™ng hÃ³a CI/CD**: Viáº¿t file `.github/workflows/deploy.yml` Ä‘á»ƒ má»—i khi cÃ³ commit má»›i vÃ o nhÃ¡nh `main`, GitHub Actions sáº½ tá»± Ä‘á»™ng cÃ i thÆ° viá»‡n, build Next.js vÃ  Ä‘áº©y thÆ° má»¥c `./out` lÃªn GitHub Pages.

---

## 4. Lá»i káº¿t

Kiáº¿n trÃºc tÄ©nh káº¿t há»£p Git-based CMS lÃ  minh chá»©ng rÃµ rÃ ng cho viá»‡c: **KhÃ´ng cáº§n háº¡ táº§ng phá»©c táº¡p hay chi phÃ­ hÃ ng thÃ¡ng, ta váº«n cÃ³ thá»ƒ xÃ¢y dá»±ng má»™t há»‡ thá»‘ng xuáº¥t báº£n ná»™i dung chuyÃªn nghiá»‡p, tá»‘c Ä‘á»™ cao vÃ  bá»n vá»¯ng theo thá»i gian.**

