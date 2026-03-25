import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import postsData from "@/data/posts.json";

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--off-white)", minHeight: "80vh" }}>
        
        {/* Blog Index Hero */}
        <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1A3460 100%)", padding: "160px 0 80px 0", textAlign: "center", position: "relative" }}>
          <div className="hero-grain"></div>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <span className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>All Insights</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "24px" }}>
              Gridlines Blog & News
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", margin: "0 auto", maxWidth: "600px" }}>
              Explore expert advice, business trends, and strategic insights for real estate and construction.
            </p>
          </div>
        </div>

        <section id="blog-index" style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="blog-grid">
              {postsData.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span className="blog-cat" style={post.catStyles}>
                        {post.category}
                      </span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <div className="blog-title">{post.title}</div>
                    <p className="blog-excerpt">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
