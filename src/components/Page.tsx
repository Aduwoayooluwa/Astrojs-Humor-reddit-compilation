import React from "@astrojs/react"
import { create } from "zustand"

type Props = {}

type Store = {
    votes: number,
    addVote: () => void,
    subVote: () => void
}


const Page = (props: Props) => {
    const useStore = create<Store>(set => ({
        votes: 0,
        addVote: () => set(state => ({votes: state.votes + 1})),
        subVote: () => set(state => ({ votes: state.votes - 1}))
    }))
    
    const getVotes = useStore(state => state.votes)
    const addVotes = useStore(state => state.addVote)
    console.log(getVotes)
    return (
        <div className="font-semibold">
            Page 1
            <h1>{getVotes} people have cast their votes</h1>
            <button className='bg-red-400 p-2 rounded-md text-white' onClick={() => addVotes()}>Add Vote {getVotes}</button>
        </div>
    )
}

export default Page