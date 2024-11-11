import { useCallback, useContext, useEffect, useState } from "react";
import { getArrayOfBoxes } from "../helper/CreateBoxes";
import { Box } from "./Box";
import { NO_OF_BOXES } from "../helper/Constant";
import { GameData } from "../AppContext";


export function GameArea () {
    const [activeBoxId, setActiveBoxId] = useState(0)
    const {addToHits, status} = useContext(GameData)
    const [timeStamp, setTimestamp] = useState(0)
    
    useEffect(() => {
        let interval: any;
        if (status === 'START') {
            interval = setInterval(() => {
                const randomId = Math.round(Math.random() * NO_OF_BOXES)
                // console.log(randomId)
                setActiveBoxId(randomId)
                setTimestamp(Date.now())
            }, 2000)
        }
        return () => clearInterval(interval)
    }, [status])

    const onClickBox = useCallback((id: number) => {
        // impl
        if (activeBoxId === id && status === 'START') {
            const timeDiff = Date.now() - timeStamp
            const seconds = ((timeDiff % 60000) / 1000);
            addToHits(`${seconds}`)
        }
    }, [activeBoxId, addToHits, status, timeStamp])

    return <div className="game-container">
        <div className="box-container">
            {getArrayOfBoxes().map(({id}) => <Box 
                classNames={(activeBoxId === id && (status === 'START' || status === 'PAUSE')) ? 'active': ''} 
                key={id}
                id={id}
                onClick={onClickBox} />)}
        </div>
    </div>
}