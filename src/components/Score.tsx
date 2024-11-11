import { useContext } from "react"
import { GameData } from "../AppContext"

export function Score () {
    const {hits} = useContext(GameData)

    console.log('hits',hits)
    return <div className="score-container">

            {hits.map((time, index) => <div className="score" key={`hit_${index}`}>
                <p>{index + 1}</p>
                <p>{time}</p>
            </div>)}

    </div>
}