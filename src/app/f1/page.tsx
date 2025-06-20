import Link from "next/link"

export default function Pageo() {
    return <>
        <h1>Page 1</h1>
        <div>
            <Link href={'/f1/f2'}>Page 2</Link>
        </div>
    </>
}