import axios from 'axios'
import useSWR from 'swr'

export const getter = (url: string) => axios.get(url, {
    headers: {
		'X-RapidAPI-Key': '9e89d4ea21msh48f2cd0ac7d903ep132579jsna3c3bc99b2a5',
		'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
	}
}
    )
    .then((response) => response.data)

export const useGetJokes = () => {
    const url = `https://programmer-humor.p.rapidapi.com/api/9gag?after=5`

    const { data, isLoading, error} = useSWR(url, getter)
    

    return { data, isLoading, error}
}