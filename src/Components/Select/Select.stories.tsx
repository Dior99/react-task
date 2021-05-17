import React, {useState} from 'react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Select',
    component: Select,
}

const WithSelectTemplate: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<string>('2')
    return <Select {...args} value={value} onChange={setValue}/>
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const WithValue = WithSelectTemplate.bind({})
WithValue.args = {
    value: '2',
    onChange: callback,
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ],
}

const WithoutSelectTemplate: Story<SelectPropsType> = (args) => <Select {...args} />

export const WithoutValue = WithoutSelectTemplate.bind({})
WithoutValue.args = {
    onChange: callback,
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ],
    value: "",
}


