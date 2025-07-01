type User = {
    id: number,
    name: string,
}

export default async function FetchUser({userId}: {userId: number}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await response.json()
    return <div>
        Written by: {data.name}
    </div>
}