import React from 'react';

export type AccordionPropsType = {
    collapsed: boolean
    valueTitle: string
    onChange: (accordionCollapsed: boolean) => void
    /**
     * List items
     */
    items: ItemType[]
    /**
     * Callback function then opened menu
     * @param value
     */
    onClick: (value: any) => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle value={props.valueTitle}
                            color={props.color}
                            onChange={ () => props.onChange(props.collapsed)}
            />
            {!props.collapsed && <AccordionText items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitleType = {
    value: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 style={{color: props.color ? props.color : "black"}}
            onClick={props.onChange}>{props.value}</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

type ItemType = {
    value: any
    title: string
}

function AccordionText(props: AccordionBodyPropsType) {
    return (
        <div>
            { props.items.map( (el,index) => <li key={index}
                                                 onClick={ () => {props.onClick(el.value)} }>{el.title}</li> ) }
        </div>
    )
}
