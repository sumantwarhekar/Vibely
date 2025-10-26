import Link from 'next/link';
import styles from './page.module.css';

interface Post {
  title: string;
  content: string;
  slug: string;
}

export default async function BlogPage() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content', {
    cache: 'no-cache',
  }).then((res) => res.json());

  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <p className={styles.subtitle}>Explore our latest articles and insights</p>

      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.card}>
            <h2>{post.title}</h2>
            <p className={styles.excerpt}>{post.content.substring(0, 150)}...</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
