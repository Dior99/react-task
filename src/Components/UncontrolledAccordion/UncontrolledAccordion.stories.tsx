import React from 'react';
import {AccordionPropsType, UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const UncontrolledAccordionTemplate = (args: AccordionPropsType) => <UncontrolledAccordion {...args} />;

export const ModeChanging = () => <UncontrolledAccordion value={'Menu One'}/>



