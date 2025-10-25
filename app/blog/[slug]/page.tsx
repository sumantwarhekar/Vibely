export const revalidate=420; 

interface Post{
    title:string;
    content:string;
    slug:string;
}

interface Props{
    params: Promise<{slug:string}>;
}

export async function generateStaticParams(){
        const posts : Post[] = await fetch('http://localhost:3000/api/content').then(
            (res) => res.json()
        ); 

        return posts.map((post) => ({
            slug : post.slug,
        }));
}

export default async function BlogPostPage({params}:Props) {
    const { slug } = await params;
    const posts : Post[] = await fetch('http://localhost:3000/api/content', {cache:'no-cache'}).then(
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