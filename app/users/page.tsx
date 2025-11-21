
type User = {
    id: number;
    name: string;
    email: string;
}

// https://jsonplaceholder.typicode.com/users
export default async function UsersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    
    return (
        <div style={{ padding: 20}}>
            <h1>Daftar User</h1>
            <ul>
                {users.map((u: User) => (
                    <li key={u.id}>
                        {u.name} - <i>{u.email}</i>
                    </li>
                ))}
            </ul>
        </div>
    )
} 