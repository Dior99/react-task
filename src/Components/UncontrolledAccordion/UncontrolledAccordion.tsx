import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

export type AccordionPropsType = {
    value: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
            <AccordionTitle value={props.value} onClick={ () => dispatch({type: "TOGGLE-COLLAPSED"}) }/>
            { !state.collapsed && <AccordionText/>}
        </div>
    )
}

type AccordionTitleType = {
    value: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={ () => {props.onClick()} }>{props.value}</h3>
    )
}

function AccordionText() {
    return (
        <div>
            <li>HTML</li>
            <li>CSS</li>
            <li>REACT</li>
        </div>
    )
}