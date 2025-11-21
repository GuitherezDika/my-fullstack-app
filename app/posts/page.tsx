// https://jsonplaceholder.typicode.com/posts
type PostData = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostsUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData: PostData[] = await res.json();

    return (
        <div style={{ padding: 20 }}>
            <h1>Daftar Posts</h1>
            <ul>
                {postsData.map((p: PostData) => (
                    <li key={p.id} style={{ marginBottom: 20 }}>
                        <strong>{p.title}</strong>

                        <p>{p.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}