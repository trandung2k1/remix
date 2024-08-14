import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
const url = 'https://jsonplaceholder.typicode.com/posts/';
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export async function loader({ params }: LoaderFunctionArgs) {
    const { id } = params;
    try {
        const response = await fetch(url + id);
        if (response.status === 200) {
            const data: Post = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

const Post = () => {
    const post = useLoaderData<typeof loader>();
    // console.log(post);
    return <div>{post.title}</div>;
};

export default Post;
