import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Welcome to Vibely! 🎉</h1>
          <p>Hey {session.user?.name || 'there'}! Welcome to your social hub.</p>
        </div>
        
        <div className={styles.welcome}>
          <div className={styles.featureCard}>
            <h2>✨ What you can do here:</h2>
            <ul>
              <li>📝 <strong>Edit your profile</strong> - Add your bio, age, and profile picture</li>
              <li>👥 <strong>Discover users</strong> - Browse through our community</li>
              <li>🔗 <strong>Follow people</strong> - Connect with others you find interesting</li>
              <li>📖 <strong>Read blog posts</strong> - Check out our latest content</li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
