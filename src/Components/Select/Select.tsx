import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from "./Select.module.css"

type ItemType = {
    value: any
    title: string
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.value)

    useEffect( () => {
        setHover(props.value);
    }, [ props.value ])

    const onClickHandler = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }

    const selectedItem = props.items.find(e => e.value === props.value)
    const hoverItem = props.items.find(e => e.value === hover)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hover) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i+1] : props.items[i-1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
            return
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <div className={s.header} onClick={onClickHandler}>
                {selectedItem && selectedItem.title}
            </div>
            {active &&
            <div className={s.items}>
                {props.items.map(e => {
                    return (<div className={s.item + ' ' + (hoverItem === e ? s.selected : '')}
                                 onMouseEnter={() => {setHover(e.value)}}
                                 key={e.value}
                                 onClick={() => onItemClick(e.value)}>
                        {e.title}
                    </div>)
                })}
            </div>
            }
        </div>
    )
}