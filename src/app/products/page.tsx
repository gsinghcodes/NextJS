import Link from "next/link"

export default function ProductPagea() {
    const productId = [1, 2, 3, 4]
    return (
        <>
            <Link href={"/"} >Home</Link>
            <h1>Product List</h1>
            {productId.map(id => <h3 key={id} ><Link href={`/products/${id}`} replace >Product {id}</Link></h3>)}
        </>
    )
}