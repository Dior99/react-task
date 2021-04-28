import React from 'react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

const SelectTemplate = (args: SelectPropsType) => <Select {...args} />;

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const SelectMode = () => <Select onChange={callback}
                                           items={[
                                               {value: 1, title: "Dima",},
                                               {value: 2, title: "Kristina",},
                                               {value: 3, title: "Misha",},
                                           ]}/>



