import React from 'react';

type AccordionPropsType = {
    collapsed: boolean
    value: string
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle value={props.value}/>
                {!props.collapsed && <AccordionText/>}
            </div>
        )
}

type AccordionTitleType = {
    value: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.value}</h3>
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

export default Accordion;