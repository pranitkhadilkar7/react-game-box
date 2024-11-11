import { NO_OF_BOXES } from "./Constant"

export function getArrayOfBoxes () {
    let arr: {id: number}[] = []
    for (let i = 1; i <= NO_OF_BOXES; i++) {
        arr.push({id: i})
    }
    return arr
}