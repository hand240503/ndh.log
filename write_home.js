const fs = require('fs');

const content = ---
timeline:
  - dates: "2022-2026"
    content: "Sinh viên ngành Công nghệ Thông tin tại **[VKU (Đại học CNTT & TT Việt - Hàn)](https://vku.udn.vn/vi/)**."
  - dates: "4/2026-11/2026"
    content: "**IT Operations & System Administrator** at XTEK."
  - dates: "2014-2020"
    content: "**[Career change](/career-change/)**: Unpaid intern by day, cook by night. [Wrote everything down](/blog/) along the way."
  - dates: "2021-now"
    content: "**[Principal software engineer](/me/)**: Building design systems, setting technical direction. [177 posts](/blog/), [40+ publications](/publications/), and [20,000+ stars on GitHub](https://github.com/taniarascia)."
---
;

fs.writeFileSync('content/pages/home.md', content, 'utf8');