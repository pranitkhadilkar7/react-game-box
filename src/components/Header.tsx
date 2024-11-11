import { useContext } from "react"
import { GameData } from "../AppContext"

export function Header() {
    const {setStatus, status} = useContext(GameData)

    return <div className="header">
        <div className="header-button-container">
            <button disabled={status === 'START'} onClick={() => setStatus('START')}>Start</button>
            <button disabled={status === 'PAUSE'}  onClick={() => setStatus('PAUSE')} className="mx-8">Pause</button>
            <button disabled={status === 'RESET'} onClick={() => setStatus('RESET')}>Reset</button>
        </div>
    </div>
}