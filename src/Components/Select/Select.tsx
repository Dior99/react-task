import React from 'react';

type ItemType = {
    value: any
    title: string
}

export type SelectPropsType = {
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    return (
        <select>
            <option>{props.items.filter( e => props.onChange(e.title))}</option>
            {props.items.map(e => <option>{e.title}</option>)}
        </select>
    )
}