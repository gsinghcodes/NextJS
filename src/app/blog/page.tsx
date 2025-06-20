import Link from "next/link"
import { resolve } from "path"

export default async function BlogPage() {

    await new Promise(resolve =>
        setTimeout(() => {
            resolve('Intentional Delay')
        }, 2000)
    )

    return (
        <>
            <Link href={"/"}>Home</Link>
            <h1>This is a blog page</h1>
        </>
    )
}