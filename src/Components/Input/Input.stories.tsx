import React from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Input, InputPropsType} from "./Input";

export default {
    title: 'Input',
    component: Input,
}

const callback = action("input mode change event fired");

const InputTemplate: Story<InputPropsType> = (args) => <Input {...args} />;

export const InputMode = InputTemplate.bind({})
InputMode.args = {
    value: "",
    onChange: callback,
}



