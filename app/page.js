// app/page.js — versi steril TANPA import, TANPA map, TANPA event handler
export default function Page() {
  return (
    <main style={{ padding: 32, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
      <div style={{
        borderRadius: 24,
        padding: 24,
        color: "white",
        backgroundImage: "linear-gradient(135deg,#0B2C36 0%,#135868 50%,#2B7A8C 100%)",
        boxShadow: "0 8px 30px rgba(0,0,0,.08)"
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center",
          borderRadius: 999, padding: "6px 12px",
          border: "1px solid rgba(255,255,255,.3)", background: "rgba(255,255,255,.1)",
          fontSize: 12, fontWeight: 600
        }}>
          Valtren Corp HQ
        </div>
        <h1 style={{ margin: "12px 0 0", fontSize: 40, fontWeight: 800, lineHeight: 1.15 }}>
          Growth Engine untuk <span style={{ color: "#17B894" }}>Bisnis yang Ngebut</span>
        </h1>
        <p style={{ marginTop: 8, opacity: .9, maxWidth: 720 }}>
          Multi-funnel terintegrasi: SEO lokal, marketplace, tracking, hingga chat-closing.
        </p>
        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/wa-funnel"
             style={{ background:"#17B894", color:"#fff", padding:"12px 18px",
                      borderRadius:12, fontWeight:600, textDecoration:"none" }}>
            Mulai dari WA Funnel
          </a>
          <a href="#funnels"
             style={{ color:"#fff", padding:"12px 18px",
                      borderRadius:12, border:"1px solid rgba(255,255,255,.2)",
                      background:"rgba(255,255,255,.1)", textDecoration:"none" }}>
            Lihat Semua Funnel
          </a>
        </div>
      </div>

      <div style={{ display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
                    marginTop:24 }}>
        <div style={{ background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee" }}>
          <div style={{ fontWeight:700 }}>Cepat</div>
          <div style={{ color:"#6b7280", marginTop:6 }}>ISR + edge cache. Kencang & stabil.</div>
        </div>
        <div style={{ background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee" }}>
          <div style={{ fontWeight:700 }}>Terukur</div>
          <div style={{ color:"#6b7280", marginTop:6 }}>Pixel & analytics rapi.</div>
        </div>
        <div style={{ background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee" }}>
          <div style={{ fontWeight:700 }}>Siap Scale</div>
          <div style={{ color:"#6b7280", marginTop:6 }}>Modular & gampang nambah funnel.</div>
        </div>
      </div>

      <div id="funnels" style={{ marginTop:24 }}>
        <h2 style={{ fontSize:24, fontWeight:800 }}>Pilih Jalur Eksekusi</h2>
        <div style={{ display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", marginTop:12 }}>
          <a href="/gbp-sprint" style={{ display:"block", background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee", textDecoration:"none", color:"inherit" }}>
            <div style={{ fontWeight:700 }}>GBP Sprint</div>
            <div style={{ color:"#6b7280", marginTop:6 }}>Optimasi GBP 7 hari.</div>
          </a>
          <a href="/marketplace-makeover" style={{ display:"block", background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee", textDecoration:"none", color:"inherit" }}>
            <div style={{ fontWeight:700 }}>Marketplace Makeover</div>
            <div style={{ color:"#6b7280", marginTop:6 }}>Listing glow-up & conversion.</div>
          </a>
          <a href="/pixel-audit" style={{ display:"block", background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee", textDecoration:"none", color:"inherit" }}>
            <div style={{ fontWeight:700 }}>Pixel Audit</div>
            <div style={{ color:"#6b7280", marginTop:6 }}>Tracking & events akurat.</div>
          </a>
          <a href="/wa-funnel" style={{ display:"block", background:"#fff", borderRadius:16, padding:16, border:"1px solid #eee", textDecoration:"none", color:"inherit" }}>
            <div style={{ fontWeight:700 }}>WA Funnel</div>
            <div style={{ color:"#6b7280", marginTop:6 }}>Klik → chat → closing.</div>
          </a>
        </div>
      </div>

      <div style={{ marginTop:24, borderRadius:24, padding:24,
                    color:"#fff", backgroundImage:"linear-gradient(90deg,#0E3A47,#2B7A8C)" }}>
        <div style={{ fontSize:22, fontWeight:800 }}>Siap gas? Eksekusi tanpa drama.</div>
        <div style={{ opacity:.9 }}>Kita bantu set funnel, tracking, sampai closing.</div>
        <a href="/wa-funnel"
           style={{ marginTop:12, display:"inline-block", color:"#fff",
                    padding:"12px 18px", borderRadius:12, border:"1px solid rgba(255,255,255,.3)",
                    textDecoration:"none" }}>
          Chat sekarang
        </a>
      </div>
    </main>
  );
            }
