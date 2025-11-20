// 
interface DocsProps {
    params: {
        slug?: string[];
    }
}
// http://localhost:3000/docs/
// http://localhost:3000/docs/setup
// http://localhost:3000/docs/setup/install
// http://localhost:3000/docs/a/b/c


export default async function DocsProps({params} : DocsProps) {
    const {slug = []} = await params;
    
    return (
        <div>
            <h1>Docs Page</h1>
            {slug.length > 0 ? (
                <p>Path Segments: {slug.join(" / ")}</p>
            ): (
                <p>Ini halaman utama Docs (tanpa path tambahan)</p>
            )}
        </div>
    )
}