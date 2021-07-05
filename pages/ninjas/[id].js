import React from 'react'

export const getStaticPaths = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const res = await fetch(url);
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: {
                id: ninja.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            ninja: data
        }
    }
}


export default function DetailsPage({ninja}) {
    return (
        <div>
            <h1>Details Page</h1>
            Welcome, {ninja.name}!
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}
