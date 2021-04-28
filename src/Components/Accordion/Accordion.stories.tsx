import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const EventsCategory = (CategoryName: string) => ({
        table: {
            category: CategoryName
        }
    }
)

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            ...EventsCategory("Color")
        },
        onChange: {
            ...EventsCategory("Event")
        },
        onClick: {
            ...EventsCategory("Event")
        },
        items: {
            ...EventsCategory("Other")
        },
        collapsed: {
            ...EventsCategory("Other")
        },
        titleValue: {
            ...EventsCategory("Other")
        },
    }
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const AccordionTemplate: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback,
}

export const CollapsedMode = AccordionTemplate.bind({})
CollapsedMode.args = {
    ...callbacksProps,
    collapsed: true,
    valueTitle: "Menu One",
    items: [],
}

export const UncollapsedMode = AccordionTemplate.bind({})
UncollapsedMode.args = {
    ...callbacksProps,
    collapsed: false,
    valueTitle: "Menu Two",
    items: [
        {value: 1, title: "Dima",},
        {value: 2, title: "Kristina",},
        {value: 3, title: "Misha",},
    ],
}

export const AccordionChanging: Story<AccordionPropsType> = (args) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion {...args} collapsed={accordionCollapsed}
                      onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
}
AccordionChanging.args = {
    valueTitle: "Menu Two",
    items: [
        {value: 1, title: "Dima",},
        {value: 2, title: "Kristina",},
        {value: 3, title: "Misha",},
    ],
    onClick: onClickCallback,
}
