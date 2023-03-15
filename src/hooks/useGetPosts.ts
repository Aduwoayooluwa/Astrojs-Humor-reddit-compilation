import axios from 'axios'
import useSWR from 'swr'

export const getter = (url: string) => axios.get(url, {
    headers: {
		
	}
}
    )
    .then((response) => response.data)

export const useGetJokes = () => {
    const url = `https://programmer-humor.p.rapidapi.com/api/9gag?after=5`

    const { data, isLoading, error} = useSWR(url, getter)
    

    return { data, isLoading, error}
}