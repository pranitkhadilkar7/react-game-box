import {createContext, useCallback, useEffect, useState} from 'react'

type GameStatus = 'START' | 'PAUSE' | 'RESET'

export const GameData = createContext<{hits: string[], 
        addToHits: (time: string) => void, 
        status: GameStatus,
        setStatus: (status: GameStatus) => void}>({
    hits: [],
    addToHits: (time: string) => {},
    status: 'START',
    setStatus: () => {}
})

type Props = {
    children: JSX.Element
}


export function AppContext ({children}: Props) {
    const [hits, setHits] = useState<string[]>([])
    const [status, setStatus] = useState<GameStatus>('START')


    const addToHits = useCallback((time: string) => {
        setHits(pre => [...pre, time])
    }, [])

    useEffect(() => {
        if (status === 'RESET') {
            setHits([])
        }
    }, [status])


    return <GameData.Provider value={{hits, addToHits, status, setStatus}}>
        {children}
    </GameData.Provider>
}