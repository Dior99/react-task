import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const AccordionTemplate = (args: AccordionPropsType) => <Accordion {...args} />;

const callback = action("accordion mode change event fired");

export const CollapsedMode = () => <Accordion collapsed={true} value={"Menu One"} onClick={callback}/>
export const UncollapsedMode = () => <Accordion collapsed={false} value={"Menu Two"} onClick={callback}/>

export const AccordionChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return <Accordion collapsed={accordionCollapsed} value={"Menu Two"} onClick={ () => {
        setAccordionCollapsed(!accordionCollapsed)
    }}/>
}
