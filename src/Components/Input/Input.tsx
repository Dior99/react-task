import React from 'react';

export type InputPropsType = {
    value: string
    onChange: (value: string) => void
}

export function Input(props: InputPropsType) {

    const changeInput = () => {
            props.onChange(props.value)
    }

    return (
        <div>
            <input onChange={changeInput}/>
        </div>
    )
}