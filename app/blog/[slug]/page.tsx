export const dynamic = 'force-dynamic';
export const revalidate = 420; 

interface Post{
    title:string;
    content:string;
    slug:string;
}

interface Props{
    params: Promise<{slug:string}>;
}

export default async function BlogPostPage({params}:Props) {
    const { slug } = await params;
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const posts : Post[] = await fetch(`${baseUrl}/api/content`, {cache:'no-cache'}).then(
        (res) => res.json()
    );
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return (
            <div>
                <h1>Post Not Found</h1>
                <p>The blog post you're looking for doesn't exist.</p>
            </div>
        );
    }

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}