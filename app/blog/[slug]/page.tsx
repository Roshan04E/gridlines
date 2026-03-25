import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import postsData from "@/data/posts.json";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = postsData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--off-white)", minHeight: "100vh" }}>
        {/* Post Hero */}
        <div style={{ position: "relative", width: "100%", height: "60vh", minHeight: "400px" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(13,31,60,0.8) 0%, rgba(13,31,60,0.4) 100%)",
            }}
          ></div>
          <div className="container" style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "80px" }}>
            <div style={{ maxWidth: "800px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
                <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 8H3M7 12L3 8L7 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
              <div className="blog-meta" style={{ marginBottom: "24px" }}>
                <span className="blog-cat" style={{ ...post.catStyles, background: "rgba(255,255,255,0.1)", color: "white", backdropFilter: "blur(8px)" }}>
                  {post.category}
                </span>
                <span className="blog-date" style={{ color: "rgba(255,255,255,0.8)" }}>{post.date}</span>
              </div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 1.2, margin: 0 }}>
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <article className="container" style={{ padding: "80px 24px", maxWidth: "800px" }}>
          <div 
            style={{ 
              fontFamily: "var(--font-body)", 
              fontSize: "1.1rem", 
              lineHeight: 1.8, 
              color: "var(--body-text)",
              whiteSpace: "pre-wrap"
            }}
          >
            {post.content}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
