import { useLoaderData } from '@remix-run/react';
const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export async function loader() {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data: Post[] = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

const Posts = () => {
    const posts = useLoaderData<typeof loader>();
    console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </div>
    );
};

export default Posts;
