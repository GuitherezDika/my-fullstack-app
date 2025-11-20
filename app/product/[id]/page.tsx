interface ProductPageProps {
    params: {
        id: string;
    }
}

// http://localhost:3000/product/baju
export default async function ProductPage( {params} : ProductPageProps) {
    const {id} = await params; 
    const productName = `Produk dengan ID ${id}`; 
    return (
        <main style={{ padding: '20px' }}>
            <h1>Detail Produk</h1>
            <p>Halaman detail untuk: **{productName}**</p>
            <p>Nilai ID yang di ambil: **{id}**</p>
        </main>
    );
}