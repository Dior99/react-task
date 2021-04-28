import React, {ChangeEvent, useState} from 'react';

export type InputPropsType = {

}

export function Input(props: InputPropsType) {
    const [value, setValue] = useState('')
    let inputRef = React.createRef<HTMLInputElement>()

    const save = () => {
        if (inputRef.current) {
            setValue(inputRef.current.value)
        }
    }
    return (
        <div>
            <input ref={inputRef}/> <button onClick={save}>Add</button> - {value}
        </div>
    )
}