import React from 'react';

export type AccordionPropsType = {
    collapsed: boolean
    value: string
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle value={props.value}
                                onClick={props.onClick}
                                />
                {!props.collapsed && <AccordionText/>}
            </div>
        )
}

type AccordionTitleType = {
    value: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.onClick}>{props.value}</h3>
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
