import Link from "next/link";
import Image from "next/image";

import postsData from "@/data/posts.json";

export default function BlogPreview() {
  // Take only the latest 4 posts for the preview
  const posts = postsData.slice(0, 4);

  return (
    <section id="blog">
      <div className="container">
        <div className="blog-header">
          <div>
            <span className="section-label">Insights & Updates</span>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              From the Gridlines Blog
            </h2>
          </div>
          <Link href="/blog" className="blog-link">
            View all posts{" "}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
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
  );
}
