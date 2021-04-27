import React, {useState} from 'react';

export type UncontrolledOnOffType = {
    onClick: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffType) {

    const [on, setOn] = useState(false);

    const header = {
        display: "flex",
    }
    const buttonOn = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        marginRight: "10px",
        backgroundColor: on ? "green" : "white",
    }
    const buttonOff = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        marginRight: "10px",
        backgroundColor: on ? "white" : "red",
    }
    const circle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "30px",
        marginRight: "10px",
        alignSelf: "center",
        backgroundColor: on ? "green" : "red",
    }

    const onClicked = () => {
        setOn(true);
        props.onClick(true);
    };
    const offClicked = () => {
        setOn(false)
        props.onClick(false)
    };

    return (
        <div style={header}>
            <div style={buttonOn}
                 onClick={ onClicked }>On</div>
            <div style={buttonOff} onClick={ offClicked }>Off</div>
            <div style={circle}></div>
        </div>
    )
}