import React from 'react';

type UncontrolledOnOffType = {
    collapsed: boolean
    onClick: () => void
}

function OnOff(props: UncontrolledOnOffType) {

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
        backgroundColor: props.collapsed ? "green" : "white",
    }
    const buttonOff = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        marginRight: "10px",
        backgroundColor: props.collapsed ? "white" : "red",
    }
    const circle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "30px",
        marginRight: "10px",
        alignSelf: "center",
        backgroundColor: props.collapsed ? "green" : "red",
    }

    return (
        <div style={header}>
            <div style={buttonOn} onClick={props.onClick}>On</div>
            <div style={buttonOff} onClick={props.onClick}>Off</div>
            <div style={circle}></div>
        </div>
    )
}

export default OnOff;