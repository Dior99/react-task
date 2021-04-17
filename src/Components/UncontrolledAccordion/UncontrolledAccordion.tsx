import React, {useState} from 'react';

type AccordionPropsType = {
    value: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true);


    return (
        <div>
            <AccordionTitle value={props.value}
                            onClick={ () => {setCollapsed(!collapsed)} }
                            />
            { collapsed && <AccordionText/>}
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

export default UncontrolledAccordion;