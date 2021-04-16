import React from 'react';

type OnOffPropsType = {
    collapsed: boolean
}

function OnOff(props: OnOffPropsType) {

    const header = {
        display: "flex",
    }
    const on = {
        width: "100px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "10px",
        marginRight: "10px",
        backgroundColor: !props.collapsed ? "green" : "white",
    }
    const off = {
        width: "100px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "10px",
        marginRight: "10px",
        backgroundColor: !props.collapsed ? "white" : "red",
    }
    const circle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "30px",
        marginRight: "10px",
        alignSelf: "center",
        backgroundColor: !props.collapsed ? "green" : "red",
    }

    return (
        <div style={header}>
            <div style={on}>On</div>
            <div style={off}>Off</div>
            <div style={circle}></div>
        </div>
    )
}
export default OnOff;