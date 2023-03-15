import React from '@astrojs/react'
import { useGetJokes } from '../hooks/useGetPosts'

type Props = {}

const url:string = 'https://programmer-humor.p.rapidapi.com/api/9gag?after=5'

const response =  await fetch(url, {
    headers: {
        'X-RapidAPI-Key': '9e89d4ea21msh48f2cd0ac7d903ep132579jsna3c3bc99b2a5',
        'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
    }
}).then((response) => {
    response.json()
    console.log(response.json())
})

const Jokes = (props: Props) => {
    return (
        <div>{JSON.stringify(response)}</div>
    )
}

export default Jokes