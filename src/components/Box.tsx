type Props = {
    classNames?: string
    onClick: (id: number) => void
    id: number
}

export function Box ({classNames, onClick, id}: Props) {
    return <div className={`box ${classNames}`} onClick={onClick.bind({}, id)} />
}