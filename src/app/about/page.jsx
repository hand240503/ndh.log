export default function AboutPage() {
  const sections = [
    {
      text: `Trang này mình dùng để ghi lại những thứ mình đang học — không phải để trình bày cho đẹp, mà để sau này đọc lại còn hiểu được mình đã làm gì, vì sao làm vậy.`,
    },
    {
      text: `Hệ thống hoạt động hoàn toàn không tốn tiền. Toàn bộ nội dung là file Markdown, lưu trong Git, build thành trang tĩnh qua Next.js, và deploy miễn phí trên GitHub Pages. Không có server, không có database, không có hoá đơn cuối tháng.`,
    },
    {
      text: `Mỗi bài viết gắn với một chủ đề — kiểu như network, devops, code. Có thể liên kết sang bài liên quan để ôn theo mạch kiến thức thay vì theo thứ tự thời gian. Toàn bộ danh mục sinh tự động khi build, không cần cập nhật tay.`,
    },
    {
      text: `Lý do mình chọn cách này: muốn viết xong là xong, không phải lo database sập, hosting hết hạn, hay plugin lỗi. Markdown mở được bằng bất kỳ editor nào, Git thì ai cũng biết, và GitHub Pages thì mình không phải trả gì cả.`,
    },
    {
      text: `Nếu bạn thấy cách làm này hữu ích, toàn bộ source code mở ở GitHub — fork về rồi chỉnh nội dung thành của bạn là xong.`,
    },
  ];

  return (
    <>
      {/* Page head */}
      <div style={{ padding: "40px 0 8px" }}>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            margin: "0 0 8px",
          }}
        >
          Giới thiệu
        </h1>
        <p
          style={{
            color: "var(--muted)",
            fontSize: 14.5,
            marginBottom: 36,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Hệ thống zero-cost personal log — không hosting, không database, chỉ có Markdown và Git.
        </p>
      </div>

      {/* Body paragraphs */}
      <div style={{ maxWidth: 620 }}>
        {sections.map((s, i) => (
          <p
            key={i}
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "#2b2c30",
              marginBottom: 22,
            }}
          >
            {s.text}
          </p>
        ))}

        {/* Stack info */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 26,
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "var(--muted)",
              marginBottom: 14,
            }}
          >
            Stack kỹ thuật
          </div>

          {[
            ["Viết nội dung", "Markdown (.md) — mở được bằng bất kỳ editor nào"],
            ["Framework", "Next.js — build ra HTML tĩnh, không cần server"],
            ["Lưu trữ", "GitHub — version control + hosting miễn phí"],
            ["Deploy", "GitHub Pages — auto deploy khi push lên main"],
            ["Chi phí", "0 đồng / tháng"],
          ].map(([key, val]) => (
            <div
              key={key}
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 4,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              <span style={{ color: "var(--c-devops)", minWidth: 120 }}>{key}:</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}